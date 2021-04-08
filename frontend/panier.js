// recuperation storage et ajout tableau
let mySuperPanier = new SuperPanier();
panier = mySuperPanier._getPanier();


let myDOM = new DomManagement();
myDOM.displayItemFromCart(panier)
 // dans cette methode je met tout la suite mais je découpe en methode à l'interieur genre les deletes / addevent

monJolipanier() 

let listePanier = "";
let total = 0;
panier.forEach((oneItem) => {
  listePanier += `

<tr class="line">
    <th scope="row" ></th>
        <td> ${oneItem.name} </td>
        <td>${oneItem.lenses}</td>
        <td>${oneItem.price / 100} € </td>
        <td> <button class="delete_line" id="${oneItem._id}"> X  </button></td>
</tr>
`;

  document.querySelector("tbody").innerHTML = listePanier;

  // on ajoute le total et le suppr :

  total += oneItem.price;
});

document.querySelector(".total").innerHTML = `
<p class= "border border-danger text-center"> Pour un total <span id="total_price"> ${
  total / 100
} </span> € </p> 
 <button class="delete_article text-center" id="deletePanier"> Supprimer le panier  </button> 
`;

// on VEUT supprimer un ligne uniquement et update le storage

let buttons = document.getElementsByClassName("delete_line");
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", (event) => {
    let idToRemove = event.target.id;
    document.getElementById(idToRemove).closest(".line").remove();

    // Ici on souhaite supprimer "idToRemove" dans le panier du localStorage

    let panier = new SuperPanier();
    // let panier = JSON.parse(localStorage.getItem("panier"))
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
  let contact = {
    firstName: document.querySelector("#formPrenom").value,
    lastName: document.querySelector("#formNom").value,
    address: document.querySelector("#inputAddress").value,
    city: document.querySelector("#inputCity").value,
    email: document.querySelector("#inputEmail").value,
  };

  // si le panier n'est pas vide, on va du coup charger une "fiche produit" avec une ID et une facture dans la page de validation

  let products = [];
  if (localStorage.getItem("panier") !== null) {
    let productTab = JSON.parse(localStorage.getItem("panier"));
    productTab.forEach((p) => {
      products.push(p._id);
    });

    let commandeContact = JSON.stringify({
      contact,
      products,
    });

    localStorage.setItem("contact", JSON.stringify(contact));

    console.log(commandeContact);

    // je fais ma request POST afin de récuperer l'id de validation par l'API dans le format demandé (contacts, products)

  //  fetch("http://localhost:3000/api/cameras/order", {


  // mettre le POST dans la fonction API comme ses potes GET 
  
    fetch("https://ab-p5-api.herokuapp.com/api/cameras/order", {  
      method: "POST",
      body: commandeContact,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((r) => {
        const orderId = r.orderId;
        if (orderId == undefined) {
          alert("veuillez renseigner ce champ");
        } else {
          let facture = localStorage.getItem("facture");
          localStorage.setItem("order", orderId);
          window.location.href = `validation.html?orderId=${orderId}%price=${facture}`;
        }
      })
      .catch((error) => {
        alert(error);
      });
  }
});
