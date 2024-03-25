import nodemailer from "nodemailer";
import { configDotenv } from "dotenv";
configDotenv();
const { EMAIL_HOST, EMAIL_PORT, EMAIL_USER, EMAIL_PASSWORD, FRONTEND_URL } =
  process.env;

const EmailForgetPassword = async (data) => {
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
    subject: "Reestablece tu Contraseña",
    text: "Reestablece tu Contraseña",
    html: `
        <p>Hola ${name}, has solicitado restablecer tu contraseña.</p>
        <p>Sigue el siguiente enlace para restablecer tu contraseña:
        <a href="${FRONTEND_URL}/olvide-password/${token}">Restablecer Contraseña</a>
        </p>
        <p>Si tú no creaste  esta cuenta, puedes ignorar este mensaje</p>
        `,
  });

  console.log(info.messageId); 
};

export default EmailForgetPassword;
