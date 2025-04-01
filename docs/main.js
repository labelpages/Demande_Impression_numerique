document.getElementById('root').innerHTML = `
  <h1>Demande d'impression numérique</h1>
  <form id="formulaire">
    <label for="prenom">Prénom :</label>
    <input type="text" id="prenom" name="prenom" required>

    <label for="nom">Nom :</label>
    <input type="text" id="nom" name="nom" required>

    <label for="ecole">École et section :</label>
    <input type="text" id="ecole" name="ecole">

    <label for="delai">Délai souhaité :</label>
    <input type="date" id="delai" name="delai">

    <label for="quantite">Quantité :</label>
    <input type="number" id="quantite" name="quantite" min="1">

    <label for="format">Format fini :</label>
    <input type="text" id="format" name="format">

    <label for="orientation">Orientation :</label>
    <select id="orientation" name="orientation">
      <option value="portrait">Portrait</option>
      <option value="paysage">Paysage</option>
    </select>

    <button type="submit">Envoyer</button>
  </form>
`;

document.getElementById("formulaire").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Demande simulée envoyée ! Le vrai formulaire suivra ici très bientôt.");
});
