const { object } = require("webidl-conversions");
const mongoose = require("../config/database");

const Schema = mongoose.Schema;

const TerminalSchema = new Schema({
  Terminal_Name: { type: String, required: true }, // Area da Petrobras -> Vai precisar calcular a distancia atual do usuário com este campo.
  Terminal_CEP: { type: String, required: true }, // Nivel de prioridade.
});

module.exports = mongoose.model("TerminalSchema", TerminalSchema);

// Tratar isso (itens vazios) no controler, se vai ter ou não.
