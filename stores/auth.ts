import { defineStore } from 'pinia';
import { 
    signInWithEmailAndPassword, 
    createUserWithEmailAndPassword, 
    signOut, 
    updateProfile,
    type User as FirebaseUser 
} from 'firebase/auth';
import type { User } from '~/types';

export const useAuthStore = defineStore('auth', () => {
    const user = ref<User | null>(null);
    const isAuthenticated = computed(() => !!user.value);
    
    const { $auth } = useNuxtApp();

    // Initialize user state listener
    if (process.client && $auth) {
        $auth.onAuthStateChanged((currentUser: FirebaseUser | null) => {
            if (currentUser) {
                user.value = {
                    uid: currentUser.uid,
                    email: currentUser.email || '',
                    displayName: currentUser.displayName || '',
                    photoURL: currentUser.photoURL || ''
                };
            } else {
                user.value = null;
            }
        });
    }

    const login = async (email: string, pass: string) => {
        if (!$auth) return;
        try {
            await signInWithEmailAndPassword($auth, email, pass);
        } catch (error) {
            console.error(error);
            throw error;
        }
    };

    const register = async (email: string, pass: string, name: string) => {
        if (!$auth) return;
        try {
            const userCredential = await createUserWithEmailAndPassword($auth, email, pass);
            await updateProfile(userCredential.user, {
                displayName: name
            });
            
            // Also save to Firestore 'users' collection so it appears in the database table
            const { $db } = useNuxtApp();
            if ($db) {
                const { doc, setDoc } = await import('firebase/firestore');
                await setDoc(doc($db, 'users', userCredential.user.uid), {
                    email: email,
                    displayName: name,
                    createdAt: new Date(),
                    uid: userCredential.user.uid
                });
            }

            // Force update local user
            user.value = {
                uid: userCredential.user.uid,
                email: email,
                displayName: name
            };
        } catch (error) {
            console.error(error);
            throw error;
        }
    };

    const logout = async () => {
        if (!$auth) return;
        await signOut($auth);
    };

    const resetPassword = async (email: string) => {
        if (!$auth) return;
        try {
            const { sendPasswordResetEmail } = await import('firebase/auth');
            await sendPasswordResetEmail($auth, email);
        } catch (error) {
            console.error(error);
            throw error;
        }
    };

    return {
        user,
        isAuthenticated,
        login,
        register,
        logout,
        resetPassword
    };
});
