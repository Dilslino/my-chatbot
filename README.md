# Chatbot AI Gemini

Sebuah chatbot AI sederhana yang dibangun dengan **Next.js** dan **Google Generative AI**.

## Fitur

- Interaksi percakapan real-time dengan pengguna.
- Mendapatkan respons dinamis dari Google Generative AI.
- Penanganan error untuk pengiriman kosong, kegagalan jaringan, dan kesalahan API.
- Antarmuka pengguna yang responsif dengan Tailwind CSS.

## Instalasi

1. **Clone Repository**

   ```bash
   git clone https://github.com/username/my-chatbot.git
   cd my-chatbot
   ```

2. **Menginstal Dependencies**

   ```bash
   npm install
   ```

3. **Menyiapkan Environment Variables**

      Buat file `.env.local` di root proyek dan tambahkan:

   ```
   GOOGLE_API_KEY=your-google-generative-ai-api-key
   ```
4. **Menjalankan Proyek secara Lokal**

   ```bash
   npm run dev
   ```

   Kunjungi [http://localhost:3000](http://localhost:3000) untuk melihat aplikasi.

## Deploy ke Vercel

1. **Push Kode ke Repository Git**

   Pastikan kode Anda di-push ke repository GitHub, GitLab, atau Bitbucket.

2. **Hubungkan dengan Vercel**

   - Kunjungi [Vercel](https://vercel.com/) dan login atau mendaftar.
   - Klik **"New Project"** dan impor repository Anda.

3. 3. **Set Environment Variables**

   - Setelah memilih repository, tambahkan `GOOGLE_API_KEY` di bagian environment variables.

4. **Deploy**

   Klik **"Deploy"** dan tunggu hingga proses selesai. Setelah deploy, Anda akan mendapatkan URL untuk aplikasi Anda.

## Teknologi yang Digunakan

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Google Generative AI](https://ai.google.dev/)
- [Axios](https://axios-http.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide React](https://lucide.dev/)

## Lisensi

Proyek ini menggunakan [Google Generative AI](https://ai.google.dev/) yang tunduk pada [Terms of Service](https://ai.google.dev/terms).

## Kontak

Jika Anda memiliki pertanyaan atau memerlukan bantuan lebih lanjut, silakan hubungi melalui [email Anda].

## Terima Kasih

Terima kasih telah menggunakan proyek ini!