
const Producto = require("./producto");

class zapato extends Producto {
    constructor(nombre, sku, marca, costo, material, numero) {
        super(nombre, sku, marca, costo, 30);
        this.material=material;
        this.numero=numero;
    }
}


module.exports = zapato