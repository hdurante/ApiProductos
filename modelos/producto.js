class producto  {
    constructor(nombre,sku,marca,costo,porcentajeUtilidad)
    {
    this.nombre=nombre,
    this.sku=sku,
    this.marca=marca,
    this.costo=Number(costo),
    this.porcentajeUtilidad=Number(porcentajeUtilidad)    
    }

    precioVenta() {
    return this.costo + (this.costo * this.porcentajeUtilidad);    
    }
};

module.exports = producto