const mail = require("@sendgrid/mail");
mail.setApiKey(process.env.SENDGRID_API_KEY);

export default function handler(req, res) {
  const body = JSON.parse(req.body);
  const message = `
  Name: ${body.name}\r\n
  Email: ${body.email}\r\n
  Message: ${body.message} 
  `;
  const data = {
    to: "correodboni@gmail.com",
    from: "correodboni@gmail.com",
    subject: "Nuevo Mensaje del Portfolio!",
    text: message,
    html: message.replace(/\r\n/g, "<br>"),
  };
  (async () => {
    try {
      await mail.send(data);
    } catch (error) {
      console.error(error);

      if (error.response) {
        console.error(error.response.body);
      }
    }
  })();
  res.status(200).json({ status: "ok" });
}
