let contact = localStorage.getItem("contact");
let contactJson = JSON.parse(contact);
const orderID = JSON.parse(localStorage.getItem("orderId"));

let panier = localStorage.getItem("panier");
let panierJson = JSON.parse(panier);


// On veut faire avoir la reponse de l'API sur la request d'achat AINSI que le prix 


document.querySelector(".col-12").innerHTML = `

<div class="jumbotron text-center font-italic">
    <p> Merci pour votre achat  ${contactJson.firstName}  ${contactJson.lastName}  !</p> 
    <p> Un total de  </p>
    <p> bon de commande n° </p>
 </div> 
 <div class="card text-center bg-info mx-auto mb-5">

 <p> Votre commande sera envoyée à l'adresse suivante :  ${contactJson.address} à ${contactJson.city} </p>
 <p> Un mail de confirmation va vous être envoyé à :    ${contactJson.email} </p>
 <p> à bientot chez Orinoco ! </p>
 <a href="index.html" id="backIndex" class="btn btn-info" role="button">  Retour à l'accueil </a>
</div>
 `

 // il faut inserer : <p> commande n° ${orderId} </p>
  

document.querySelector(".col-12").style.fontSize = "1.5rem";

// On fait un retour à la page d'accueil qui supprimera le storage mais c'est pas la bonne méthode )

const supprStorage = document.getElementById("backIndex");
supprStorage.addEventListener("click", function () {
  
    supprStorage ()
    
    function supprStorage() {}
    {
      localStorage.removeItem("contact");
      localStorage.removeItem("panier");
    }
})