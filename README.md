This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/pages/api-reference/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/pages/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn-pages-router) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/pages/building-your-application/deploying) for more details.

## Praktikum 3

<table>
    <tr>
        <td>Nama</td>
        <td>Raihan Fazzaufa Rasendriya</td>
    </tr>
    <tr>
        <td>NIM</td>
        <td>2241720201</td>
    </tr>
    <tr>
        <td>Kelas</td>
        <td>TI - 3B</td>
    </tr>
    <tr>
        <td>No. Absen</td>
        <td>17</td>
    </tr>
</table>

### 1. Pesiapan Lingkungan
1. Pastikan Node.js dan npm sudah terinstal di komputer Anda. Anda dapat memeriksanya dengan menjalankan perintah berikut di terminal atau command prompt:

!['1-1.png'](/screenshots/1-1.png)

2. Buat direktori baru untuk proyek Next.js Anda 

!['1-2.png'](/screenshots/1-2.png)

3. Inisialisasi proyek Next.js dengan menjalankan perintah berikut: Perhatikan bahwa App Router 
belum digunakan

!['1-3.png'](/screenshots/1-3.png)

4. Jalankan aplikasi Next.js dengan perintah:

!['1-4.png'](/screenshots/1-4.png)

Aplikasi akan terbuka di browser pada alamat http://localhost:3000.

!['1-5.png'](/screenshots/1-5.png)

### 2. Membuat Halaman dengan Server-Side Rendering  (SSR)
1. Buka file pages/index.tsx di text editor Anda.

2. Ganti kode di dalamnya dengan kode berikut untuk membuat halaman sederhana:

!['2-2.png'](/screenshots/2-2.png)

3. Simpan file dan lihat perubahan di browser. Anda akan melihat halaman utama dengan teks "Selamat Datang di Website Saya!".

!['2-3.png'](/screenshots/2-3.png)

### 3. Menggunakan Static Site Generation (SSG)
1. Buat file baru di direktori pages dengan nama blog.js.

2. Tambahkan kode berikut untuk membuat halaman blog dengan SSG:

!['3-2.png'](/screenshots/3-2.png)

3. Simpan file dan buka http://localhost:3000/blog di browser. Anda akan melihat daftar post yang diambil dari API eksternal. 

!['3-3.png'](/screenshots/3-3.png)

### 4. Menggunakan Dynamic Routes
1. Buat direktori baru di pages dengan nama blog.

2. Buat file di dalam direktori blog dengan nama ``[slug].js`` 

3. Tambahkan kode berikut untuk membuat halaman dinamis berdasarkan slug: 

!['4-2.png'](/screenshots/4-2.png)

4. Simpan file dan buka http://localhost:3000/blog/contoh-post di browser. Anda akan melihat halaman yang menampilkan slug dari URL.

!['4-3.png'](/screenshots/4-3.png)

### 5. Menggunakan API Routes
1. Pastikan terdapat direktori di pages dengan nama api. 

2. Buat file di dalam direktori api dengan nama products.js.

3. Tambahkan kode berikut untuk membuat API route yang mengembalikan daftar produk: 

!['5-3.png'](/screenshots/5-3.png)

4. Buat file baru di pages dengan nama products.js untuk menampilkan daftar produk:

!['5-4.png'](/screenshots/5-4.png)

5. Simpan file dan buka http://localhost:3000/products di browser. Anda akan melihat daftar 
produk yang diambil dari API route.

!['5-5.png'](/screenshots/5-5.png)

### 6. Menggunakan Link Component 
1. Buka file pages/index.tsx dan tambahkan modif dengan kode berikut untuk membuat link ke halaman lain:

!['6-1.png'](/screenshots/6-1.png)

2. Buat file baru di pages dengan nama about.js untuk halaman "Tentang Kami":

!['6-2.png'](/screenshots/6-2.png)

3. Simpan file dan buka http://localhost:3000 di browser. Klik link "Tentang Kami" untuk navigasi ke halaman tentang. 

!['6-3-1.png'](/screenshots/6-3-1.png)

!['6-3-2.png'](/screenshots/6-3-2.png)

### Tugas
1. Buat halaman baru dengan menggunakan Static Site Generation (SSG) yang menampilkan daftar pengguna dari API https://jsonplaceholder.typicode.com/users. 

!['t1-1.png'](/screenshots/t1-1.png)

!['t1-2.png'](/screenshots/t1-2.png)

2. Implementasikan Dynamic Routes untuk menampilkan detail pengguna berdasarkan ID.

!['t2-1.png'](/screenshots/t2-1.png)

!['t2-2.png'](/screenshots/t2-2.png)

3. Buat API route yang mengembalikan data cuaca dari API eksternal (misalnya,  OpenWeatherMap) dan tampilkan data tersebut di halaman front-end.

!['t3-1.png'](/screenshots/t3-1.png)

!['t3-2.png'](/screenshots/t3-2.png)

!['t3-3.png'](/screenshots/t3-3.png)