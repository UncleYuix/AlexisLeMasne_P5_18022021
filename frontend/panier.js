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

let article = localStorage.getItem("panier");
let articleDetails = JSON.parse(article);

// alert(articleDetails.name) // renvoie le nom de la camera




let listePanier = "";
listePanier += `






        <tr>
            <th scope="row">1</th>
                <td> ${articleDetails.name} </td>
                <td>${articleDetails.quantity}</td>
                <td>${articleDetails.price / 100} € </td>
                <td> <button class="delete_article >  style="height:30px" <i class="bi bi-trash";></i><button></td>
        </tr>
        <tr>
            <th scope="row">2</th>
                <td> ${articleDetails.name} </td>
                <td>${articleDetails.quantity}</td>
                <td>${articleDetails.price / 100} € </td>
        </tr>
        <tr>
            <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
        </tr>
`;

document.querySelector("tbody").innerHTML = listePanier;



// supprimer article 



/// bouton Valider

const form = document.querySelector("#formulaireCommande");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  sendform();
});

let boutonValidation = document.querySelector("#btnValiderForm");

// Recuperer le formulaire

function sendForm() {
  let contact = {
    firstName: document.querySelector("#formPrenom").value,
    lastName: document.querySelector("#formNom").value,
    address: document.querySelector("#imputAddress").value,
    city: document.querySelector("#inputCity").value,
    zip: document.querySelector("#inputZip").value,
    email: document.querySelector("#imputEmail").value,
  };

  console.log(contact);

  boutonValidation.addEventListener("click", validation);
}

