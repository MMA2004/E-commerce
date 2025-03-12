require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Ruta para enviar correos
app.post("/send-email", async (req, res) => {
    const { name, email, message } = req.body;

    // Configuración del transportador SMTP (Usa tu correo y credenciales)
    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_USER, // Tu correo
            pass: process.env.EMAIL_PASS, // Tu contraseña o App Password
        },
    });

    const mailOptions = {
        from: `${email}`, // 🟢 Ahora el remitente es el email del formulario
        to: process.env.EMAIL_USER, // 📌 Se envía al email de destino
        subject: "Nuevo mensaje de contacto",
        text: `Nombre: ${name}\nEmail: ${email}\nMensaje: ${message}`
    };

    try {
        await transporter.sendMail(mailOptions);
        res.json({ success: true, message: "Correo enviado con éxito" });
    } catch (error) {
        console.error(error);
        res.json({ success: false, message: "Error al enviar el correo" });
    }
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
