/* Ayudas del navegador: qs (buscar elemento), escapeHtml, ventana modal y avisos (toast). */
export const qs = (s) => document.querySelector(s);
export const escapeHtml = (s) =>
  String(s ?? '').replace(
    /[&<>"']/g,
    (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c],
  );
export const closeModal = () => {
  qs('#mod').style.display = 'none';
};
export const openModal = (h) => {
  qs('#mb').innerHTML = h;
  qs('#mod').style.display = 'flex';
};
export const showToast = (m) => {
  const t = qs('#toast');
  t.textContent = m;
  t.style.display = 'block';
  clearTimeout(showToast.t);
  showToast.t = setTimeout(() => {
    t.style.display = 'none';
  }, 2200);
};
qs('#mod').onclick = (e) => {
  if (e.target.id == 'mod') closeModal();
};
