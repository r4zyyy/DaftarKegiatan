// ============================================================================
// src/components/ActivityFilter.jsx
// Komponen untuk mencari kegiatan berdasarkan judul/lokasi dan memfilter
// berdasarkan kategori serta status.
// ============================================================================

import { CATEGORIES, STATUSES } from '../data';
import Button from './Button';

/**
 * Menerima PROPS dari App.jsx:
 * - searchQuery, onSearchChange: nilai & handler input pencarian
 * - selectedCategory, onCategoryChange: nilai & handler filter kategori
 * - selectedStatus, onStatusChange: nilai & handler filter status
 * - onResetFilter: fungsi untuk mengembalikan semua filter ke awal
 */
function ActivityFilter({
  searchQuery,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  selectedStatus,
  onStatusChange,
  onResetFilter,
}) {
  return (
    <section className="filter-bar" aria-label="Pencarian dan Filter Kegiatan">
      <div className="filter-controls">
        {/* Input pencarian berdasarkan judul atau lokasi */}
        <input
          type="text"
          className="form-input"
          placeholder="Cari judul atau lokasi kegiatan..."
          value={searchQuery}
          // EVENT HANDLING: onChange memanggil fungsi dari parent
          onChange={(e) => onSearchChange(e.target.value)}
        />

        {/* Dropdown filter kategori */}
        <select
          className="form-select"
          value={selectedCategory}
          onChange={(e) => onCategoryChange(e.target.value)}
          aria-label="Filter Kategori"
        >
          <option value="Semua">Semua Kategori</option>
          {/* LIST RENDERING: map() dengan key unik */}
          {CATEGORIES.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>

        {/* Dropdown filter status */}
        <select
          className="form-select"
          value={selectedStatus}
          onChange={(e) => onStatusChange(e.target.value)}
          aria-label="Filter Status"
        >
          <option value="Semua">Semua Status</option>
          {STATUSES.map((status) => (
            <option key={status} value={status}>
              {status}
            </option>
          ))}
        </select>

        {/* Komponen reusable Button untuk reset filter */}
        <Button variant="secondary" onClick={onResetFilter}>
          Reset
        </Button>
      </div>
    </section>
  );
}

export default ActivityFilter;
