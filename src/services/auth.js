import { S, DEMO_ME } from '../state/store.js';
import { R } from './repo.js';
/* Cuentas LOCALES: viven en localStorage junto al resto del estado. La contraseña se guarda con hash + sal
   solo para que el flujo funcione; no es seguridad real. Un backend debe reemplazar este módulo. */
const clone = o => JSON.parse(JSON.stringify(o));
const hash = async (p, salt) => {
  const t = salt + p; if (!globalThis.crypto?.subtle) return 'b64:' + btoa(unescape(encodeURIComponent(t)));
  const b = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(t)); return [...new Uint8Array(b)].map(x => x.toString(16).padStart(2, '0')).join('')
};
const mail = e => String(e || '').trim().toLowerCase();
export const homeFor = u => u.role == 'emp' ? '#/panel' : '#/perfil';
export function startSession(u) { S.session = u.id; S.role = u.role; if (u.role == 'cand') S.me = clone(u.me); if (u.role == 'emp') S.myco = u.company.id }
export function startDemo(r) { if (S.session) S.me = clone(DEMO_ME); S.session = null; S.role = r; if (r == 'emp') S.myco = 'c1' }
export function signOut() { S.session = null; S.role = null; S.me = clone(DEMO_ME) }
export async function signIn(email, pass) {
  const u = S.users.find(x => x.email == mail(email));
  if (!u || u.hash !== await hash(pass || '', u.salt)) return { error: 'Correo o contraseña incorrectos.' }; startSession(u); return { user: u }
}
export async function signUp(d) {
  const emp = d.role == 'emp', name = (d.name || '').trim(), email = mail(d.email);
  if (name.length < 3) return { error: 'Escribe tu nombre completo (mínimo 3 caracteres).' };
  if (!/^\S+@\S+\.\S+$/.test(email)) return { error: 'Escribe un correo electrónico válido.' };
  if (S.users.some(u => u.email == email)) return { error: 'Ya existe una cuenta con ese correo. Inicia sesión.' };
  if ((d.pass || '').length < 6) return { error: 'La contraseña debe tener al menos 6 caracteres.' };
  if (d.pass !== d.pass2) return { error: 'Las contraseñas no coinciden.' };
  const u = { id: 'u' + (++S.seq), role: emp ? 'emp' : 'cand', name, email, salt: Math.random().toString(36).slice(2) }; u.hash = await hash(d.pass, u.salt);
  if (emp) {
    const n = (d.company || '').trim(); if (n.length < 3) return { error: 'Escribe el nombre de la empresa.' }; if (!(d.sector || '').trim()) return { error: 'Indica el sector de la empresa.' };
    if (R.companies.list().some(c => c.n.toLowerCase() == n.toLowerCase())) return { error: 'Ya existe una empresa con ese nombre.' };
    u.company = clone(R.companies.create({ n, sec: d.sector.trim(), city: d.city, areas: [], skills: [], prog: '', d: 'Empresa registrada en la demostración.', col: '#0B4DA2' }))
  }
  else u.me = { name, city: d.city, career: d.career, interests: [], skills: [], mode: 'Híbrida', bio: '' };
  S.users.push(u); startSession(u); return { user: u, created: true }
}
