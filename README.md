# SkyHost — Web Hosting Storefront

Starter project Next.js untuk brand SkyHost dengan tema dark modern dan konfigurasi deploy Vercel.

## Fitur yang tersedia
- Landing page responsif berbahasa Indonesia
- Bagian fitur, paket harga, FAQ, dan CTA
- Formulir permintaan pemesanan untuk tiga paket
- Pilihan metode pembayaran Transfer Bank atau QRIS
- Penyimpanan permintaan pesanan demo di `localStorage` browser
- Konfigurasi Vercel dengan region Singapura (`sin1`)

## Menjalankan secara lokal
Pastikan Node.js 18.17+ terpasang.

```bash
npm install
npm run dev
```

Buka http://localhost:3000.

Untuk memeriksa build:
```bash
npm run build
```

## Deploy ke Vercel
1. Buat repository GitHub baru dan upload seluruh isi folder ini.
2. Masuk ke Vercel dan pilih **Add New → Project**.
3. Import repository SkyHost.
4. Framework akan terdeteksi sebagai Next.js. Klik **Deploy**.
5. Setelah build berhasil, Vercel memberikan URL `*.vercel.app`.

## Penting sebelum menerima pelanggan sungguhan
Proyek ini adalah **frontend storefront / MVP**, bukan infrastruktur penyedia hosting yang sudah beroperasi.

Yang masih perlu disiapkan:
- Server hosting (misalnya VPS atau platform reseller hosting), panel hosting, DNS, dan provisioning akun.
- Database dan backend untuk akun pelanggan, pesanan, invoice, serta status layanan.
- Login aman dan role admin/pelanggan.
- Detail rekening bank dan QRIS resmi milik bisnis.
- Proses verifikasi pembayaran oleh admin atau integrasi payment gateway yang sah.
- Email transaksi, kebijakan privasi, syarat layanan, refund, dan dukungan pelanggan.

### Tentang formulir pemesanan
Formulir menyimpan data hanya di browser pengunjung menggunakan `localStorage`. Data **tidak dikirim ke admin/server** dan tidak boleh dipakai untuk memproses pesanan sungguhan. Hubungkan ke backend/database dan tambahkan validasi serta perlindungan data sebelum diluncurkan untuk pelanggan.

### Tentang harga dan klaim
Harga paket, kapasitas, dan target uptime pada halaman ini adalah konten contoh. Ubah agar sesuai kemampuan infrastruktur dan biaya operasional sebenarnya. Jangan mengiklankan SLA, backup, SSL, atau fitur yang belum benar-benar tersedia.
