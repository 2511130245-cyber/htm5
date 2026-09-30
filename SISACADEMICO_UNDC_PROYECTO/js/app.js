
function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('overlay');
  sidebar.classList.toggle('-translate-x-full');
  overlay.classList.toggle('hidden');
}

function filterMenu() {
  const input = document.getElementById('searchInput');
  if (!input) return;
  const q = input.value.toLowerCase();
  document.querySelectorAll('#menu a').forEach(a => {
    a.style.display = a.innerText.toLowerCase().includes(q) ? 'flex' : 'none';
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('searchInput');
  if (input) input.addEventListener('input', filterMenu);
});
