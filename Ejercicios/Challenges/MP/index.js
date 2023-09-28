const express = require("express");
const server = express();
const cors = require("cors");
const mercadopago = require("mercadopago");
require("dotenv").config();
const PORT = 3001;
const ACCESS_TOKEN = process.env.ACCESS_TOKEN;

const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};

server.use(cors(corsOptions));
server.use(express.json());

server.post("/createOrder", (req, res) => {
  mercadopago.configure({
    access_token: ACCESS_TOKEN,
  });
  const { id, title, description, image, stock, condition, price } = req.body;
  let preference = {
    items: [
      {
        id,
        title,
        quantity: 1,
        unit_price: price,
        currency_id: "ARS",
        picture_url: image,
        description,
      },
    ],
    back_urls: {
      success: "https://9824-181-170-139-159.ngrok-free.app/payment/success",
      failure: "https://9824-181-170-139-159.ngrok-free.app/failure",
      pending: "https://9824-181-170-139-159.ngrok-free.app/pending",
    },
    notification_url: "https://9824-181-170-139-159.ngrok-free.app/webhook",
  };
  mercadopago.preferences
    .create(preference)
    .then((response) => res.json(response))
    .catch((error) => {
      message: error.message;
    });
});

server.get("/payment/success", (req, res) => {
  console.log(req.query);
  res.send("Pago realizado");
});

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
