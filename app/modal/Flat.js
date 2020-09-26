const mongoose = require("mongoose");

// Construção do JSON casa.
const FlatSchema = mongoose.Schema({
  rua: {
    type: String,
    lowercase: true
  },

  bairro: {
    type: String,
    lowercase: true
  },

  uf: {
    type: String,
    uppercase: true,
  },

  area: {
    type: Number, 
  },

  n_suite: {
    type: Number, 
    min: 1, 
    max: 3
  },

  n_sala: {
    type: Number, 
    min: 1, 
    max: 3
  },

  n_quarto: {
    type: Number, 
    min: 1, 
    max: 3
  },

  n_garagem: {
    type: Number, 
    min: 1, 
    max: 3,
  },

  valor_cond: {
    type: Number, 
    min: 1, 
    max: 4
  },

  armario_emb: {
    type: Boolean,
    required: true
  },

  portaria_24h: {
    type: Boolean,
    required: true
  },

  descricao: {
  	type: String
  },

  updateAt: { type: Date, default: Date.now },

});

module.exports = mongoose.model("Flat", FlatSchema);