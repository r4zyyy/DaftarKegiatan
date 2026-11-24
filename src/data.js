// ============================================================================
// src/data.js
// File ini menyimpan data identitas mahasiswa, daftar pilihan kategori/status,
// serta 5 data contoh awal kegiatan.
// ============================================================================

// Identitas mahasiswa (silakan ganti nilai di bawah sesuai data dirimu)
export const STUDENT_INFO = {
  nama: 'Muhammad Ramdhan Al Qusyairi',
  nim: '1247050121',
  kampus: 'Universitas Islam Negeri Sunan Gunung Djati Bandung',
};

// Daftar kategori yang tersedia untuk kegiatan
export const CATEGORIES = ['Kuliah', 'Organisasi', 'Pribadi', 'Lainnya'];

// Daftar status kegiatan
export const STATUSES = ['Belum', 'Selesai'];

// 5 data contoh awal kegiatan
export const initialActivities = [
  {
    id: 1,
    judul: 'Kuliah Pemrograman Web Lanjut',
    kategori: 'Kuliah',
    tanggal: '2026-11-26',
    waktu: '08:00',
    lokasi: 'Gedung FIK Ruang 302',
    deskripsi:
      'Membahas konsep Component-Based UI Development dengan React, props, dan state management dasar.',
    status: 'Belum',
  },
  {
    id: 2,
    judul: 'Rapat Koordinasi Himpunan Mahasiswa',
    kategori: 'Organisasi',
    tanggal: '2026-11-26',
    waktu: '15:30',
    lokasi: 'Sekretariat BEM / Ruang Rapat 2',
    deskripsi:
      'Evaluasi program kerja bulan November dan pembagian panitia seminar teknologi kampus.',
    status: 'Belum',
  },
  {
    id: 3,
    judul: 'Mengerjakan Tugas Struktur Data',
    kategori: 'Kuliah',
    tanggal: '2026-11-25',
    waktu: '19:30',
    lokasi: 'Kamar Kost / Perpustakaan Pusat',
    deskripsi:
      'Implementasi Binary Search Tree dan latihan soal kompleksitas waktu sebelum deadline.',
    status: 'Selesai',
  },
  {
    id: 4,
    judul: 'Olahraga Sore & Jogging Ringan',
    kategori: 'Pribadi',
    tanggal: '2026-11-27',
    waktu: '16:45',
    lokasi: 'Lapangan Stadion Kampus',
    deskripsi:
      'Jogging 30 menit untuk menjaga kebugaran tubuh di sela jadwal kuliah yang padat.',
    status: 'Belum',
  },
  {
    id: 5,
    judul: 'Belanja Kebutuhan Bulanan',
    kategori: 'Lainnya',
    tanggal: '2026-11-24',
    waktu: '17:00',
    lokasi: 'Minimarket Dekat Kampus',
    deskripsi:
      'Membeli alat tulis, buku catatan, kopi, dan kebutuhan harian untuk satu minggu ke depan.',
    status: 'Selesai',
  },
];
