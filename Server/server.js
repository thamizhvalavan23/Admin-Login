import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/database.js';
import authRouter from './apiRouter/Router.js';

// setting app 

const app = express();
const port = process.env.PORT || 3000;

// setting middleware

app.use(express.json())
app.use(cors());
connectDB()

// api end point
app.use('/api/admin' , authRouter)
// setting front respone

app.get('/' ,(req, res) => {
    res.send("Api working successfully.");
    res.end();
})

//server running port 

app.listen(port , ()=> {
    console.log(`server Running on :http://localhost:${port}/`);
    
})
