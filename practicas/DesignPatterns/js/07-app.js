//Namespace

const restaurantApp = {};

restaurantApp.platillos = [
  {
    platillo: "Pizza",
    precio: 20,
  },
  {
    platillo: "Hamburguesa",
    precio: 20,
  },
  {
    platillo: "Hot Dog",
    precio: 15,
  },
];

restaurantApp.funciones = {
  mostrarMenu: (platillos) => {
    console.log("Bienvenido a nuestro menú");
    platillos.forEach((platillo, index) => {
        console.log(`${index + 1}: ${platillo.platillo} $${platillo.precio}`)
    })
  },

  agregarPlatillos: (platillo, precio)=> {
    restaurantApp.platillos.push({platillo, precio}); 
  }
};

const {platillos} = restaurantApp; 

restaurantApp.funciones.agregarPlatillos('Ensalda', 30); 
restaurantApp.funciones.mostrarMenu(platillos);