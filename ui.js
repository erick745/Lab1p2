//aqui se programara la ui
/*import Product from "./products.js";
import ProductManagement from "./products.js";*/
class UI {
    constructor() {
        this.form = document.getElementById("form");
        console.log("LOAD");
        this.loadEvents();
    }
    loadEvents() {
        this.form.addEventListener("submit", (e) => {
            e.preventDefault();
            console.log(e.target);
        })
    }
}
var init = new UI();