const queryString = window.location.search
const UrlParams = new URLSearchParams(queryString)
const id = UrlParams.get("id")
const UrlApi = "http://localhost:3000/api/cameras/" + id ;
async function piocherApi () {
    await fetch(UrlApi)
    .then((response) =>
        response.json()
    .then(data => 
        afficherArticles(data))
    ).catch(err => console.log('Erreur : ça ne fonctionne pas en ce moment ' + err));
}

piocherApi();

const afficherArticles = (camera) => {
    console.log(camera);


    let thisCamera = "";
    
        thisCamera +=
        `
        <div class="row mt-3">
        <div class="col-12 col-lg-5">
        
          <div class="card-body">
              <p class="card-title display-4">${camera.name}</p>
              <img class="card-img-top" src="${camera.imageUrl}" alt="image article">
              <p class="card-text font-italic">${camera.description}</p>
              <p class="dark">${camera.price / 100} €</p>
          </div>

        <div class="col-12 col-lg-6 align-items-center">

            <form>
                <div class="form-row align-items-center">
                  <div class="col-auto my-">
                    <label class="mr-sm-2" for="inlineFormCustomSelect"> Customisez-votre appareil - taille des lentilles </label>
                    <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
                      <option selected>Choix...</option>
                      <option value="1">${camera.lenses[0]}</option>
                      <option value="2"> ${camera.lenses[1]}</option>
                    </select>
                  </div>  
                  


                  <div class="col-auto my-1" >
                      
                    <button type="submit" class="btn btn-primary"> Ajouter au panier </button>
                  </div>
               
            </form>

              <div class="col-auto my-1">     
                <a href="panier.html" class="btn btn-info" role="button">  <i class="fa fa-shopping-cart"></i> Panier </a>
                
                </div>
         </div>        
     </div>
     </div>
        `

        
    document.querySelector('#card_focus').innerHTML = thisCamera;
    }


    const ajoutAuPanier = document.querySelector(".btn btn-primary");

    





// document.querySelector('col-12 col-lg-6').style.display = "flex";

    // document.querySelector('.contenuCommande').style.display = "flex";
    // document.querySelector('.contenuCommande').style.flexWrap = "wrap";


        // <div id = "card_focus">
     
        /* l'idée est d'afficher tout ce bordel sans utiliser [i] et limite tout
        avoir dans une page ensuite on fera la découpe avec l'appel dans le script
        index.js 
        Au final, je vais avoir 5 fois le même paté qui s'enchaine avec le choix
        des lentilles.
        pour les lentilles forEach inserer un select


la taille fixe sur l'img a definir
 
        */



        "required String" 