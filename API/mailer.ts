// create reusable transporter object using the default SMTP transport
const nodemailer = require("nodemailer");

export const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: "manbassman1996@gmail.com", // generated ethereal user
    pass: "iqzldylgekrveicj", // generated ethereal password
  },
});

export async function sendEmailToUser(emailUser, emailFrom, name, message) {
  let info = transporter
    .sendMail({
      from: '"Forgot password 👻" <manbassman1996@gmail.com>', // sender address
      to: emailUser, // list of receivers
      subject: `Correo: ${emailFrom} `, // Subject line
      text: `Su email: ${emailFrom}`, // plain text body
      html: `<strong> Hola soy: ${name} =>>> 
      <br/>
      Su mensaje: ${message} </strong>
    and his cellphone ${""} `, // html body
    })
    .catch((error) => {
      console.log("aca esta", error);
    });
}
// send mail with defined transport object

transporter.verify().then(() => {
  console.log("Ready for send emails");
});
