import '../../components/tabs/tabs.css';
import { courseCard } from '../../components/cards/course-card.js';
import { jobCard } from '../../components/cards/job-card.js';
import { gate } from '../../components/empty-state/empty-state.js';
import { R, co } from '../../services/repo.js';
import { S, UI } from '../../state/store.js';
import { esc } from '../../utils/dom.js';
import { ini } from '../../utils/format.js';
import { recCourses, recJobs } from '../../utils/recommend.js';

const profilePage = () => {
    if (S.role != 'cand') return gate('Mi perfil', 'estudiante'); const m = S.me, T = [['info', 'Mi información'], ['cursos', 'Mis cursos'], ['guard', 'Vacantes guardadas'], ['apps', 'Mis postulaciones']]; let body = '';
    if (UI.pt == 'info') body = `<div class=card><div class=row><div class=avatar style="background:var(--b);width:60px;height:60px">${ini(m.name)}</div><div class=u-grow><h2 style="margin:0">${esc(m.name)}</h2><span class=u-muted>${esc(m.career)} · ${esc(m.city)}</span></div><button class="btn btn--primary" data-a=edit>Editar perfil</button></div><p>${esc(m.bio) || '<span class=u-muted>Añade una presentación profesional.</span>'}</p><div>${m.skills.map(s => `<span class=tag>${esc(s)}</span>`).join('')}</div><div class=u-muted>Intereses: ${m.interests.map(esc).join(', ') || '—'} · Modalidad preferida: ${m.mode}</div></div><h2 style="margin-top:24px">Recomendado para ti</h2><div class="grid grid--cards">${recJobs().map(({ j, r }) => jobCard(j, 'Por qué: ' + r.join('; ') + '.')).join('') || '<p class=u-muted>Agrega habilidades o intereses para ver recomendaciones.</p>'}${recCourses().map(({ c, r }) => courseCard(c, 'Por qué: coincide con ' + r.join(', ') + '.')).join('')}</div>`;
    if (UI.pt == 'cursos') { const l = Object.keys(S.cs).map(R.courses.get).filter(Boolean); body = l.length ? `<div class="grid grid--cards">${l.map(courseCard).join('')}</div>` : '<div class=empty-state>Aún no guardas cursos.</div>' }
    if (UI.pt == 'guard') { const l = S.sj.map(R.jobs.get).filter(Boolean); body = l.length ? `<div class="grid grid--cards">${l.map(jobCard).join('')}</div>` : '<div class=empty-state>Aún no guardas vacantes.</div>' }
    if (UI.pt == 'apps') { const l = S.apps.filter(a => a.cand == (S.session || 'me')); body = l.length ? `<div class=card>${l.map(a => `<div class=row><b class=u-grow>${esc(R.jobs.get(a.job)?.t)}</b><span class=u-muted>${esc(co(R.jobs.get(a.job)?.co).n)}</span><span class="tag tag--success">${a.st}</span></div>`).join('')}<p class=u-muted>Postulaciones ficticias: no se enviaron a ninguna empresa.</p></div>` : '<div class=empty-state>Todavía no te has postulado.</div>' }
    return `<h1 class="page-title page-title--spaced">Mi perfil</h1><div class=tabs>${T.map(([k, l]) => `<button class="btn ${UI.pt == k ? 'btn--active' : ''}" data-a=tab data-id=${k}>${l}</button>`).join('')}</div>${body}`
};

export { profilePage };
