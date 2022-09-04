const { object } = require("webidl-conversions");
const mongoose = require("../config/database");

const Schema = mongoose.Schema;

const InfoSchema = new Schema({
  Area_Locate: { type: String, required: true }, // Area da Petrobras -> Vai precisar calcular a distancia atual do usuário com este campo.
  Priority_Level: { type: Number }, // Nivel de prioridade.

  Info_Type: { type: Number, required: true }, // Tipo: Sugestao, elogio, critica, reclamação.
  Info_Description: { type: String, required: true }, // A descrição do usuário
});

module.exports = mongoose.model("InfoSchema", InfoSchema);

// Tratar isso (itens vazios) no controler, se vai ter ou não.
