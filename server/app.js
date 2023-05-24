require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cron = require("node-cron");
const { sendNewsletter } = require("./controller/newsletter");
const newsLetter = require('./router/newsletter');

mongoose.connect(process.env.MONGODB).then(()=>{
  console.log("DataBase Connected");
}).catch((err)=>{
  console.log(err);
})

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api',newsLetter.router)

cron.schedule("0 0 * * 0", sendNewsletter);


app.listen(process.env.PORT||5000,()=>{
  console.log("Server Started")
})