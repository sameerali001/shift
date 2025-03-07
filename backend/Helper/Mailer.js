const bcrypt = require("bcrypt");
const UserModel = require("../models/user");
const nodemailer = require("nodemailer");

const sendMail = async ({ userId, email, emailType }) => {
  try {
    const hashId = await bcrypt.hash(userId.toString(), 10); // Hashing the userId

    if (emailType === "VERIFY") {
      const updated = await UserModel.findOneAndUpdate(
        { _id: userId },
        {
          $set: {
            verifyToken: hashId,
            verifyTokenExpiry: Date.now() + 3600000,
          },
        },
        { new: true }
      );
    }

    // Looking to send emails in production? Check out our Email API/SMTP product!
    var transport = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "c77e0f0c2ae1d7",
        pass: "d38ef4b6780a13",
      },
    });
    const mailSchema = {
      from: "samm.aali12@gmail.com",
      to: email,
      subject: `Hello ${email}`,
      text: "Please verify your email",
      html: `<b>hello ${email}</b>`,
    };

    const info = await transport.sendMail(mailSchema);
    console.log(`Mail sent: ${info.messageId}`);
  } catch (error) {
    console.error("Error in sendMail:", error.message);
  }
};

module.exports = {
  sendMail,
};
