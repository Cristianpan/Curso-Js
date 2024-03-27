class BasicValidator {
  static hasEmptyField(fields) {
    return fields.includes("") ? "Todos los campos son obligatorios" : "";
  }
}

export default BasicValidator;
