/* Funciones pequeñas de formato: precios, fechas relativas, iniciales y listas separadas por coma. */
import { escapeHtml } from './dom.js';

// Valores sin repetir de una propiedad. Ej: uniqueValues(jobs, 'city') -> ['Hermosillo', 'Nogales', ...]
const uniqueValues = (list, key) => [...new Set(list.map((item) => item[key]))];

// Convierte una lista de textos en <option> para un <select>.
const selectOptions = (items, placeholder) =>
  /* HTML */ `<option value="">${placeholder}</option>` +
  items.map((item) => /* HTML */ `<option>${escapeHtml(item)}</option>`).join('');

// Precio ficticio: 0 se muestra como "Gratis".
const formatPrice = (price) => (price ? `$${price} MXN (demo)` : 'Gratis');

// Fecha relativa simulada: timeAgo(5) -> "Hace 5 días".
const timeAgo = (days) => (days < 2 ? 'Hace 1 día' : `Hace ${days} días`);

// Iniciales para el avatar. Ignora palabras cortas como "del" o "y" y usa mayúsculas.
const SMALL_WORDS = ['de', 'del', 'la', 'las', 'el', 'los', 'y', 'en'];
const initials = (name) =>
  name
    .split(' ')
    .filter((word) => word && !SMALL_WORDS.includes(word.toLowerCase()))
    .slice(0, 2)
    .map((word) => word[0].toUpperCase())
    .join('');

// "Excel, Calidad" -> ['Excel', 'Calidad']
const splitList = (text) =>
  String(text)
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean);

export { uniqueValues, selectOptions, formatPrice, timeAgo, initials, splitList };
