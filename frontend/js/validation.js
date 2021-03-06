// On récupère les données de les données de l'achat : prix total - qui a acheté - et l'ID de retour d'API

let contact = localStorage.getItem("contact");
let contactJson = JSON.parse(contact);

let panier = localStorage.getItem("panier");
let panierJson = JSON.parse(panier);

let facture = localStorage.getItem("facture");

let orderId = localStorage.getItem("order");

// On met en forme les réponses en fonction des achats et du contacts

customDOM._validationDOM();

// On met un touch de style sur la taille du texte

document.querySelector(".col-12").style.fontSize = "1.5rem";

// On fait un retour à la page d'accueil qui supprimera le storage. (celà simule un achat réel vu qu'il n'y a pas d'envoi (!)

const supprStorage = document.getElementById("backIndex");
supprStorage.addEventListener("click", function () {
  localStorage.removeItem("contact");
  localStorage.removeItem("panier");
  localStorage.removeItem("facture");
  localStorage.removeItem("order");
});
