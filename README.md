# Chaerudin Saputra Portfolio Website

Portfolio website berbasis **Next.js** dan siap di-deploy ke **Vercel**. Konten dibuat berdasarkan CV dan PDF/Canva portfolio yang diberikan.

## Menu yang sudah ada

- Home
- About
- Experience
- Projects
- Achievements
- Certifications
- Organization
- Contact
- Portfolio Gallery

## Cara menjalankan di local

```bash
npm install
npm run dev
```

Buka `http://localhost:3000`.

## Cara deploy ke Vercel

1. Extract ZIP ini.
2. Buka folder project di VS Code.
3. Jalankan `npm install` untuk memastikan project bisa jalan.
4. Push folder ini ke GitHub.
5. Buka Vercel → Add New Project → Import repo GitHub.
6. Framework akan otomatis terdeteksi sebagai Next.js.
7. Klik Deploy.

## Cara mengganti gambar

Semua gambar portfolio ada di:

```text
public/portfolio-images/
```

Ganti file seperti `page-02.webp`, `page-03.webp`, dst. dengan screenshot/gambar baru dari Canva/Figma/Power BI menggunakan nama file yang sama. Kalau mau pakai nama file berbeda, ubah path gambar di:

```text
app/page.tsx
```

## File penting

- `app/page.tsx` → semua isi section, project, pengalaman, dan menu.
- `app/globals.css` → semua styling website.
- `public/assets/Chaerudin-Saputra-CV.docx` → file CV untuk tombol Download CV.
- `public/assets/Chaerudin-Saputra-Portfolio.pdf` → file PDF portfolio untuk tombol Open PDF Portfolio.

## Catatan

Website ini sengaja dibuat tanpa library UI tambahan agar ringan, mudah diedit, dan aman untuk deployment Vercel.
