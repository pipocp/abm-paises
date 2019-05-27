function Pais(codigo, descripcion) {
    this.codigo = codigo;
    this.descripcion = descripcion;
}

Pais.prototype.getJson = function() {  
    return {codigo: this.codigo, descripcion: this.descripcion };
}

module.exports = Pais;