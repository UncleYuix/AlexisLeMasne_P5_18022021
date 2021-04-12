class cart {
    constructor() {
        console.log("Création du panierTest")
        this.keyOfLocalStorage = "panier"
        this.content = []
        this.totalPrice = 0
        console.log("On récupère le panier actuel")
        this._setPanier()
        console.log("On calcule le prix total")
        this._calculateTotalPrice()
    }

    _setPanier() {
        console.log("Est-ce que le panier est vide ?")
        if (localStorage.getItem(this.keyOfLocalStorage) !== null) {
            console.log("Non, le panier n'est pas vide")
            this.content = JSON.parse(localStorage.getItem(this.keyOfLocalStorage))
        } else {
            console.log("Oui le panier est vide")
        }
    }

    _calculateTotalPrice() {
        console.log("Prix du panier actuel:", this.totalPrice)
        this.totalPrice = 0
        let that = this
        this.content.forEach(function (oneitem) {
            that.totalPrice += oneitem.price / 100
        })
        localStorage.setItem('facture', this.totalPrice);
        console.log("Prix du panier après calcul:", this.totalPrice)
    }

    _displayTotalPriceOnPage(){
        console.log("")
        document.getElementById("total_price").innerText = this.totalPrice
    }

    _getPanier() {
        console.log("On donne le panier car il a été demandé avec _getPanier()")
        return this.content
    }

    _savePanier() {
        console.log("On sauvegarde le panier")
        localStorage.setItem(this.keyOfLocalStorage, JSON.stringify(this.content))
        this._calculateTotalPrice()
    }

    _addArticle(article) {
        console.log("On ajoute un élément au panier")
        console.log("Element ajouté", article)
        this.content.push(article)
        this._savePanier()
    }

    _removeArticle(idArticle) {
        console.log("On supprime un élément du panier")
        console.log("On supprime l'élément dont l'id est :", idArticle)
        let hasFindProductToRemove = false
        let that = this
        this.content.forEach(function (oneItem, index) {
            if (oneItem._id === idArticle && hasFindProductToRemove === false) {
                that.content.splice(index, 1)
                hasFindProductToRemove = true
            }
        })
        this._savePanier()
        this._displayTotalPriceOnPage()
    }


    // perso

    _postPanier() {
        console.log("Est-ce que le panier est vide ?")
        if (localStorage.getItem(this.keyOfLocalStorage) !== null) {
            console.log("Non, le panier n'est pas vide")
            this.content = JSON.parse(localStorage.getItem(this.keyOfLocalStorage))
        } else {
            console.log("Oui le panier est vide")
        }
    }
}