const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require("body-parser");
const morgan = require("morgan")

///connection database  
require('./mongo')
require('./model/post')

////Middelware
app.use(bodyParser.json())
    .use(morgan())
app.use("/post",require("./routes/post"))
//const Post = mongoose.model("user")

app.listen(7777, function () {
    console.log('running')
});
