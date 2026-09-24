# Equalizer Landing Page

Landing page untuk aplikasi **Equalizer**, dibangun sebagai implementasi responsive berdasarkan desain yang telah disediakan sebelumnya.

Project ini dibuat menggunakan **Next.js, React, TypeScript, dan Tailwind CSS**, dengan fokus pada akurasi tampilan, responsive design, dan implementasi layout untuk desktop, tablet, dan mobile.

## Technologies Used

- Next.js
- React
- TypeScript
- Tailwind CSS
- ESLint

## Getting Started

Pastikan **Node.js** sudah terpasang pada perangkat.

Clone repository:

```bash
git clone <repository-url>
cd <project-folder>
```

Install dependencies:

```bash
npm install
```

Jalankan development server:

```bash
npm run dev
```

Kemudian buka:

`http://localhost:3000`

di browser.

## Available Scripts

```bash
npm run dev
```

Menjalankan development server.

```bash
npm run build
```

Membuat production build.

```bash
npm run start
```

Menjalankan aplikasi dari production build.

```bash
npm run lint
```

Menjalankan ESLint untuk memeriksa kualitas kode.

## Responsive Design

Landing page diimplementasikan agar dapat menyesuaikan tampilan pada berbagai ukuran layar, meliputi:

- Desktop
- Tablet
- Mobile

Responsive layout dibuat menggunakan utility responsive dari Tailwind CSS serta kombinasi Flexbox, Grid, dan positioning untuk menyesuaikan komposisi desain pada setiap ukuran layar.

## Assets

Seluruh visual asset yang digunakan pada halaman disimpan di dalam:

```text
/public/assets/
```

Asset digunakan secara lokal tanpa mengambil atau menggantinya dengan asset eksternal.

## Font

Project menggunakan **IBM Plex Sans** sebagai font utama.

Font dimuat dan dioptimalkan menggunakan `next/font` pada Next.js.

## Challenges & Solutions

### Responsive Layout

Salah satu tantangan dalam implementasi adalah menyesuaikan posisi ilustrasi aplikasi, background pattern, dan premium card karena susunan elemen berubah antara desktop, tablet, dan mobile.

Hal ini ditangani dengan menggunakan responsive utilities dari Tailwind CSS serta kombinasi Flexbox, Grid, relative positioning, dan absolute positioning pada elemen yang membutuhkan overlapping.

### Asset Positioning

Beberapa decorative asset memiliki posisi yang berbeda pada setiap ukuran layar.

Untuk menjaga layout tetap responsive, positioning dan ukuran asset disesuaikan berdasarkan breakpoint sehingga elemen tetap mengikuti komposisi desain tanpa menyebabkan horizontal overflow.

### Next.js Image Handling

Asset gambar diintegrasikan ke dalam struktur project melalui direktori `public/assets` dan digunakan pada komponen Next.js dengan tetap mempertahankan aspect ratio agar gambar tidak mengalami distorsi pada ukuran layar yang berbeda.

## Production Build

Untuk memastikan project dapat dijalankan pada production environment:

```bash
npm run build
```

Setelah proses build berhasil, production server dapat dijalankan dengan:

```bash
npm run start
```

## Deployment

Project dapat di-deploy menggunakan **Vercel**.

Setelah repository terhubung dengan Vercel, aplikasi dapat dibuild dan dideploy secara otomatis dari repository.

## Author

**Gilang Ramadhani Alifianto**