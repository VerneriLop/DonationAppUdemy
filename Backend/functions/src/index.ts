/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

import {onRequest} from "firebase-functions/v2/https";
//import * as logger from "firebase-functions/logger";

//import * as functions from 'firebase-functions';
import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());

app.get('/', (req: Request, res: Response) => {
    res.send('Hello world!');
});

app.get('/user', (req: Request, res: Response) => {
    res.send('You are getting the user data back!');
});

app.post('/user', (req: Request, res: Response) => {
    const { firstName } = req.body;
    console.log(req.body);
    res.send(`We created a user with firstname of ${firstName}`);
});

app.delete('/user', (req: Request, res: Response) => {
    const { firstName } = req.body;
    console.log(req.body);
    res.send(`We deleted a user with firstname of ${firstName}`);
});

app.put('/user', (req: Request, res: Response) => {
    const { firstName } = req.body;
    console.log(req.body);
    res.send(`We updated a user with firstname of ${firstName}`);
});

// Start writing functions
// https://firebase.google.com/docs/functions/typescript

// export const helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

export const helloWorld = onRequest(app);