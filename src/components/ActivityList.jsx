// ============================================================================
// src/components/ActivityList.jsx
// Komponen untuk merender daftar kegiatan atau pesan kosong jika tidak ada data.
// ============================================================================

import ActivityCard from './ActivityCard';

/**
 * Menerima PROPS:
 * - activities: array kegiatan yang sudah difilter dari App.jsx
 * - onToggleStatus: fungsi ubah status yang diteruskan ke ActivityCard
 * - onDelete: fungsi hapus kegiatan yang diteruskan ke ActivityCard
 */
function ActivityList({ activities, onToggleStatus, onDelete }) {
  // CONDITIONAL RENDERING: jika daftar kegiatan kosong, tampilkan pesan ramah
  if (activities.length === 0) {
    return (
      <div className="empty-state">
        <h3>Belum ada kegiatan yang sesuai</h3>
        <p>
          Tambahkan kegiatan baru lewat formulir di samping, atau ubah kata
          kunci pencarian dan filter.
        </p>
      </div>
    );
  }

  return (
    <div className="activity-list">
      {/* LIST RENDERING: menggunakan map() dengan key unik (activity.id) */}
      {activities.map((activity) => (
        <ActivityCard
          key={activity.id}
          activity={activity}
          onToggleStatus={onToggleStatus}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default ActivityList;
