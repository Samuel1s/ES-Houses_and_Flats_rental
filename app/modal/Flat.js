const mongoose = require("mongoose");

// Construção do JSON casa.
const FlatSchema = mongoose.Schema({
  cidade: {
    type: String,
    lowercase: true
  },

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

  armario_emb: {
    type: Boolean,
  },

  n_garagem: {
    type: Number, 
    min: 1, 
    max: 3,
  },

  n_quarto: {
    type: Number, 
    min: 1, 
    max: 3
  },

  n_sala: {
    type: Number, 
    min: 1, 
    max: 3
  },

  n_suite: {
    type: Number, 
  },
  
  n_sala_jantar: {
    type: Number, 
    min: 1, 
    max: 4
  },
  
  portaria_24h: {
    type: Boolean,
  },

  valor_cond: {
    type: Number, 
    min: 1, 
    max: 4
  },
  
  descricao: {
  	type: String
  },

  updateAt: { type: Date, default: Date.now },

});

module.exports = mongoose.model("Flat", FlatSchema);