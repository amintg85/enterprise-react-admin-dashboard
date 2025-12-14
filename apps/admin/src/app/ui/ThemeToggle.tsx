
export default function ThemeToggle() {
  return (
    <button
      className="px-3 py-1 border rounded"
      onClick={() => document.documentElement.classList.toggle('dark')}
    >
      Toggle Dark Mode
    </button>
  )
}
