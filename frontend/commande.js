
// je prépare ma création de panier et de prix

function getIdProductFromUrl(){
    const queryString = window.location.search;
    const UrlParams = new URLSearchParams(queryString);
    return UrlParams.get("id");
}

async function setProduct() {
    const id = getIdProductFromUrl()
    let myApi = new API()
    await myApi._fetchOneProduct(id).then(function(camera) {
        console.log(camera)
        afficherArticles(camera)
    })
}
setProduct()


// je crée la section à afficher en html
function afficherArticles(camera){
    console.log(camera);

    // thisCamera sera la partie 1 à afficher avec : Nom / img / desc  -
    //  j'ajoute dans un 2e temps l'ensemble des choix dans le tableau et option_choise pour les les options

    let thisCamera = "";
    thisCamera += `
        <div class="row mt-3">
        <div class="col-12 col-lg-5">
        
          <div class="card-body">
              <p class="card-title display-4">${camera.name}</p>
              <img class="card-img-top" src="${camera.imageUrl}" alt="image article">
              <p class="card-text font-italic">${camera.description}</p>
              <p class="dark text-center font-weight-bold border border-dark text-danger"> 
                Profitez de ce produit pour : ${camera.price / 100} € au lieu de  <s> ${camera.price / 80} €   </s> </p>
          </div>
        </div>
        <div class="col-12 col-lg-6 pt-5 pl-5 ml-5  align-items-center" id="menu_deroulant">
          <div class="form-row align-items-center ml-3"> 
         
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


    // je crée les options à choisir pour avoir mon déroulant et leur ajoute un style


    const lens = camera.lenses;

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


    // les elements sont en console, je les envoie donc vers le LocalStorage afin de conserver mon panier, un suivi existe par la classe superPanier 


        let panier = new SuperPanier()
        let article = {
            _id: camera._id,
            imageUrl: camera.imageUrl,
            name: camera.name,
            price: camera.price,
            quantity: 1,
            lenses: value
        }
        panier._addArticle(article)


    })
}
