# tokenGenJs

correr con el comando
     node app.js
y enviar a localhost:3000/token un POST request con formato json:
    {
      "iss": "app",
      "expiration": 3600,
      "appName": "myApp",
      "streamName": "myStream",
      "ip": "1.1.1.1"
    }
en el response se recibe el token generado
