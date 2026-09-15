# Muhammad Falleryan — Portfolio

Portfolio pribadi satu halaman dengan splash screen multibahasa, animasi ambient, scroll reveal, mode gelap/terang, pilihan bahasa, kategori karya, dan modal detail project.

## Stack

- Next.js 16 App Router
- React 19 + TypeScript
- Tailwind CSS v4
- Lucide React
- CSS animations dengan dukungan `prefers-reduced-motion`

## Inisialisasi di VS Code

1. Install Node.js versi 20 atau lebih baru dan pnpm.
2. Buka folder project ini di VS Code.
3. Buka terminal VS Code lalu jalankan:

```bash
pnpm install
pnpm dev
```

4. Buka `http://localhost:3000`.

Untuk build production:

```bash
pnpm build
pnpm start
```

## Kustomisasi

- Edit data `expertise`, `experiences`, dan `projects` di `app/page.tsx`.
- Ganti link CV Google Drive pada anchor dengan teks `View CV`.
- Ganti link GitHub dan LinkedIn pada bagian penutup serta modal project.
- Ubah email `hello@muhammadfalleryan.dev` menjadi alamat email pribadi.
- Tambahkan atau ubah terjemahan pada object `copy` dan daftar `languages`.
- Atur warna, typography, ambient background, dan breakpoint di `app/globals.css`.

## Catatan

Theme dan bahasa disimpan di browser agar pilihan pengguna tetap digunakan saat halaman dibuka kembali. Untuk menonaktifkan animasi, pengguna dapat mengaktifkan Reduce Motion di pengaturan sistem.

## Deploy

Project ini siap dideploy ke Vercel. Hubungkan repository GitHub, pilih framework Next.js, lalu gunakan `pnpm build` sebagai build command jika diminta.
