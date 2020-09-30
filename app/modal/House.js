const mongoose = require("mongoose");

// Construção do JSON casa.
const HouseSchema = mongoose.Schema({
  cidade: {
    type: String,
    default: "",
    lowercase: true,
    required: true
  },

  rua: {
    type: String,
    default: "",
    lowercase: true,
    required: true
  },

  bairro: {
    type: String,
    default: "",
    lowercase: true,
    required: true
  },

  uf: {
    type: String,
    default: "",
    uppercase: true,
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

  descricao: {
  	type: String,
    default: "",
  },

  updateAt: { type: Date, default: Date.now },

});

module.exports = mongoose.model("House", HouseSchema);