const Producto = require("./producto");

class laptop extends Producto {
    constructor(nombre, sku, marca, costo,  procesador, memoriaRam) {
        super(nombre, sku, marca, costo, 0.40);
        this.procesador = procesador;
        this.memoriaRam = memoriaRam;
    }
}

module.exports = laptop