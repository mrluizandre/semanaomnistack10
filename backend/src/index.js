const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://desenvolvimento:desenvolvimento@cluster0-kl48h.mongodb.net/week1-?retryWrites=true&w=majority',{
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);

// Métodos http: get, post, put, delete

// Query params: req.query (filtros, ordenação, paginação)
// Route params: req.params (identificar recurso alteração our emoção)
// Body: req.body (dados para criação ou alteração de um registro)

// MongoDB (não relacioanal)
