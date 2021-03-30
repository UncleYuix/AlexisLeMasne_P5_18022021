const UrlApi = "http://localhost:3000/api/cameras";

// Je vais piocher le data de l'API avec un retour erreur si ça ne fonctionne pas avec une fonction asynchrone

async function piocherApi() {
  await fetch(UrlApi)
    .then((response) => response.json().then((data) => afficherArticles(data)))
    .catch((err) =>
      console.log(
        "Erreur : ça ne fonctionne pas en ce moment, nous faisons au mieux " +
          err
      )
    );
}

piocherApi();

const afficherArticles = (data) => {
  console.log(data);
};

// recuperation storage et ajout tableau

let panier = localStorage.getItem("panier");
let panierJson = JSON.parse(panier);

let listePanier = "";
let total = 0;
if (panierJson !== null) {
  panierJson.forEach((panierJson) => {
    listePanier += `

<tr class="line">
    <th scope="row" ></th>
        <td> ${panierJson.name} </td>
        <td>${panierJson.lenses}</td>
        <td>${panierJson.price / 100} € </td>
        <td> <button class="delete_line" id="${
          panierJson._id
        }"> X  </button></td>
</tr>
`;

    document.querySelector("tbody").innerHTML = listePanier;

  // on ajoute le total et le suppr :

    total += panierJson.price;
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
      console.log(event.srcElement.id);
      document.getElementById(event.srcElement.id).closest(".line").remove();
      localStorage.removeItem(panierJson_.id);

      // mettre un code pour enlever le produit dans l'id est récup dans src
      // et mettre à jour le produit avec le nouveau chiffre mis à jour
      // le prix total en récupérant le prix suppr et soustraire dans la formule
    });
  }


// On supprime le panier entier

  const cancelOrder = document.getElementById("deletePanier");
  cancelOrder.addEventListener("click", () => {
    localStorage.removeItem("panier");
    window.location.reload();
  });
}

// bouton Valider et redirection si panier plein

const form = document.querySelector("#formulaireCommande");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  sendForm();
  if (panierJson === null) {
    alert("Veuillez mettre un élement au panier pour valider un achat ");
  } else {
    location.href = "validation.html";
  }
});

// Recuperer le formulaire et l'ID

function sendForm() {
  let contact = {
    firstName: document.querySelector("#formPrenom").value,
    lastName: document.querySelector("#formNom").value,
    address: document.querySelector("#inputAddress").value,
    city: document.querySelector("#inputCity").value,
    zip: document.querySelector("#inputZip").value,
    email: document.querySelector("#inputEmail").value,
  };

  localStorage.setItem("contact", JSON.stringify(contact));
}

//   let products = [];
//   if (localStorage.getItem("panier") !== null) {
//     let productTab = JSON.parse("panier");

//     productTab.forEach ( p => {
//       products.push(p._id);
//   })

//   let contactItems = JSON.stringify(
//     {contact, products
//     })

//     postOrder(contactItems);
//   }
// }

// // ------------------- request POST ----------------------

//   fetch("http://localhost:3000/api/cameras/order", {
//     method: 'POST',
//     headers : {
//       'Content-Type': 'application/json'
//     },
//     mode:'cors',
//     body: contactItems
//   })
//     .then(response => {
//       return response.json()
//     })
