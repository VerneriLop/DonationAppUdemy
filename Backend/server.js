import express from 'express';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello world!');
});

app.get('/user', (req, res) => {
    res.send('You are getting the user data back!');
});

app.post('/user',(req,res)=>{
    console.log(req.body);
    res.send("We created a user with firstname of "+req.body.firstName);
});

app.delete('/user',(req,res)=>{
    console.log(req.body);
    res.send("We deleted a user with firstname of "+req.body.firstName);
});

app.put('/user',(req,res)=>{
    console.log(req.body);
    res.send("We updated a user with firstname of "+req.body.firstName);
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log("Server is running on port", PORT);
});