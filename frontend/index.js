// ma fonction asynchrone pour piocher le data de l'API avec un retour erreur si ça ne fonctionne pas.

async function setProduct() {
  let myApi = new API()
  await myApi._fetchAllProduct().then(function(camera) {
      console.log(camera)
customDOM._afficherArticles(camera) 
  })
}
setProduct()

// en prenant dans l'API, j'ai crée une partie nouvelle de mon HTML avec les cameras qui s'affichent dans "card_camera" [qui inclus le Bootstrap]



// j'ajoute un style au contenu de l'ID avec querySelector

document.querySelector("#card_camera").style.display = "flex";
document.querySelector("#card_camera").style.flexWrap = "wrap";
