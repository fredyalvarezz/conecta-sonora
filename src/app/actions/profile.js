/* Acciones del perfil del estudiante: editar información, habilidades y preferencias. */
import { openFormModal } from '../../components/form-modal/form-modal.js';
import { CAREERS, CITIES } from '../../data/constants.js';
import { state } from '../../state/store.js';
import { splitList } from '../../utils/format.js';

const EDIT_SECTIONS = {
  info: [
    'Editar información',
    [
      { k: 'name', l: 'Nombre', r: 1 },
      { k: 'city', l: 'Ciudad', t: 'sel', o: CITIES },
      { k: 'career', l: 'Carrera', t: 'sel', o: CAREERS },
      { k: 'school', l: 'Institución educativa' },
      { k: 'semester', l: 'Semestre o nivel de estudios' },
      { k: 'grad', l: 'Fecha estimada de egreso' },
      { k: 'bio', l: 'Presentación profesional', t: 'area' },
    ],
  ],
  skills: [
    'Editar habilidades',
    [
      { k: 'skills', l: 'Habilidades (separadas por coma)' },
      { k: 'interests', l: 'Áreas de interés (separadas por coma)' },
      { k: 'langs', l: 'Idiomas' },
      { k: 'exp', l: 'Experiencia', t: 'area' },
    ],
  ],
  prefs: [
    'Editar preferencias',
    [
      { k: 'mode', l: 'Modalidad preferida', t: 'sel', o: ['Presencial', 'Híbrida', 'Remota'] },
      {
        k: 'opp',
        l: 'Tipo de oportunidad buscada',
        t: 'sel',
        o: ['Cualquiera', 'Prácticas', 'Beca', 'Primer empleo'],
      },
    ],
  ],
};

export const profileActions = {
  edit: (sec) => {
    const [t, fs] = EDIT_SECTIONS[sec || 'info'],
      m = state.me;
    openFormModal(
      t,
      fs,
      { ...m, skills: (m.skills || []).join(', '), interests: (m.interests || []).join(', ') },
      (d) => {
        if ('skills' in d) d.skills = splitList(d.skills);
        if ('interests' in d) d.interests = splitList(d.interests);
        Object.assign(state.me, d);
      },
    );
  },
};
