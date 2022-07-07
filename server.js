const express = require('express');
const cors = require('cors');
const env = require('dotenv');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const mobileRoutes = require('./routers/mobile');

env.config();

const app = express();

let url = `mongodb://localhost:27017/Mobile_Inventory`;

app.use(cors());
app.use(bodyParser.json({extended : true}));
app.use(bodyParser.urlencoded({extended : true}));

app.use('/',mobileRoutes);


mongoose.connect(url,{useNewUrlParser : true, useUnifiedTopology  :true})
.then(() => {
    console.log('Database connected ...')
})
.catch((error) => {
    console.log(error.message)
})


app.listen(process.env.PORT,() => {
    console.log(`Server started running on the port ${process.env.PORT}`);
})
