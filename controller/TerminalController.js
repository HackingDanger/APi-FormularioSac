const TerminalModel = require('../model/TerminalModel');

class TerminalController{
    async readAll(req, res){
        await TerminalModel
        .find()
        .then(response => {return res.status(200).json(response)})
        .catch(error => {return res.status(500).json(error)});

        console.log("TerminalModel - Cadastrado");
    }

    async create(req){
        const Terminal = new TerminalModel(req);
        await Terminal
        .save() 

        console.log("Terminal - Created");
    }
}

module.exports = new TerminalController();