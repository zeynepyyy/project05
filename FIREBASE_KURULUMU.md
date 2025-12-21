# Firebase Kurulum Rehberi

Gerçek bir veritabanı kullanmak için **Firebase** üzerinde ücretsiz bir proje açmanız gerekiyor. Aşağıdaki adımları sırayla takip edin:

## 1. Firebase Projesi Oluşturma
1.  [console.firebase.google.com](https://console.firebase.google.com/) adresine gidin.
2.  Google hesabınızla giriş yapın.
3.  **"Proje Ekle" (Add Project)** butonuna tıklayın.
4.  Proje ismi olarak **"Etsy-Projem"** (veya istediğiniz bir isim) yazın ve devam edin.
5.  Google Analytics'i kapatabilirsiniz, "Proje Oluştur"a basın.

## 2. Web Uygulaması Ekleme
1.  Proje açıldıktan sonra ana sayfada **</>** simgesine (Web) tıklayın.
2.  Uygulama takma adı girin (örn: "EtsyWeb") ve **"Uygulamayı kaydet"**e basın.
3.  Karşınıza `const firebaseConfig = { ... }` şeklinde bir kod bloğu çıkacak. **Bu bloğu kopyalamayın**, sadece içindeki süslü parantez `{ ... }` arasındaki bilgileri bir yere not edin.

## 3. Firestore Veritabanını Açma
1.  Sol menüden **"Build"** -> **"Firestore Database"**i seçin.
2.  **"Veritabanı oluştur"**a tıklayın.
3.  **"Test modunda başlat" (Start in Test Mode)** seçeneğini seçin (Bu çok önemli, şifresiz yazma izni verir).
4.  Konum olarak "eur3" veya varsayılanı seçip **"Etkinleştir"**e basın.

## 4. Authentication (Giriş) Sistemini Açma
1.  Sol menüden **"Build"** -> **"Authentication"**ı seçin.
2.  **"Get Started"**a basın.
3.  **"Email/Password"** seçeneğini bulup **Etkinleştir (Enable)** diyerek kaydedin.

## 5. Kodu Projeye Yapıştırma
Şimdi VS Code'a geri dönün ve `plugins/firebase.client.ts` dosyasını açın.
`firebaseConfig` kısmını, 2. adımda aldığınız bilgilerle değiştirin:

```typescript
const firebaseConfig = {
    apiKey: "SİZİN_KODUNUZ_BURAYA",
    authDomain: "...",
    projectId: "...",
    storageBucket: "...",
    messagingSenderId: "...",
    appId: "..."
};
```

Bu adımları tamamlayıp dosyayı kaydettiğinizde, siteniz gerçek veritabanına bağlanacaktır.
