const express = require('express')
const fs = require('fs');
const app = express()
const port = 3000

var jwt = require('jsonwebtoken');

//el body se envia desde postman en formato json
var bodyParser = require('body-parser')
app.use(bodyParser.json())
var jsonParser = bodyParser.json()


app.post('/token', jsonParser, function (req, res){
    var body = req.body;
    var privateKey = fs.readFileSync('priv.pem'); //llave privada incluida en el directorio
    var expTime = body.expiration //se saca el dato expiration para luego aplicarlo al token
    delete body.expiration;
    var token = jwt.sign(body, privateKey, { algorithm: 'RS512', expiresIn: expTime});
    res.send('Su token es: ' + token);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
