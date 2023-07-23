function Cliente(nombre, saldo) {
  this.nombre = nombre;
  this.saldo = saldo;
}

Cliente.prototype.tipoCliente = function () {
  let tipo;
  if (this.saldo > 10000) {
    tipo = "Gold";
  } else if (this.saldo > 5000) {
    tipo = "Platinum";
  } else {
    tipo = "Normal";
  }

  return tipo;
};

Cliente.prototype.nombreClienteSaldo = function () {
  return `Nombre: ${this.nombre}, Saldo: ${
    this.saldo
  }, Tipo Cliente: ${this.tipoCliente()}`;
};

Cliente.prototype.retirarSaldo = function (retiro) {
  this.saldo -= retiro;
};

//instancia
const pedro = new Cliente("Pedro", 6000); 
pedro.retirarSaldo(1000); 

console.log(pedro.tipoCliente());
console.log(pedro.nombreClienteSaldo());

function Empresa(nombre, saldo, categoria) {
  this.nombre = nombre;
  this.saldo = saldo;
  this.categoria = categoria;
}

const CCJ = new Empresa("Loopcrack", 40000, "Desarrollo web");

console.log(CCJ);
