import Vet from "../models/Vet.js";
import EmailRegister from "../utils/EmailRegister.js";
import generateJWT from "../utils/JWTGenerator.js";
import generateToken from "../utils/TokenGenerator.js";
import EmailForgetPassword from "../utils/EmailForgetPassword.js";

class VetController {
  async create(req, res) {
    try {
      const { body: user } = req;
      const { email } = user;

      const existVet = await Vet.findOne({ email });
      if (existVet) {
        const error = new Error("El email ya ha sido registrado");
        return res.status(400).json({ msg: error.message });
      }

      const vet = new Vet(user);
      const vetSaved = await vet.save();

      EmailRegister({ email, name: user.name, token: vetSaved.token });

      res.json(vetSaved);
    } catch (error) {
      console.log(error);
    }
  }
  profile(req, res) {
    const { vet } = req;

    res.json(vet);
  }

  async updateProfile(req, res) {
    try {
      const { body: vetData } = req;
      const { id } = req.params;

      const vet = await Vet.findById(id);

      if (!vet) {
        const error = new Error("El usuario no existe");
        return res.status(400).json({ msg: error.msg });
      }

      if (vet.email !== vetData.email) {
        const existEmail = await Vet.findOne({ email: vetData.email });

        if (existEmail) {
          const error = new Error(
            "El email ya ha sido registrado, por favor ingrese otro"
          );
          return res.status(400).json({ msg: error.msg });
        }
      }

      vet.email = vetData.email;
      vet.name = vetData.name;
      vet.tel = vetData.tel;
      vet.web = vetData.web;

      const vetUpdated = await vet.save();
      return res.json(vetUpdated);
    } catch (error) {
      console.log(error);
    }
  }

  async forgetPassword(req, res) {
    try {
      const { email } = req.body;

      const existVet = await Vet.findOne({ email });

      if (!existVet) {
        const error = new Error("El usuario no existe");
        return res.status(400).json({ msg: error.message });
      }

      existVet.token = generateToken();
      await existVet.save();

      EmailForgetPassword({
        email,
        name: existVet.name,
        token: existVet.token,
      });

      res.json({ msg: "Hemos enviado un email con las instrucciones" });
    } catch (error) {
      console.log(error.message);
    }
  }

  async checkToken(req, res) {
    const { token } = req.params;

    const validateToken = await Vet.findOne({ token });
    if (validateToken) {
      res.json({ msg: "Token válido y el usuario existe" });
    } else {
      const error = new Error("Token no válido");
      return res.status(403).json({ msg: error.message });
    }
  }

  async resetPassword(req, res) {
    try {
      const { token } = req.params;
      const { password } = req.body;

      const vet = await Vet.findOne({ token });
      if (!vet) {
        const error = new Error("Hubo un error");
        return res.status(400).json({ msg: error.message });
      }
      vet.token = null;
      vet.password = password;
      await vet.save();

      res.json({ msg: "La contraseña ha sido actualizada" });
    } catch (error) {
      console.log(error);
    }
  }

  async auth(req, res) {
    const { email, password } = req.body;

    const vet = await Vet.findOne({ email });

    if (!vet) {
      const error = new Error("El usuario no existe");
      return res.status(403).json({ msg: error.message });
    }

    if (!vet.confirm) {
      const error = new Error("Tu cuenta no ha sido confirmado");
      return res.status(403).json({ msg: error.message });
    }

    if (await vet.checkPassword(password)) {
      res.json({
        _id: vet._id,
        name: vet.name,
        email: vet.email,
        token: generateJWT(vet.id),
      });
    } else {
      const error = new Error("La contraseña es incorrecta");
      return res.status(403).json({ msg: error.message });
    }
  }

  async confirm(req, res) {
    try {
      const { token } = req.params;

      const userConfirm = await Vet.findOne({ token });

      if (!userConfirm) {
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
