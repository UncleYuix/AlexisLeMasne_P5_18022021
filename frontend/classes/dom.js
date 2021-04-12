class dom {
  constructor() {
    
    
  }

  // _afficherArticles() {
  //   (cameras) =>
  //      console.log(cameras);
  //   let allCameras = "";
  //   for (let camera of cameras) {
  //     allCameras += `<div class="col-12 col-sm-12 col-lg-3 pt-5">
  //            <div class="card">
  //               <img class="card-img-top" src="${
  //                 camera.imageUrl
  //               }" alt="image camera">
  //                <div class="card-body text-center">
  //                   <p class="card-title display-4">${camera.name}</p>
  //                   <p class="card-text font-italic">${camera.description}</p>
  //                   <p class="dark">${camera.price / 100} €</p>
  //                   <a href=commande.html?id=${
  //                     camera._id
  //                   } class="btn btn-info col-6" role="button"> Details </a>
  //                </div>
  //             </div>
  //         </div>`;
  //   }
  //   document.querySelector("#card_camera").innerHTML = allCameras;
  // }

  async _productsDOM() {
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
              <p class="dark text-center font-weight-bold border border-dark text-danger"> 
                Profitez de ce produit pour : ${
                  camera.price / 100
                } € au lieu de  <s> ${camera.price / 80} €   </s> </p>
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
  }
}

// _calculateTotalPrice() {
//     console.log("Prix du panier actuel:", this.totalPrice)
//     this.totalPrice = 0
//     let that = this
//     this.content.forEach(function (oneitem) {
//         that.totalPrice += oneitem.price / 100
//     })
//     localStorage.setItem('facture', this.totalPrice);
//     console.log("Prix du panier après calcul:", this.totalPrice)
// }
