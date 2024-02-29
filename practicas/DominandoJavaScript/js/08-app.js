// self

self.onload = () => {
  console.log("Ventana Lista");
};

self.color = 'verde'; 

const producto = {
  nombre: "Monitor 20",
  precio: 30,
  disponible: true,
  mostrarInfo: function () {
    return `El producto es de color ${self.color}`;
  },
};

console.log(producto.mostrarInfo()); 
