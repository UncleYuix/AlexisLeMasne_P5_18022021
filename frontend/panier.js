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

let panier = localStorage.getItem("panier");
let panierJson = JSON.parse(panier);


let listePanier = "";
let total = 0;
if (panierJson !== null) {
  panierJson.forEach((panierJson) => {
    listePanier += `

<tr>
    <th scope="row" id="caca"></th>
        <td> ${panierJson.name} </td>
        <td>${panierJson.lenses}</td>
        <td>${panierJson.price / 100} € </td>
        <td> <button class="delete_article" id="${panierJson._id}"> X  </button></td>
</tr>
`;

 document.querySelector("tbody").innerHTML = listePanier;
 document.querySelector("#caca").style.padding  = "0";

 

    // on ajoute le total et le suppr :

    total += panierJson.price;
  });

  // supprimer article

  document.querySelector(".total").innerHTML = `
<p class= "border border-danger text-center"> Pour un total de ${total / 100  } € </p> 
 <button class="delete_article text-center" id="deletePanier"> Suppr  </button> 
`;

  document.querySelector(".delete_article")
    .addEventListener("click", (event) => {
      console.log(event.srcElement.id);
    });

  const cancelOrder = document.getElementById("deletePanier");
  cancelOrder.addEventListener("click", () => {
    cancelOrder();
    refreshPage();

    function cancelOrder() {}
    {
      localStorage.removeItem("panier");
    }

    function refreshPage() {}
    {
      window.location.reload();
    }
  });
}


/// bouton Valider

const form = document.querySelector("#formulaireCommande");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  sendForm();
  location.href = "validation.html";
});

// Recuperer le formulaire

function sendForm() {
  let contact = {
    firstName: document.querySelector("#formPrenom").value,
    lastName: document.querySelector("#formNom").value,
    address: document.querySelector("#inputAddress").value,
    city: document.querySelector("#inputCity").value,
    zip: document.querySelector("#inputZip").value,
    email: document.querySelector("#inputEmail").value,
  };

  localStorage.setItem("contact", JSON.stringify(contact))

  
}
