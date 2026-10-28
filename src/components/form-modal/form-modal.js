/* Formulario genérico dentro de una ventana modal, con validación de campos obligatorios. */
import './form.css';
import './modal.css';
import { renderApp } from '../../app/render.js';
import { qs, closeModal, escapeHtml, openModal, showToast } from '../../utils/dom.js';

function openFormModal(title, fs, v, save) {
  openModal(
    /* HTML */ `<h2>${title}</h2>
      <form class="form" id="fm">
        ${fs
          .map(
            (f) =>
              /* HTML */ `<label class="form__label"
                >${f.l}${
                  f.t == 'sel'
                    ? /* HTML */ `<select class="form__control" name=${f.k}>
                        ${f.o.map((o) => /* HTML */ `<option ${o == v[f.k] ? 'selected' : ''}>${escapeHtml(o)}</option>`).join('')}
                      </select>`
                    : f.t == 'area'
                      ? /* HTML */ `<textarea class="form__control" name=${f.k} rows="3">
${escapeHtml(v[f.k])}</textarea>`
                      : /* HTML */ `<input
                          class="form__control"
                          name=${f.k}
                          value="${escapeHtml(v[f.k])}"
                        />`
                }</label
              >`,
          )
          .join('')}
        <p class="form__error" id="er"></p>
        <div class="row">
          <button class="btn btn--primary">Guardar</button
          ><button type="button" class="btn" data-a="x">Cancelar</button>
        </div>
      </form>`,
  );
  qs('#fm').onsubmit = (e) => {
    e.preventDefault();
    const d = Object.fromEntries(new FormData(e.target));
    for (const f of fs)
      if (f.r && !String(d[f.k] || '').trim())
        return (qs('#er').textContent = `Completa el campo «${f.l}».`);
    const er = save(d);
    if (er) return (qs('#er').textContent = er);
    closeModal();
    showToast('Cambios guardados en la demostración');
    renderApp();
  };
}

export { openFormModal };
