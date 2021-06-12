const mongoose = require("mongoose");

// Construção do JSON casa.
const FlatSchema = mongoose.Schema({
  cidade: {
    type: String,
    lowercase: true,
    default: "",
    required: true
  },

  rua: {
    type: String,
    lowercase: true,
    default: "",
    required: true,
  },

  bairro: {
    type: String,
    lowercase: true,
    default: "",
    required: true
  },

  uf: {
    type: String,
    uppercase: true,
    default: "",
    required: true
  },

  area: {
    type: Number, 
    default: null,
    required: true
  },

  armario_emb: {
    type: Boolean,
    default: false,
  },

  n_garagem: {
    type: Number, 
    default: null,
  },

  n_quarto: {
    type: Number, 
    default: null,
    required: true
  },

  n_sala: {
    type: Number, 
    default: null,
    required: true
  },

  n_suite: {
    type: Number, 
    default: null,
  },
  
  n_sala_jantar: {
    type: Number, 
    default: null,
  },
  
  portaria_24h: {
    type: Boolean,
    default: false,
  },

  valor_cond: {
    type: Number, 
    default: null,
    required: true
  },
  
  descricao: {
  	type: String,
    default: "",
  },

  updateAt: { 
    type: Date, 
    default: Date.now 
  },

});

module.exports = mongoose.model("Flat", FlatSchema);