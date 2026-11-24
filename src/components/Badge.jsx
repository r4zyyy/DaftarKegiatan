// ============================================================================
// src/components/Badge.jsx
// KOMPONEN REUSABLE #2: Badge
// Komponen label kecil untuk menampilkan kategori dan status kegiatan
// dengan warna berbeda sesuai nilai props-nya.
// ============================================================================

// Pemetaan nilai label ke class CSS agar warna tiap kategori & status berbeda
const BADGE_CLASS_MAP = {
  Kuliah: 'badge-kuliah',
  Organisasi: 'badge-organisasi',
  Pribadi: 'badge-pribadi',
  Lainnya: 'badge-lainnya',
  Belum: 'badge-belum',
  Selesai: 'badge-selesai',
};

/**
 * Menerima PROPS:
 * - text: teks yang ditampilkan di dalam badge (misal: 'Kuliah' atau 'Selesai')
 */
function Badge({ text }) {
  const variantClass = BADGE_CLASS_MAP[text] || 'badge-lainnya';

  return <span className={`badge ${variantClass}`}>{text}</span>;
}

export default Badge;
