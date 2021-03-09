const UrlApi = "http://localhost:3000/api/cameras";
async function piocherApi () {
    await fetch(UrlApi)
    .then((response) =>
        response.json()
    .then(data => 
        afficherArticles(data))
    ).catch(err => console.log('Erreur : ça ne fonctionne pas en ce moment ' + err));
}

piocherApi();

const afficherArticles = (data) => {
    console.log(data);
    let allCameras = "";
    for(let camera of data){
        allCameras += 
        `<div class="col-12 col-sm-12 col-lg-4 pt-5">
                <div class="card">
                    <img class="card-img-top" src="${camera.imageUrl}" alt="image article">
                    <div class="card-body text-center">
                        <p class="card-title display-4">${camera.name}</p>
                        <p class="card-text font-italic">${camera.description}</p>
                        <p class="dark">${camera.price / 100} €</p>
                        <a href=commande.html?id=${camera._id} class="btn btn-info col-6" role="button"> Details </a>
                        
                    </div>
                </div>
        </div>`
    }
    document.querySelector('#card_camera').innerHTML = allCameras;
}

document.querySelector('#card_camera').style.display = "flex";
document.querySelector('#card_camera').style.flexWrap = "wrap";




// y'a un problème avec le link, je sais pas faire et je comprend pas