class customDOM {
  constructor() {}

  static _afficherArticles(cameras) {
    let allCameras = "";
    for (let camera of cameras) {
      allCameras += `<div class="col-12 col-sm-12 col-lg-3 pt-5">
             <div class="card">
                <img class="card-img-top" src="${
                  camera.imageUrl
                }" alt="image camera">
                 <div class="card-body text-center">
                    <p class="card-title display-4">${camera.name}</p>
                    <p class="card-text font-italic">${camera.description}</p>
                    <p class="dark">${camera.price / 100} €</p>
                    <a href=command.html?id=${
                      camera._id
                    } class="btn btn-info col-6" role="button"> Details </a>
                 </div>
              </div>
          </div>`;
    }
    document.querySelector("#card_camera").innerHTML = allCameras;
  }


  // appellé page commande.html

  static _productsDOM(camera) {
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
                <a href="cart.html" id=\"panier\" class="btn btn-info" role="button">  <i class="fa fa-shopping-cart"></i> Panier </a>
            </div>
         </div>        
     </div>
     </div>
        `;

    document.querySelector("#card_focus").innerHTML = thisCamera;
  }

  static _tableDOM(camera) {
    const lens = camera.lenses;

    let monTableau = '<select id="tab" class="custom-select mr-sm-2 lg-12">';
    let mesChoix = "";
    // let len = camera.lenses.value; useless line 
    lens.forEach(function (len) {
      mesChoix += "<option>" + len + "</option>";
    });
    monTableau += mesChoix;
    monTableau += "</select>";

    document.querySelector("#option_choise").innerHTML = monTableau;
    document.getElementById("menu_deroulant").style.display = "contents";
  }


// appellé page cart.html

  static _tableauDOM() {
    let listePanier = "";
    let total = 0;
    panier.forEach((oneItem) => {
      listePanier += `
  
  <tr class="line">
      <th scope="row" ></th>
          <td> ${oneItem.name} </td>
          <td>${oneItem.lenses}</td>
          <td>${oneItem.price / 100} € </td>
          <td> <button class="delete_line" id="${
            oneItem._id
          }"> X  </button></td>
  </tr>
  `;
      document.querySelector("tbody").innerHTML = listePanier;

      // on ajoute le total et le suppr :

      total += oneItem.price;
    });

    document.querySelector(".total").innerHTML = `
  <p class= "border border-danger text-center"> Pour un total <span id="total_price"> ${
    total / 100
  } </span> € </p> 
   <button class="delete_article text-center" id="deletePanier"> Supprimer le panier  </button> 
  `;
  }


  // appelé page validation

  
  static _validationDOM() {
    document.querySelector(".col-12").innerHTML = `
  
  <div class="jumbotron text-center font-italic">
      <p> Merci pour votre achat  ${contactJson.firstName}  ${contactJson.lastName}  !</p> 
      <p> Un total de  ${facture} €  </p>
      <p> bon de commande n° ${orderId}   </p>
   </div> 
   <div class="card text-center bg-info mx-auto mb-5">
  
   <p> Votre commande sera envoyée à l'adresse suivante :  ${contactJson.address} à ${contactJson.city} </p>
   <p> Un mail de confirmation va vous être envoyé à :    ${contactJson.email} </p>
   <p> à bientot chez Orinoco ! </p>
   <a href="index.html" id="backIndex" class="btn btn-info" role="button">  Retour à l'accueil </a>
  </div>
   `;
  }
}
