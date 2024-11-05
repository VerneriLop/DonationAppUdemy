/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

//import {onRequest} from 'firebase-functions/v2/https';
//import * as logger from 'firebase-functions/logger';

// Start writing functions
// https://firebase.google.com/docs/functions/typescript

// export const helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

import * as functions from 'firebase-functions';
import dotenv from 'dotenv';
dotenv.config();

import bodyParser from 'body-parser';
import express, {Request, Response} from 'express';
import Stripe from 'stripe';

//const stripePublishableKey = process.env.STRIPE_PUBLISHABLE_KEY as string;
const stripeSecretKey = process.env.STRIPE_SECRET_KEY as string;

const app = express();

app.use((req, res, next) => {
  bodyParser.json()(req, res, next);
});

app.post('/create-payment-intent', async (req: Request, res: Response) => {
  const {email, currency, amount} = req.body;
  const stripe = new Stripe(stripeSecretKey, {
    apiVersion: '2024-10-28.acacia' as Stripe.LatestApiVersion,
  });

  const customer = await stripe.customers.create({email});
  console.log(req.body);

  const params = {
    amount: parseInt(amount),
    currency,
    customer: customer.id,
    payment_method_options: {
      card: {
        request_three_d_secure: 'automatic' as 'automatic',
      },
    },
    payment_method_types: ['card'],
  };
  try {
    const paymentIntent = await stripe.paymentIntents.create(params);
    return res.send({clientSecret: paymentIntent.client_secret});
  } catch (error) {
    const err = error as Stripe.StripeRawError;
    return res.send({
      error: err.message,
    });
  }
});

export const stripePayment = functions.https.onRequest(app);
