class API {
    constructor() {
        this.url = "http://localhost:3000/api/cameras/"
      // this.url = "https://ab-p5-api.herokuapp.com/api/cameras/" (backup API)
    }

    async _fetchAllProduct() {
        return await fetch(this.url)
            .then((response) => { return response.json().then(products => {return products})})
            .catch((err) =>
                console.log("Erreur : ça ne fonctionne pas en ce moment " + err)
            );
    }

    async _fetchOneProduct(id) {
        return await fetch(this.url + id)
            .then((response) => { return response.json().then(product => {return product})})
            .catch((err) =>
                console.log("Erreur : ça ne fonctionne pas en ce moment " + err)
            );
    }



     static _fetchOrder() {

      // mise en forme contact / products

      let contact = {
        firstName: document.querySelector("#formPrenom").value,
        lastName: document.querySelector("#formNom").value,
        address: document.querySelector("#inputAddress").value,
        city: document.querySelector("#inputCity").value,
        email: document.querySelector("#inputEmail").value,
      };

      let products = [];
      if (localStorage.getItem("panier") !== null) {
        let productTab = JSON.parse(localStorage.getItem("panier"));
        productTab.forEach((p) => {
          products.push(p._id);
        });

        // utilisation de la
    
        let commandeContact = JSON.stringify({
          contact,
          products,
        });
    
        localStorage.setItem("contact", JSON.stringify(contact));
    
        console.log(commandeContact);
      
        // je fais ma request POST afin de récuperer l'id de validation par l'API dans le format demandé (contacts, products) et la redirection
    

        fetch("http://localhost:3000/api/cameras/order", {
          method: "POST",
          body: commandeContact,
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((response) => {
            return response.json();
          })
          .then((r) => {
            const orderId = r.orderId;
            if (panier == undefined) {
              alert("Acheter un produit au préalable pour faire une commande !");
            } else {
              let facture = localStorage.getItem("facture");
              localStorage.setItem("order", orderId);
              window.location.href = `validation.html?orderId=${orderId}%price=${facture}`;
            }
          })
          .catch((error) => {
            alert(error);
          })
        }
      }
    }