const app = document.getElementById('app');
let step = 1;
const data = JSON.parse(localStorage.getItem('formData')) || {};

function saveAndNext(e) {
  e.preventDefault();
  const inputs = e.target.querySelectorAll('input, select, textarea');
  inputs.forEach(input => {
    data[input.id] = input.value;
  });
  localStorage.setItem('formData', JSON.stringify(data));
  step++;
  renderStep();
}

function renderStep() {
  let html = '<section><form id="form">';
  let title = '';

  if (step === 1) {
    title = 'Coordonnées';
    html += `
      <label>Prénom</label><input type="text" id="prenom" value="${data.prenom || ''}" required />
      <label>Nom</label><input type="text" id="nom" value="${data.nom || ''}" required />
      <label>Email</label><input type="email" id="email" value="${data.email || ''}" required />
      <label>École et section</label><input type="text" id="ecole" value="${data.ecole || ''}" />
      <label>Délai souhaité</label><input type="date" id="delai" value="${data.delai || ''}" />
    `;
  } else if (step === 2) {
    title = 'Détails de l'impression';
    html += `
      <label>Quantité</label><input type="number" id="quantite" value="${data.quantite || ''}" />
      <label>Format fini</label><input type="text" id="format" value="${data.format || ''}" />
      <label>Orientation</label>
      <select id="orientation">
        <option ${data.orientation === "Portrait" ? "selected" : ""}>Portrait</option>
        <option ${data.orientation === "Paysage" ? "selected" : ""}>Paysage</option>
      </select>
    `;
  } else if (step === 3) {
    title = 'Finition';
    html += `
      <label>Finition</label>
      <select id="finition">
        <option ${data.finition === "Piqûre à cheval" ? "selected" : ""}>Piqûre à cheval</option>
        <option ${data.finition === "Spirale métal" ? "selected" : ""}>Spirale métal</option>
        <option ${data.finition === "Dos carré-collé couverture souple" ? "selected" : ""}>Dos carré-collé couverture souple</option>
        <option ${data.finition === "Reliure cartonné type BD" ? "selected" : ""}>Reliure cartonné type BD</option>
      </select>
      <label>Remarques</label>
      <textarea id="remarques">${data.remarques || ''}</textarea>
    `;
  } else {
    title = 'Récapitulatif';
    html = '<section><h2>Récapitulatif</h2><ul>';
    for (const [key, value] of Object.entries(data)) {
      html += `<li><strong>${key}</strong> : ${value}</li>`;
    }
    html += '</ul>';
    const corps = encodeURIComponent(`Bonjour,%0D%0A%0D%0AVoici ma demande d'impression numérique :%0D%0A%0D%0A` + 
      Object.entries(data).map(([k,v]) => `${k} : ${v}`).join('%0D%0A') + '%0D%0A%0D%0AMerci !');
    html += `<a href="mailto:info@labelpages.com?subject=Demande d'impression TFE&body=${corps}">
      <button type="button">Envoyer la demande</button>
    </a>`;
    html += '</section>';
    app.innerHTML = html;
    return;
  }

  html += `<button type="submit">Continuer</button></form></section>`;
  app.innerHTML = `<nav><h2>${title}</h2></nav>` + html;
  document.getElementById("form").addEventListener("submit", saveAndNext);
}

renderStep();
