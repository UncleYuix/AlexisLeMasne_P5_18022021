class API {
    constructor() {
        this.url = "http://localhost:3000/api/cameras/"
      // this.url = "https://ab-p5-api.herokuapp.com/api/cameras/"
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

// Le bordel commence

     async _fetchOrder() {

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
            });
        }
      };