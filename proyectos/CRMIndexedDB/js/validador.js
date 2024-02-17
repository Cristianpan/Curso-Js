export default function validarDatosCliente({nombre, email, telefono, empresa}) {
  return !nombre || !email || !telefono || !empresa; 
}
