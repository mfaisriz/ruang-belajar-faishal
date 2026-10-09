# Ruang Belajar Faishal

Website statis pendidikan untuk sekolah dasar, dibuat dengan HTML, CSS, dan JavaScript murni. Tidak membutuhkan database atau server khusus.

## Isi folder
- `index.html` — struktur halaman dan konten utama
- `style.css` — desain responsif
- `script.js` — contoh materi, filter pencarian, unduhan, artikel, dan kuis
- `materi/` — letakkan PDF/PPT/DOC milik Anda di sini

## Cara melihat di komputer
1. Ekstrak ZIP.
2. Buka folder `ruang-belajar-faishal`.
3. Klik dua kali `index.html`; website akan terbuka di browser.
4. Untuk pengalaman terbaik, koneksi internet dibutuhkan untuk font Google. Website tetap berfungsi tanpa font tersebut.

## Cara mengubah konten
Buka `script.js` menggunakan Notepad atau editor teks. Ubah daftar `materials`, `downloads`, `articles`, dan `quizQuestions`. Simpan lalu muat ulang `index.html`.

Untuk menambahkan unduhan:
1. Salin file Anda ke folder `materi`, misalnya `modul-kelas-4.pdf`.
2. Di salah satu objek `downloads` pada `script.js`, isi properti `url: 'materi/modul-kelas-4.pdf'`.
3. Sesuaikan judul, deskripsi, dan formatnya. Jangan membagikan dokumen yang tidak Anda miliki izin untuk menyebarkannya.

## Cara menambahkan video YouTube
Di `index.html`, cari bagian `id="video"`. Untuk video publik yang boleh disematkan, ganti ilustrasi video dengan:

```html
<div class="video-window">
  <iframe
    width="100%"
    height="315"
    src="https://www.youtube-nocookie.com/embed/ID_VIDEO"
    title="Video pembelajaran"
    loading="lazy"
    referrerpolicy="strict-origin-when-cross-origin"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen></iframe>
</div>
```

Ganti `ID_VIDEO` dengan ID dari URL video YouTube. Pastikan pemilik video mengizinkan penyematan.

## Publikasi gratis dengan GitHub Pages
1. Buat/masuk akun di https://github.com/.
2. Buat repository baru bernama `ruang-belajar-faishal` dan pilih Public.
3. Unggah `index.html`, `style.css`, `script.js`, `README.md`, serta folder `materi` beserta berkas yang ingin dipublikasikan. Unggah isi folder website, bukan file ZIP saja.
4. Buka **Settings → Pages** pada repository.
5. Pada bagian **Build and deployment**, pilih **Deploy from a branch**; pilih branch `main` dan folder `/(root)`, lalu klik **Save**.
6. Tunggu proses deployment selesai. URL biasanya berbentuk `https://NAMA-AKUN.github.io/ruang-belajar-faishal/`.
7. Buka URL tersebut untuk memeriksa website. Perubahan berikutnya dipublikasikan setelah file diperbarui dan proses deployment selesai.

Nama repository dan URL dapat berbeda jika Bapak memilih nama lain. Hindari memasukkan data pribadi siswa atau dokumen internal sekolah ke situs publik.

## Sebelum dibagikan
- Ganti email contoh `ruangbelajar@example.com` di `index.html` dengan email yang memang ingin ditampilkan, atau hapus tombol kontak.
- Periksa semua materi dan tautan.
- Tambahkan profil/portofolio yang akurat dan disetujui untuk publik.
- Uji di HP dan komputer.
- Pastikan berkas yang diunggah boleh dibagikan secara publik.

## Catatan
Website ini adalah paket kode siap diunggah, bukan website yang otomatis telah terbit. Hosting, alamat URL, dan indeks Google perlu disiapkan setelah Bapak mengikuti langkah publikasi. Agar ditemukan melalui pencarian Google, setelah tayang Bapak dapat mendaftarkan domain/URL melalui Google Search Console; pengindeksan tidak instan dan tidak menjamin posisi tertentu.
