export const $ = s => document.querySelector(s);
export const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
export const closeM = () => { $('#mod').style.display = 'none' };
export const openM = h => { $('#mb').innerHTML = h; $('#mod').style.display = 'flex' };
export const toast = m => { const t = $('#toast'); t.textContent = m; t.style.display = 'block'; clearTimeout(toast.t); toast.t = setTimeout(() => { t.style.display = 'none' }, 2200) };
$('#mod').onclick = e => { if (e.target.id == 'mod') closeM() };
