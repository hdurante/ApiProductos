
const Producto = require("./producto");

class zapato extends Producto {
    constructor(nombre, sku, marca, costo, material, numero) {
        super(nombre, sku, marca, costo, 0.30);
        this.material;
        this.numero;
    }
}


module.exports = zapato