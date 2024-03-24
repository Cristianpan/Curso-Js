export function validateAccount(
  name,
  email,
  password,
  confirmPassword,
) {
  const alert = {
    msg: "",
    error: false,
  };

  alert.msg =
    hasEmptyField([name, email, password, confirmPassword]) ||
    verifyConfirmPassword(password, confirmPassword) ||
    hasMinLenght(password);
  if (alert.msg) {
    alert.error = true; 
  }

  return alert; 
}

export function validatePassword(password, confirmPassword){
  const alert = {
    msg: '', 
    error: false, 
  }
  
  alert.msg = hasEmptyField([password, confirmPassword]) || verifyConfirmPassword(password, confirmPassword) || hasMinLenght(password);
  
  if (alert.msg){
    alert.error = true; 
  }
  
  return alert;
}

export function hasEmptyField(vetData) {
  return vetData.includes("") ? "Todos los campos son obligatorios" : "";
}

function hasMinLenght(password) {
  return password.length < 8
    ? "La contraseña debe de tener el menos 8 caracteres"
    : "";
}

function verifyConfirmPassword(password, confirmPassword) {
  return password !== confirmPassword
    ? "Verifica que las contraseñas sean iguales"
    : "";
}
