// ============================================================================
// src/components/ActivityForm.jsx
// Komponen formulir untuk menambahkan kegiatan baru dengan validasi input.
// ============================================================================

import { useState } from 'react';
import { CATEGORIES } from '../data';
import Button from './Button';

/**
 * Menerima PROPS:
 * - onAddActivity: fungsi callback dari App.jsx untuk menambah kegiatan baru
 */
function ActivityForm({ onAddActivity }) {
  // STATE: menyimpan nilai setiap input form menggunakan useState
  const [judul, setJudul] = useState('');
  const [kategori, setKategori] = useState('');
  const [tanggal, setTanggal] = useState('');
  const [waktu, setWaktu] = useState('');
  const [lokasi, setLokasi] = useState('');
  const [deskripsi, setDeskripsi] = useState('');

  // STATE: menyimpan pesan error validasi form
  const [errorMessage, setErrorMessage] = useState('');

  // EVENT HANDLING: menangani pengiriman form (onSubmit)
  const handleSubmit = (event) => {
    event.preventDefault(); // Mencegah reload halaman bawaan browser

    // Validasi wajib: judul, tanggal, dan kategori harus diisi
    if (!judul.trim() || !tanggal || !kategori) {
      setErrorMessage(
        'Judul kegiatan, tanggal, dan kategori wajib diisi terlebih dahulu.'
      );
      return;
    }

    // Kirim data kegiatan baru ke parent (App) lewat props fungsi onAddActivity
    onAddActivity({
      judul: judul.trim(),
      kategori,
      tanggal,
      waktu: waktu || '-',
      lokasi: lokasi.trim() || 'Belum ditentukan',
      deskripsi: deskripsi.trim() || 'Tidak ada deskripsi tambahan.',
    });

    // Reset semua input form dan hapus pesan error setelah berhasil
    setJudul('');
    setKategori('');
    setTanggal('');
    setWaktu('');
    setLokasi('');
    setDeskripsi('');
    setErrorMessage('');
  };

  return (
    <section className="panel-card">
      <h2 className="panel-title">Tambah Kegiatan Baru</h2>

      {/* EVENT HANDLING: onSubmit memanggil handleSubmit */}
      <form className="activity-form" onSubmit={handleSubmit}>
        {/* CONDITIONAL RENDERING: tampilkan pesan error jika errorMessage tidak kosong */}
        {errorMessage && (
          <div className="form-error" role="alert">
            {errorMessage}
          </div>
        )}

        <div className="form-group">
          <label className="form-label" htmlFor="judul">
            Judul Kegiatan <span className="required-mark">*</span>
          </label>
          <input
            id="judul"
            type="text"
            className="form-input"
            placeholder="Contoh: Rapat Panitia Seminar"
            value={judul}
            // EVENT HANDLING: onChange memperbarui state judul setiap user mengetik
            onChange={(e) => setJudul(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="kategori">
            Kategori <span className="required-mark">*</span>
          </label>
          <select
            id="kategori"
            className="form-select"
            value={kategori}
            onChange={(e) => setKategori(e.target.value)}
          >
            <option value="">-- Pilih Kategori --</option>
            {/* LIST RENDERING: menampilkan pilihan kategori dengan map() dan key unik */}
            {CATEGORIES.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label className="form-label" htmlFor="tanggal">
              Tanggal <span className="required-mark">*</span>
            </label>
            <input
              id="tanggal"
              type="date"
              className="form-input"
              value={tanggal}
              onChange={(e) => setTanggal(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="waktu">
              Waktu
            </label>
            <input
              id="waktu"
              type="time"
              className="form-input"
              value={waktu}
              onChange={(e) => setWaktu(e.target.value)}
            />
          </div>
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="lokasi">
            Lokasi
          </label>
          <input
            id="lokasi"
            type="text"
            className="form-input"
            placeholder="Contoh: Gedung A Ruang 201"
            value={lokasi}
            onChange={(e) => setLokasi(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="deskripsi">
            Deskripsi
          </label>
          <textarea
            id="deskripsi"
            className="form-textarea"
            placeholder="Catatan singkat mengenai kegiatan..."
            value={deskripsi}
            onChange={(e) => setDeskripsi(e.target.value)}
          />
        </div>

        {/* Menggunakan komponen reusable Button dengan type="submit" */}
        <Button type="submit" variant="primary">
          + Tambah Kegiatan
        </Button>
      </form>
    </section>
  );
}

export default ActivityForm;
