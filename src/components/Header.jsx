// ============================================================================
// src/components/Header.jsx
// Komponen bagian atas halaman untuk menampilkan judul aplikasi dan identitas.
// ============================================================================

/**
 * Menerima PROPS:
 * - studentInfo: objek berisi { nama, nim, kampus } dari parent (App)
 */
function Header({ studentInfo }) {
  return (
    <header className="app-header">
      <div className="container header-content">
        <div>
          <h1 className="header-title">Daftar Kegiatan Mahasiswa</h1>
          <p className="header-subtitle">
            Kelola agenda kuliah, organisasi, dan aktivitas harianmu dengan rapi.
          </p>
        </div>

        {/* Menampilkan identitas mahasiswa yang dikirim lewat props */}
        <div className="identity-box">
          <div>
            <strong>Nama:</strong> {studentInfo.nama}
          </div>
          <div>
            <strong>NIM:</strong> {studentInfo.nim} &bull;{' '}
            <strong>Kampus:</strong> {studentInfo.kampus}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
