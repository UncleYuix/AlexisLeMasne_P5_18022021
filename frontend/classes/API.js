class API {
    constructor() {
        this.url = "http://localhost:3000/api/cameras/"
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

}