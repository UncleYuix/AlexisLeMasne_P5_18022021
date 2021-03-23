const queryString = window.location.search;
const UrlParams = new URLSearchParams(queryString);
const id = UrlParams.get("id");
const UrlApi = "http://localhost:3000/api/cameras/" + id;
async function piocherApi() {
  await fetch(UrlApi)
    .then((response) => response.json().then((data) => afficherArticles(data)))
    .catch((err) =>
      console.log("Erreur : ça ne fonctionne pas en ce moment " + err)
    );
}

piocherApi();

// je crée la section à afficher en html

const afficherArticles = (camera) => {
  console.log(camera);

  // thisCamera sera la partie 1 à afficher avec l'img  & mySelect sera l'ensemble des choix - allContent les options

  let thisCamera = "";
  thisCamera += `
        <div class="row mt-3">
        <div class="col-12 col-lg-5">
        
          <div class="card-body">
              <p class="card-title display-4">${camera.name}</p>
              <img class="card-img-top" src="${
                camera.imageUrl
              }" alt="image article">
              <p class="card-text font-italic">${camera.description}</p>
              <p class="dark text-center font-weight-bold">${camera.price / 100} €</p>
          </div>
        </div>
        <div class="col-12 col-lg-6 pt-5 pl-5 ml-5  align-items-center" id="menu_deroulant">
          <div class="form-row align-items-center"> 
         
            <div id ="option_choise">    
            </div>        

            <div class="col-auto my-1" >
                    <button id="btn-ajouter"> Ajouter au panier </button>
            </div>         
      </form>
            <div class="col-auto my-1">     
                <a href="panier.html" id=\"panier\" class="btn btn-info" role="button">  <i class="fa fa-shopping-cart"></i> Panier </a>
            </div>
         </div>        
     </div>
     </div>
        `;

  document.querySelector("#card_focus").innerHTML = thisCamera;


            


  // historiquement le bouton est celui là :  <button type="submit" class="btn btn-primary"> Ajouter au panier </button>

  // je crée les options à choisir pour avoir mon déroulant et leur ajoute un style



  const lens = camera.lenses;
  // console.log(lens);

  let monTableau = '<select id="tab" class="custom-select mr-sm-2 lg-12">';
  let mesChoix = "";
  let len = camera.lenses.value;

  lens.forEach(function (len) {
    mesChoix += "<option>" + len + "</option>";
  });
  monTableau += mesChoix;
  monTableau += "</select>";

  document.querySelector("#option_choise").innerHTML = monTableau;


  document.getElementById("menu_deroulant").style.display = "contents";


  

  // je fais en sorte que quand je clique le scpipt prend les elements

  const boutonAjouter = document.getElementById("btn-ajouter");
  boutonAjouter.addEventListener("click", function () {
    boutonAjouter.innerHTML = "commande validée !";

    let intelTab = document.getElementById("tab");
    let value = intelTab.options[intelTab.selectedIndex].text;
    // console.log(value);




    // les elements sont en console, je les envoie donc vers le LocalStorage   (le premier c'est le test avec Cyril, le 2e c'est home-made avec plusieurs valeur)

    // function addCameraCart (camera) {
    //   let cartCamera = []


let panier = localStorage.getItem("panier")
let panierJson = JSON.parse(panier);






    if (panier === null ) {
      panierJson = [];
     }
     
    

      panierJson.push({    

      _id : camera._id,
      imageUrl : camera.imageUrl,
      name : camera.name,
      price : camera.price,
      quantity : 1,
      lenses : value
        
   })
         
   

    
    article = JSON.stringify(panierJson);
    return localStorage.setItem("panier",article);

    console.log(panierJson)
    
})
}
