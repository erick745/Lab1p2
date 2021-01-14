class Product {
  constructor(id, name, description, quatity) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.quatity = quatity;
  }
}
class ProductManagement {
  constructor() {
    this.listproducts = new Array();
  }
  addProduct(product) {
    this.listproducts.push(product);
  }
  removeProducts(product) {
    for (var i = 0; i < this.listproducts.length; i++) {
      if (this.listproducts[i] == product) {
        this.listproducts.splice(i, 1);
        return true;
      }
    }
    return false;
  }
}
export {Product, ProductManagement};