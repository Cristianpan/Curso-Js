import Testimonials from "../models/Testimonials.js";
import Travels from "../models/Travels.js";

class CtrlPages {
  async index(req, res) {
    try {
      const limit = { limit: 3 };
      const result = await Promise.all([
        Travels.findAll(limit),
        Testimonials.findAll(limit),
      ]);

      res.render("inicio", {
        page: "Inicio",
        clase: "home",
        travels: result[0],
        testimonials: result[1],
      });
    } catch (error) {
      console.log(error);
    }
  }

  aboutUs(req, res) {
    res.render("nosotros", {
      page: "Nosotros",
    });
  }

  async testimonials(req, res) {
    try {
      const { errors, testimonial } = req.flash();
      const flashData = {};
      const testimonials = await Testimonials.findAll();

      if (errors || testimonial) {
        flashData.errors = errors[0];
        flashData.testimonial = testimonial[0];
      }

      res.render("testimoniales", {
        page: "Testimoniales",
        ...flashData,
        testimonials,
      });
    } catch (error) {
      console.log(error);
    }
  }
  async travels(req, res) {
    const travels = await Travels.findAll();

    res.render("viajes", {
      page: "Próximos Viajes",
      travels,
    });
  }

  async travelDetail(req, res) {
    try {
      const { slug } = req.params;
      const travel = await Travels.findOne({
        where: {
          slug,
        },
      });
      res.render("viaje", {
        page: "Información Viaje",
        travel,
      });
    } catch (error) {
      console.log(error);
    }
  }
}

export default new CtrlPages();
