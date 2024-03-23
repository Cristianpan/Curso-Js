import nodemailer from "nodemailer";
import { configDotenv } from "dotenv";
configDotenv();
const { EMAIL_HOST, EMAIL_PORT, EMAIL_USER, EMAIL_PASSWORD, FRONTEND_URL } =
  process.env;

const EmailRegister = async (data) => {
  const transport = nodemailer.createTransport({
    host: EMAIL_HOST,
    port: EMAIL_PORT,
    auth: {
      user: EMAIL_USER,
      pass: EMAIL_PASSWORD,
    },
  });

  const { email, name, token } = data;

  const info = await transport.sendMail({
    from: "APV - Administrador de Pacientes de Veterinaria",
    to: email,
    subject: "Comprueba tu cuenta en APV",
    text: "Comprueba tu cuenta en APV",
    html: `
        <p>Hola ${name}, comprueba tu cuenta en APV.</p>
        <p>Tu cuenta ya está lista, solo debes comprobarla en el siguiente enlace:
        <a href="${FRONTEND_URL}/confirmar/${token}">Comprobar Cuenta</a>
        </p>
        <p>Si tú no creaste  esta cuenta, puedes ignorar este mensaje</p>
        `,
  });

  console.log(info.messageId); 
};

export default EmailRegister;
