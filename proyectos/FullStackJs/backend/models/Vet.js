import mongoose from "mongoose";
import generateToken from "../utils/TokenGenerator.js";
import bcrypt from "bcrypt";

const VetSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  tel: {
    type: String,
    default: null,
    trim: true,
  },
  web: {
    type: String,
    default: null,
  },
  token: {
    type: String,
    default: generateToken(),
  },
  confirm: {
    type: Boolean,
    default: false,
  },
});

VetSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
});

VetSchema.methods.checkPassword = async function(passwordForm){

  return await bcrypt.compare(passwordForm, this.password); 
}

const Vet = mongoose.model("Vet", VetSchema);
export default Vet;
