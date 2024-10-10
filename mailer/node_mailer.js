// for sending mails

var mailer = require("nodemailer");

var transport = mailer.createTransport({
  service: "gmail",
  auth: {
    user: "shahamahammed66@gmail.com",
    pass: "crnz ysjn ehrz dmye", //app generated password
  },
});

var mailOptions = {
  from: "shahamahammed66@gmail.com",
  to: "shahamshaaz7@gmail.com",
  subject: "sending an email",
  text: "text mail",
};


transport.sendMail(mailOptions, function (err, info) {
  if (err) {
    console.log("error occured"+err.message);
  } else {
    console.log("email sended" + info.response);
  }
});

