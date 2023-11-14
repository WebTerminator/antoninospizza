// send email request
import { FormValues } from "@/shared/";
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
import { NextApiRequest, NextApiResponse } from "next";

type Data = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    const {
      firstName,
      lastName,
      company,
      email,
      phone,
      postcode,
      eventType,
      guests,
      servingTime,
      eventDate,
      additionalInfo,
    } = req.body as FormValues;

    const msg = `First Name: ${firstName}\r\n Last Name: ${lastName}\r\n Company: ${company}\r\n Email: ${email}\r\n Phone: ${phone}\r\n Postcode: ${postcode}\r\n Event Type: ${eventType}\r\n Guests: ${guests}\r\n Serving Time: ${servingTime}\r\n Event Date: ${eventDate}\r\n Additional Info: ${additionalInfo}`;

    const data = {
      to: process.env.EMAIL_ADDRESS,
      from: process.env.EMAIL_ADDRESS,
      subject: `${firstName.toUpperCase()}${" "} ${lastName.toUpperCase()} sent you a message`,
      text: `Email => ${email}`,
      html: msg.replace(/\r\n/g, "<br>"),
    };

    console.log(data);

    try {
      await sgMail.send(data);
      res.status(200).json({ message: "Your message was sent successfully." });
    } catch (err) {
      console.log(JSON.stringify(err));
      res
        .status(500)
        .json({ message: `There was an error sending your message. ${err}` });
    }
  }
}
