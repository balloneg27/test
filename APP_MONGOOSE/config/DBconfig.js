require('dotenv').config();
const mongoose = require('mongoose');

const { MONGO_URI } = process.env;

// Rimuovi la riga seguente se non è necessaria o correggi il valore
// mongoose.set('strict', true);

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

require('../models/nota');
