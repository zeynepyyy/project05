export const useAuthModal = () => {
    const isAuthOpen = useState('isAuthOpen', () => false)
    const authView = useState< 'signin' | 'register' | 'forgot' >('authView', () => 'signin')

    const openSignIn = () => {
        authView.value = 'signin'
        isAuthOpen.value = true
    }

    const openRegister = () => {
        authView.value = 'register'
        isAuthOpen.value = true
    }

    const openForgot = () => {
        authView.value = 'forgot'
        isAuthOpen.value = true
    }

    const closeAuth = () => {
        isAuthOpen.value = false
    }

    return {
        isAuthOpen,
        authView,
        openSignIn,
        openRegister,
        openForgot,
        closeAuth
    }
}
