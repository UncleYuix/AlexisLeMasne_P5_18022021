

// ma fonction asynchrone pour piocher le data de l'API avec un retour erreur si ça ne fonctionne pas.




async function setProduct() {
  let myApi = new API()
  await myApi._fetchAllProduct().then(function(camera) {
      console.log(camera)
      afficherArticles(camera)
  })
}
setProduct()



// en prenant dans l'API, je crée une partie nouvelle de mon HTML avec les cameras qui s'affichent dans "card_camera" [qui inclus le Bootstrap]

// myDomafficherarticle() ligne 22

const afficherArticles = (cameras) => {
  console.log(cameras);
  let allCameras = "";
  for (let camera of cameras) {
    allCameras +=
    `<div class="col-12 col-sm-12 col-lg-3 pt-5">
       <div class="card">
          <img class="card-img-top" src="${camera.imageUrl}" alt="image camera">
           <div class="card-body text-center">
              <p class="card-title display-4">${camera.name}</p>
              <p class="card-text font-italic">${camera.description}</p>
              <p class="dark">${camera.price / 100} €</p>
              <a href=commande.html?id=${camera._id} class="btn btn-info col-6" role="button"> Details </a>
           </div>
        </div>
    </div>`;
  }
  document.querySelector("#card_camera").innerHTML = allCameras;
};

// j'ajoute un style au contenu de l'ID avec querySelector

document.querySelector("#card_camera").style.display = "flex";
document.querySelector("#card_camera").style.flexWrap = "wrap";
