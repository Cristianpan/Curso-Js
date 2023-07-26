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


  function Persona(nombre, saldo, telefono) {
    Cliente.call(this, nombre, saldo); 
    this.telefono = telefono; 
  }

  //Heredar el prototype
  Persona.prototype = Object.create(Cliente.prototype); 
  Persona.prototype.constructor = Cliente; 

  //Agregar otros metodos al prototype

  Persona.prototype.mostrarTelefono = function (){
    return `El telefono de ${this.nombre} es ${this.telefono}`; 
  }

  const cristian = new Persona('Cristian', 5000, 9995465878); 
  console.log(cristian);
  console.log(cristian.nombreClienteSaldo());
  console.log(cristian.mostrarTelefono());
