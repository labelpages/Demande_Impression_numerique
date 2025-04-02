document.getElementById('root').innerHTML = `
  <h1>Demande d'impression numérique</h1>
  <form id="formulaire">
    <label>Prénom</label>
    <input type="text" id="prenom" required />
    <label>Nom</label>
    <input type="text" id="nom" required />
    <label>Email</label>
    <input type="email" id="email" required />
    <label>École et section</label>
    <input type="text" id="ecole" />
    <label>Délai souhaité</label>
    <input type="date" id="delai" />
    <label>Quantité</label>
    <input type="number" id="quantite" />
    <label>Format fini</label>
    <input type="text" id="format" />
    <label>Orientation</label>
    <select id="orientation">
      <option>Portrait</option>
      <option>Paysage</option>
    </select>
    <button type="submit">Envoyer la demande</button>
  </form>
`;

document.getElementById("formulaire").addEventListener("submit", function(e) {
  e.preventDefault();
  const prenom = document.getElementById("prenom").value;
  const nom = document.getElementById("nom").value;
  const email = document.getElementById("email").value;
  const ecole = document.getElementById("ecole").value;
  const delai = document.getElementById("delai").value;
  const quantite = document.getElementById("quantite").value;
  const format = document.getElementById("format").value;
  const orientation = document.getElementById("orientation").value;

  const corps = `Bonjour,%0D%0A%0D%0AVoici les informations concernant ma demande :%0D%0A%0D%0ANom : ${nom}%0D%0APrénom : ${prenom}%0D%0AEmail : ${email}%0D%0AÉcole et section : ${ecole}%0D%0ADélai souhaité : ${delai}%0D%0A%0D%0AQuantité : ${quantite}%0D%0AFormat fini : ${format}%0D%0AOrientation : ${orientation}%0D%0A%0D%0AMerci d'avance !`;

  window.location.href = `mailto:info@labelpages.com?subject=Demande d'impression TFE&body=${corps}`;
});
