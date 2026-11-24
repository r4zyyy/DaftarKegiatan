// ============================================================================
// src/components/ActivityCard.jsx
// Komponen kartu untuk menampilkan satu item kegiatan beserta tombol aksinya.
// ============================================================================

import { useState } from 'react';
import Badge from './Badge';
import Button from './Button';

/**
 * Menerima PROPS:
 * - activity: objek satu kegiatan { id, judul, kategori, tanggal, waktu, lokasi, deskripsi, status }
 * - onToggleStatus: fungsi dari parent untuk mengubah status Belum <-> Selesai
 * - onDelete: fungsi dari parent untuk menghapus kegiatan
 */
function ActivityCard({ activity, onToggleStatus, onDelete }) {
  // STATE lokal untuk mengatur tampil/sembunyi detail (lokasi & deskripsi)
  const [showDetail, setShowDetail] = useState(false);

  const isDone = activity.status === 'Selesai';

  return (
    // CONDITIONAL RENDERING (gaya CSS): tambahkan class 'is-done' jika status Selesai
    <article className={`activity-card ${isDone ? 'is-done' : ''}`}>
      <div className="card-top">
        <h3 className="activity-title">{activity.judul}</h3>

        {/* Menggunakan komponen reusable Badge untuk kategori dan status */}
        <div className="badge-group">
          <Badge text={activity.kategori} />
          <Badge text={activity.status} />
        </div>
      </div>

      <div className="activity-meta">
        <span>Tanggal: {activity.tanggal}</span>
        <span>Waktu: {activity.waktu}</span>
      </div>

      {/* CONDITIONAL RENDERING: detail lokasi & deskripsi hanya muncul jika showDetail === true */}
      {showDetail && (
        <div className="activity-detail">
          <div>
            <strong>Lokasi:</strong> {activity.lokasi}
          </div>
          <div>
            <strong>Deskripsi:</strong> {activity.deskripsi}
          </div>
        </div>
      )}

      <div className="card-actions">
        {/* EVENT HANDLING: onClick mengubah status Belum / Selesai */}
        <Button
          size="sm"
          variant={isDone ? 'secondary' : 'success'}
          onClick={() => onToggleStatus(activity.id)}
        >
          {isDone ? 'Tandai Belum' : 'Tandai Selesai'}
        </Button>

        {/* EVENT HANDLING: onClick toggle tampil/sembunyi detail */}
        <Button
          size="sm"
          variant="ghost"
          onClick={() => setShowDetail((prev) => !prev)}
        >
          {showDetail ? 'Sembunyikan Detail' : 'Lihat Detail'}
        </Button>

        {/* EVENT HANDLING: onClick menghapus kegiatan berdasarkan id */}
        <Button
          size="sm"
          variant="danger"
          onClick={() => onDelete(activity.id)}
        >
          Hapus
        </Button>
      </div>
    </article>
  );
}

export default ActivityCard;
