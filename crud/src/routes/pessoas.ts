import express from 'express'

export const pessoas = express.Router();

type Pessoas = {

    "id"?: number,
    "name": string,
    "surname": string,
    "age": number,
}

const pessoasExemplo: Pessoas[] =
    [
        {
            "id": 1,
            "name": "Felipe",
            "surname": "d'Almeida",
            "age": 28,
        },
        {
            "id": 2,
            "name": "Mel",
            "surname": "d'Almeida",
            "age": 8,
        },
        {
            "id": 3,
            "name": "Rafaella",
            "surname": "Kessler",
            "age": 30,
        },
        {
            "id": 4,
            "name": "Thomas",
            "surname": "Shelby",
            "age": 40,
        },

    ]
//Métodos HTTP

//GET
// Lista todas as pessoas cadastradas
pessoas.get("/", (req, res) => {
    res.status(200)
    res.json(pessoasExemplo)
})

//GET
// Carrega os dados da pessoa com o ID especificado na URL

pessoas.get("/:id", (req, res) => {
    res.status(200)
    res.json(pessoasExemplo[Number(req.params.id) - 1])
})

// Cadastra uma nova pessoa
// POST
pessoas.post("/", (req, res) => {
    res.status(201)
    res.json({
        success: true,
        data: {
            id: pessoasExemplo.length+1,
            ...req.body
        }
    })

})

// Sobrescreve os dados de uma pessoa
// PUT

pessoas.put("/:id", (req, res) => {
    res.status(200)
    res.json({
        success: true,
        data: {
            id: Number(req.params.id),
            ...req.body,
        },
    });

})

// Realiza uma atualização parcial nos dados de uma pessoa 
// PATCH
pessoas.patch("/:id", (req, res) => {
    res.status(200)
    res.json({
        success: true,
        data: {
            id: Number(req.params.id),
            ...pessoasExemplo[Number(req.params.id) - 1],
            ...req.body,
        }
    })
})

// Deleta uma pessoa
// DELETE
pessoas.delete("/:id", (req, res) => {
    res.json({
        success: true,
        data: {
            id: Number(req.params.id),
            ...pessoasExemplo[Number(req.params.id) - 1],
        }
    })
})