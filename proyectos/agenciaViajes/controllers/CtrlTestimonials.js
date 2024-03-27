import TestimonialValidator from "../validators/TestimonialValidator.js";
import Testimonials from "../models/Testimonials.js";

class CtrlTestimonials {
  async saveTestimonial(req, res) {
    try {
      const { body: testimonial } = req;
      const errors = TestimonialValidator.validateData(testimonial);


      if (Object.keys(errors).length) {
        req.flash("errors", errors);
        req.flash("testimonial", testimonial);
      } else {
        await Testimonials.create(testimonial);
      }

      res.redirect("/testimoniales");
    } catch (error) {
      console.log(error);
    }
  }
}

export default new CtrlTestimonials();
