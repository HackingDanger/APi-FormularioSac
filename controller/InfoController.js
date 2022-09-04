const InfoModel = require('../model/InfoModel');

class InfoController{

    //método reponsável por receber a requisição de armazenamento no banco de dados e criar esse armazenamento
    async create(req, res){
        const Info = new InfoModel(req.body);
        await Info
        .save() 
        .then(response => {return res.status(200).json(response)})
        .catch(error => {return res.status(500).json(error)});

        console.log("Info - Created");
    }

    //Método para leitura de todas as tarefas
    async readAll(req, res){
        await InfoModel
        .find()
        .then(response => {return res.status(200).json(response)})
        .catch(error => {return res.status(500).json(error)});

        console.log("Info - Retornadas");
    }
}

module.exports = new InfoController();