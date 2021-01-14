//aqui se programara la ui
import Product from "./products.js";
import ProductManagement from "./products.js";
class UI {
    constructor() {
        this.form = document.getElementById("form");
        console.log("LOAD");
        var productmanagement = new ProductManagement();

        productmanagement.addProduct("Pollo", "Pollo dofia", 12);
        productmanagement.addProduct("Carne", "Santa cruz", 11);
        productmanagement.addProduct("Leche", "leche Pil", 100);
        productmanagement.addProduct("Tee", "Tee Windsor", 123);
        this.lisproducts = [];
        //this.lisproducts = productmanagement.getList();
        this.loadEvents();
    }
    loadTable() {
        this.html = `
        <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
        `;
        for (var i = 0; i < this.lisproducts.length; i++) {
            
        }
    }
    loadEvents() {
        this.form.addEventListener("submit", (e) => {
            e.preventDefault();
            console.log(e.target);
        })
    }
}
var init = new UI();