

// On récupère les données de les données de l'achat : prix total - qui a acheté - et l'ID de retour d'API


let contact = localStorage.getItem("contact");
let contactJson = JSON.parse(contact);

let panier = localStorage.getItem("panier");
let panierJson = JSON.parse(panier);

let facture = localStorage.getItem('facture');



// On met en forme les réponses en fonction des achats et du contacts

document.querySelector(".col-12").innerHTML = `

<div class="jumbotron text-center font-italic">
    <p> Merci pour votre achat  ${contactJson.firstName}  ${contactJson.lastName}  !</p> 
    <p> Un total de  ${facture} €  </p>
    <p> bon de commande n°   </p>
 </div> 
 <div class="card text-center bg-info mx-auto mb-5">

 <p> Votre commande sera envoyée à l'adresse suivante :  ${contactJson.address} à ${contactJson.city} </p>
 <p> Un mail de confirmation va vous être envoyé à :    ${contactJson.email} </p>
 <p> à bientot chez Orinoco ! </p>
 <a href="index.html" id="backIndex" class="btn btn-info" role="button">  Retour à l'accueil </a>
</div>
 `

 // il faut inserer : <p> commande n° ${orderId} </p>
  

// On met un touch de style sur la taille du texte

document.querySelector(".col-12").style.fontSize = "1.5rem";


// On fait un retour à la page d'accueil qui supprimera le storage. (celà simule un achat réel vu qu'il n'y a pas d'envoi (!) 

const supprStorage = document.getElementById("backIndex");
supprStorage.addEventListener("click", function () {
  
      localStorage.removeItem("contact");
      localStorage.removeItem("panier");
      localStorage.removeItem('facture');
    }
)