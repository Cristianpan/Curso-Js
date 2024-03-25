import BasicValidator from "./BasicValidator";

class UserValidator {
  static #PASSWORD_MIN_LENGH = 8;

  static validateAccount({ name, email, password, confirmPassword }) {
    return (
      BasicValidator.hasEmptyField([name, email, password, confirmPassword]) ||
      this.verifyPassword(password, confirmPassword)
    );
  }

  static verifyPassword(password, confirmPassword) {
    if (password !== confirmPassword) {
      return "Verifica que las contraseñas sean iguales";
    }

    if (password.length < this.#PASSWORD_MIN_LENGH) {
      return "La contraseña debe de tener al menos 8 caracteres";
    }

    return "";
  }
}

export default UserValidator; 
