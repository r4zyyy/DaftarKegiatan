// ============================================================================
// src/components/ActivitySummary.jsx
// Komponen ringkasan statistik jumlah kegiatan (Total, Belum, Selesai).
// ============================================================================

/**
 * Menerima PROPS:
 * - total: jumlah seluruh kegiatan
 * - pending: jumlah kegiatan berstatus 'Belum'
 * - completed: jumlah kegiatan berstatus 'Selesai'
 */
function ActivitySummary({ total, pending, completed }) {
  return (
    <section className="summary-grid" aria-label="Ringkasan Kegiatan">
      <div className="summary-card">
        <span className="summary-label">Total Kegiatan</span>
        <span className="summary-value">{total}</span>
      </div>

      <div className="summary-card pending">
        <span className="summary-label">Belum Selesai</span>
        <span className="summary-value">{pending}</span>
      </div>

      <div className="summary-card done">
        <span className="summary-label">Sudah Selesai</span>
        <span className="summary-value">{completed}</span>
      </div>
    </section>
  );
}

export default ActivitySummary;
