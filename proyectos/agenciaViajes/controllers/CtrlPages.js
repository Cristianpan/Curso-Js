import Travels from "../models/Travels.js";

class CtrlPages {
  index(req, res) {
    res.render("inicio", {
      page: "Inicio",
    });
  }

  aboutUs(req, res) {
    res.render("nosotros", {
      page: "Nosotros",
    });
  }
  testimonials(req, res) {
    res.render("testimoniales", {
      page: "Testimoniales",
    });
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
      res.render('viaje', {
        page: 'Información Viaje', 
        travel
      })
    } catch (error) {
      console.log(error);
    }
  }
}

export default new CtrlPages();
