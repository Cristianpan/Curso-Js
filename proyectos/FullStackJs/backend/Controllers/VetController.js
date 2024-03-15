import Vet from "../models/Vet.js";

class VetController {
  async create(req, res) {
    try {
      const { body: user } = req;
      const {email} = user; 

      const existVet = await Vet.findOne({ email });
      if (existVet) {
        const error = new Error("El email ya ha sido registrado");
        return res.status(400).json({ msg: error.message });
      }
      const vet = new Vet(user);
      const vetSaved = await vet.save();

      res.json(vetSaved);
    } catch (error) {
      console.log(error);
    }
  }
  profile(req, res) {
    res.send("Perfil...");
  }

  async confirm(req, res) {
    try {
      const { token } = req.params;

      const userConfirm = await Vet.findOne({ token });

      if (userConfirm) {
        const error = new Error("Token no valido");
        return res.status(404).json({ msg: error.message });
      }

      userConfirm.token = null;
      userConfirm.confirm = true;
      await userConfirm.save();
      res.json({ msg: "Usuario confirmado correctamente" });
    } catch (error) {
      console.log(error.message);
    }
  }
}

export default new VetController();
