// ============================================================================
// src/App.jsx
// Komponen induk (Parent Component) yang menyimpan state utama aplikasi,
// mengelola logika CRUD/filter, dan mengirim data + fungsi lewat PROPS ke child.
// ============================================================================

import { useState } from 'react';
import './App.css';
import { initialActivities, STUDENT_INFO } from './data';
import Header from './components/Header';
import ActivitySummary from './components/ActivitySummary';
import ActivityForm from './components/ActivityForm';
import ActivityFilter from './components/ActivityFilter';
import ActivityList from './components/ActivityList';
import Footer from './components/Footer';

function App() {
  // STATE: daftar kegiatan awal diambil dari src/data.js
  const [activities, setActivities] = useState(initialActivities);

  // STATE: kata kunci pencarian, filter kategori, dan filter status
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [selectedStatus, setSelectedStatus] = useState('Semua');

  // Fungsi untuk menambah kegiatan baru dari ActivityForm
  const handleAddActivity = (newActivityData) => {
    const newActivity = {
      id: Date.now(), // ID unik berbasis timestamp
      ...newActivityData,
      status: 'Belum', // Kegiatan baru otomatis berstatus 'Belum'
    };
    // Tambahkan ke paling atas daftar menggunakan spread operator (immutability)
    setActivities((prev) => [newActivity, ...prev]);
  };

  // Fungsi untuk mengubah status kegiatan: Belum <-> Selesai
  const handleToggleStatus = (id) => {
    setActivities((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, status: item.status === 'Belum' ? 'Selesai' : 'Belum' }
          : item
      )
    );
  };

  // Fungsi untuk menghapus kegiatan berdasarkan id
  const handleDeleteActivity = (id) => {
    setActivities((prev) => prev.filter((item) => item.id !== id));
  };

  // Fungsi untuk mereset pencarian dan seluruh filter
  const handleResetFilter = () => {
    setSearchQuery('');
    setSelectedCategory('Semua');
    setSelectedStatus('Semua');
  };

  // Proses penyaringan data kegiatan berdasarkan kata kunci, kategori, dan status
  const filteredActivities = activities.filter((item) => {
    const keyword = searchQuery.toLowerCase();
    const matchesSearch =
      item.judul.toLowerCase().includes(keyword) ||
      item.lokasi.toLowerCase().includes(keyword);

    const matchesCategory =
      selectedCategory === 'Semua' || item.kategori === selectedCategory;

    const matchesStatus =
      selectedStatus === 'Semua' || item.status === selectedStatus;

    return matchesSearch && matchesCategory && matchesStatus;
  });

  // Hitung ringkasan jumlah kegiatan untuk dikirim ke ActivitySummary
  const totalCount = activities.length;
  const completedCount = activities.filter(
    (item) => item.status === 'Selesai'
  ).length;
  const pendingCount = totalCount - completedCount;

  return (
    <div className="app-wrapper">
      {/* PROPS: mengirim data identitas mahasiswa ke Header */}
      <Header studentInfo={STUDENT_INFO} />

      <main className="main-content">
        <div className="container">
          {/* PROPS: mengirim angka statistik ke ActivitySummary */}
          <ActivitySummary
            total={totalCount}
            pending={pendingCount}
            completed={completedCount}
          />

          <div className="content-grid">
            {/* PROPS: mengirim fungsi callback onAddActivity ke ActivityForm */}
            <ActivityForm onAddActivity={handleAddActivity} />

            <div>
              {/* PROPS: mengirim state & fungsi pengubah filter ke ActivityFilter */}
              <ActivityFilter
                searchQuery={searchQuery}
                onSearchChange={setSearchQuery}
                selectedCategory={selectedCategory}
                onCategoryChange={setSelectedCategory}
                selectedStatus={selectedStatus}
                onStatusChange={setSelectedStatus}
                onResetFilter={handleResetFilter}
              />

              {/* PROPS: mengirim daftar terfilter & fungsi aksi ke ActivityList */}
              <ActivityList
                activities={filteredActivities}
                onToggleStatus={handleToggleStatus}
                onDelete={handleDeleteActivity}
              />
            </div>
          </div>
        </div>
      </main>

      {/* PROPS: mengirim data identitas mahasiswa ke Footer */}
      <Footer studentInfo={STUDENT_INFO} />
    </div>
  );
}

export default App;
