const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express()
const port = 3000

//MIDDLE WARES
app.use(cors());  //cors policy
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
///

mongoose.connect("mongodb://127.0.0.1:27017/?compressors=disabled&gssapiServiceName=mongodb", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => console.log('  yeah you win !'));


app.get('/', function (request, response) {
    response.send('hello')
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))

