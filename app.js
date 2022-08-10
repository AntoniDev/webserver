require('dotenv').config();
const express = require('express')
const hbs = require('hbs');

const app = express()
// const port = 8080
const port = process.env.PORT;

//handlebars
app.set('view engine', 'hbs');
hbs.registerPartials( __dirname + '/views/partials');

// Servir contenido estático
app.use( express.static('public'));

app.get('/', function (req, res) {
  res.render('home', {
    nombre: 'Fernando Herrera',
    titulo: 'Curso de Node'
  });
})
app.get('/generic', function (req, res) {
  res.render('generic', {
    nombre: 'Fernando Herrera',
    titulo: 'Curso de Node'
  });
})
app.get('/elements', function (req, res) {
  res.render('elements', {
    nombre: 'Fernando Herrera',
    titulo: 'Curso de Node'
  });
})

//para que no se vea el .html al navegar desde menu
// app.get('/generic', function (req, res) {
//   res.sendFile(__dirname + '/public/generic.html');
// })
// app.get('/elements', function (req, res) {
//   res.sendFile(__dirname + '/public/elements.html');
// })


app.get('/hola-mundo', function (req, res) {
  res.send('Hello World en su ruta')
})
app.get('*', function (req, res) {
  res.sendFile(__dirname + '/public/404.html');
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })