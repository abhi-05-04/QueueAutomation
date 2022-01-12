import dotenv from 'dotenv'
dotenv.config({ path: '.env.local' })

import { NextApiRequest, NextApiResponse } from 'next';
import twilio from 'twilio';

export default function sendMessage(req = NextApiRequest, res = NextApiResponse) {
  console.log(process.env.TWILIO_ACCOUNT_SID);
  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const token = process.env.TWILIO_AUTH_TOKEN;
  const client = twilio(accountSid, token);
  const { phone, message } = req.body;
  // console.log(phone, message);
  client.messages
    .create({
      body: message,
      from: '+17752777748',
      to: '+91'+phone,
    })
    .then((message) =>
      res.json({
        success: true,
      })
    )
    .catch((error) => {
      console.log(error);
      res.json({
        success: false,
      });
    });
}


