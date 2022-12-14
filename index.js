"use strict";

const express = require("express");
require("dotenv").config();
const cors = require("cors");

const PORT = process.env.PORT;
const app = express();
app.use(cors());

app.get('/',(rew,res)=>{
    res.status(200).send('all is great')
})

app.get('/test',(rew,res)=>{
    res.status(200).send('test test')
})

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});
