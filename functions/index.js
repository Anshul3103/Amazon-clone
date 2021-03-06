const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")
('sk_test_51JHYY4SC9dnxZaOVVX4Wv2yGVlMWkhE462IikHNJGl9WdzfEMMwHsJ7nJBt7iVNSq69IjO6Tut1rnIEnbH8WrClL00mEcm8IVl')
// To Setup an API


// - App config 
const app = express();

// - MiddleWares
app.use(cors({origin: true}));
app.use(express.json());

// - API routes
app.get('/', (request,response)=> response.status(200).send('hello world'))

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    console.log("Payment Request Recieved BOOM !!! for this amount >>>", total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // Subunits of the currency
        currency: "INR",
    });
    // OK- Created
    response.status(201).send({
      clientSecret: paymentIntent.client_secret,
    });
})

// - Listen command
exports.api = functions.https.onRequest(app)

// Example endpoint
// http://localhost:5001/clone-8c88e/us-central1/api
