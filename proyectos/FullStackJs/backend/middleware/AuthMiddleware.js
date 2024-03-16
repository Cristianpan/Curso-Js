import jwt from "jsonwebtoken";
import Vet from "../models/Vet.js";

const checkAuth = async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization || !authorization.startsWith("Bearer")) {
    const error = new Error("Token no válido o inexistente");
    res.status(403).json({ msg: error.message });
    return next();
  }

  try {
    token = authorization.split(" ")[1];

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.vet = await Vet.findById(decoded.id).select(
      "-password -token -confirm"
    );
    return next();
  } catch (error) {
    const e = new Error("Token no valido");
    return res.status(403).json({ msg: e.message });
  }
};

export default checkAuth;
