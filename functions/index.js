const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { request, response } = require("express");
const stripe = require("stripe")(
  "sk_test_51HSSscBOBaRIIpkX42Soq6vXWrpfGcZaela1gP522FvDt1UTEiY0hvjrGIOscrWoMJb8mpkZaMK6zkFHgMWsH0440073xs5HVs"
);

// App Config
const app = express();

// Middleware
app.use(cors({ origin: true }));
app.use(express.json());

// -Api routes
app.get("/", (request, response) => response.status(200).send("hello world"));
app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("Payment Request Recieved Boom !!! for this amount >>>>", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "INR",
  });

  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
// Listen Command
exports.api = functions.https.onRequest(app);
