import TestimonialValidator from "../validators/TestimonialValidator.js";

class CtrlTestimonials {
  saveTestimonial(req, res) {
    const { body: testimonial } = req;
    const errors = TestimonialValidator.validateData(testimonial);

    res.render("testimoniales", {
      page: "Testimoniales",
      errors,
      testimonial
    });
  }
}

export default new CtrlTestimonials();
