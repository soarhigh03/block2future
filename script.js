// footer year
const y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear();

// smooth scroll for same-page anchors
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href');
    const el = document.querySelector(id);
    if (el){
      e.preventDefault();
      el.scrollIntoView({behavior:'smooth', block:'start'});
    }
  });
});

// --- 헤더 스크롤 어둡게 ---
const header = document.querySelector('.site-header');
const applyScrollHeader = () => {
  if (!header) return;
  header.classList.toggle('scrolled', window.scrollY > 8);
};
applyScrollHeader();
window.addEventListener('scroll', applyScrollHeader, { passive: true });
window.addEventListener('resize', applyScrollHeader);