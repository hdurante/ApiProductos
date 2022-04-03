const Producto = require("./producto");

class television extends Producto {
    constructor(nombre, sku, marca, costo, tipoPantalla, tamanoPantalla) {
        super(nombre, sku, marca, costo, 35);
        this.tipoPantalla = tipoPantalla;
        this.tamanoPantalla = tamanoPantalla;        
    }
}

module.exports = television