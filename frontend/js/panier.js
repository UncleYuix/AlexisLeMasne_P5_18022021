// recuperation storage et ajout tableau
let mySuperPanier = new cart();
panier = mySuperPanier._getPanier();


// dans cette methode je met tout la suite mais je découpe en methode à l'interieur genre les deletes / addevent

customDOM._tableauDOM();

// on VEUT supprimer un ligne uniquement et update le storage

let buttons = document.getElementsByClassName("delete_line");
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", (event) => {
    let idToRemove = event.target.id;
    document.getElementById(idToRemove).closest(".line").remove();

    // Ici on souhaite supprimer un element dans le panier du localStorage

    let panier = new cart();
    console.log("Panier avant suppression :", panier.content);
    panier._removeArticle(idToRemove);
    console.log("Panier après suppression :", panier.content);
  });
}

// On supprime le panier entier

const cancelOrder = document.getElementById("deletePanier");
cancelOrder.addEventListener("click", () => {
  localStorage.removeItem("panier");
  window.location.reload();
});

// Le formulaire est déjà construit, on a juste a "lier" les données avec JS

const form = document.querySelector("#formulaireCommande");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  API._fetchOrder()
});

  // si le panier n'est pas vide, on va du coup charger une "fiche produit" avec une ID et une facture dans la page de validation




