// ============================================================================
// src/components/Button.jsx
// KOMPONEN REUSABLE #1: Button
// Komponen tombol serbaguna yang dapat dipakai ulang di banyak tempat
// (misalnya di ActivityForm, ActivityFilter, dan ActivityCard).
// ============================================================================

/**
 * Menerima PROPS dari parent component:
 * - children: teks atau elemen di dalam tombol
 * - onClick: fungsi event handler saat tombol diklik
 * - type: tipe tombol HTML ('button', 'submit', 'reset')
 * - variant: variasi warna ('primary', 'secondary', 'success', 'danger', 'ghost')
 * - size: ukuran tombol ('md' atau 'sm')
 */
function Button({
  children,
  onClick,
  type = 'button',
  variant = 'primary',
  size = 'md',
}) {
  const sizeClass = size === 'sm' ? 'btn-sm' : '';

  return (
    <button
      type={type}
      onClick={onClick} // EVENT HANDLING: meneruskan onClick ke elemen <button>
      className={`btn btn-${variant} ${sizeClass}`.trim()}
    >
      {children}
    </button>
  );
}

export default Button;
