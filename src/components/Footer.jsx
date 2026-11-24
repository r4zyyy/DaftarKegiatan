// ============================================================================
// src/components/Footer.jsx
// Komponen bagian bawah halaman untuk menampilkan identitas mahasiswa dan info tugas.
// ============================================================================

/**
 * Menerima PROPS:
 * - studentInfo: objek berisi { nama, nim, kampus } dari parent (App)
 */
function Footer({ studentInfo }) {
  return (
    <footer className="app-footer">
      <div className="container footer-content">
        <div>
          Tugas Kuliah: <strong>Component-Based UI Development with React</strong>
        </div>
        <div>
          Nama: {studentInfo.nama} | NIM: {studentInfo.nim} | Kampus:{' '}
          {studentInfo.kampus}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
