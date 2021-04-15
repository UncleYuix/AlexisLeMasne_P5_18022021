// je prépare ma création de panier et de prix

function getIdProductFromUrl() {
  const queryString = window.location.search;
  const UrlParams = new URLSearchParams(queryString);
  return UrlParams.get("id");
}

async function setProduct() {
  const id = getIdProductFromUrl();
  let myApi = new API();
  await myApi._fetchOneProduct(id).then(function (camera) {
    console.log(camera);
    afficherArticle(camera);
  });
}

setProduct();

// je crée la section à afficher en html

function afficherArticle(camera) {
  // thisCamera sera la partie 1 à afficher avec : Nom / img / desc  -
  //  j'ajoute dans un 2e temps l'ensemble des choix dans le tableau et option_choise pour les les options

  customDOM._productsDOM(camera);

  // je crée les options à choisir pour avoir mon déroulant et leur ajoute un style

  customDOM._tableDOM(camera);

  // je fais en sorte que quand je clique le scpipt prend les elements

  const boutonAjouter = document.getElementById("btn-ajouter");
  boutonAjouter.addEventListener("click", function () {
    boutonAjouter.innerHTML = "commande validée !";

    let intelTab = document.getElementById("tab");
    let value = intelTab.options[intelTab.selectedIndex].text;

    // les elements sont en console, je les envoie donc vers le LocalStorage afin de conserver mon panier, un suivi existe par la classe cart (ancien superPanier

    let panier = new cart();
    let article = {
      _id: camera._id,
      imageUrl: camera.imageUrl,
      name: camera.name,
      price: camera.price,
      quantity: 1,
      lenses: value,
    };
    panier._addArticle(article);
  });
}
