let contact = localStorage.getItem("contact");
let contactJson = JSON.parse(contact);

document.querySelector(".col-12").innerHTML = `

<div class="jumbotron text-center font-italic">
    <p> Merci pour votre achat  ${contactJson.firstName}  !</p>
    <p> Un mail de confirmation va vous être envoyé à l'adresse suivante :   " ${contactJson.email} "</p>
    <p> à bientot chez Orinoco </p>
 </div> `;

document.querySelector(".col-12").style.fontSize = "2rem";
