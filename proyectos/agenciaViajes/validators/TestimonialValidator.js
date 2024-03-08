export default class TestimonialValidator {
  static validateData(testimonial) {
    const errors = {};
    for (const key in testimonial) {
      if (!testimonial[key]) {
        errors[key] = `El campo ${key} es obligatorio`;
      }
    }
    return errors;
  }
}
