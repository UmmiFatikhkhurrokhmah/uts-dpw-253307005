# Portal PPDB SMK Bakti Husada

## Identitas Mahasiswa

| Field  | Keterangan         |
|--------|--------------------|
| NIM    | 123456             |
| Nama   | (Nama Mahasiswa)   |
| Kelas  | TI-2A              |

---

## Deskripsi Project

Project ini merupakan **Portal Pendaftaran Siswa Baru (PPDB)** untuk **SMK Bakti Husada**, dibuat sebagai tugas Ujian Tengah Semester (UTS) mata kuliah Desain & Pemrograman Web (TI24206).

Portal ini dibangun menggunakan HTML5, CSS3, dan JavaScript murni (Vanilla JS) tanpa framework tambahan, dengan struktur multi-page yang modular.

---

## Struktur Folder

```
uts-dpw-123456/
├── asset/
│   ├── css/
│   │   └── style.css
│   ├── img/
│   │   └── alur_pendaftaran.jpeg
│   └── javascript/
│       └── script.js
├── index.html       → Beranda (Jadwal PPDB)
├── alur.html        → Alur Pendaftaran
├── form.html        → Formulir Pendaftaran
└── README.md
```

---

## Fitur

- **Beranda (index.html)**: Sambutan dan tabel jadwal PPDB dengan zebra striping
- **Alur Pendaftaran (alur.html)**: Gambar ilustrasi alur dan daftar bernomor prosedur
- **Formulir (form.html)**: Form interaktif dengan validasi NIK 16 digit dan toast notification
- **CSS3 Modern**: Linear gradient header, hover effect tombol & nav, glow effect pada input focus
- **JavaScript**: Custom toast notification (sukses/error) dengan fade-out otomatis 3 detik
