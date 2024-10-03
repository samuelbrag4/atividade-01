// Imports - Express
import { Router } from "express";

const candidatosRoutes = Router();

// Array de candidatos
let candidatos = [
    {
        id: Math.random() * 1000000,
        nome: "João",
        partido: "PSDB",
        idade: 25,
        // Se é concorrente ao segundo mandato
        mandato: true,
        // Resumo da proposta
        propostas: [
            "Criar uma nova moeda",
            "Reforma do estado",
            "Criar uma nova lei",
            "Criar uma nova universidade",
        ],
    }
];

// Rota para buscar todos os candidatos
candidatosRoutes.get("/", (req, res) => {
    return res.status(200).send( candidatos );
});

// Rota que serve para criar um novo candidato 
candidatosRoutes.post("/", (req, res) => {
    const { nome, idade, partido, mandato, propostas } = req.body;
    const novoCandidato = {
        id: candidatos.length + 1,
        nome: nome,
        idade: idade,
        partido: partido,
        mandato: mandato,
        propostas: propostas,
    };

    candidatos.push( novoCandidato );

    return res.status(201).send( candidatos );
});

// Rota para buscar o candidato pelo id
//get = buscar
candidatosRoutes.get("/:id", (req, res) => {
    const { id } = req.params;
    
    //console.log(id);

    const candidato = candidatos.find((candidate) => candidate.id == id);

    if (!candidato) {
        return res.status(404).send({message: "Candidato não encontrado",});
    }

    return res.status(200).send({message: "Candidato encontrado", candidato});
});

candidatosRoutes.put("/:id", (req, res) => {
    const { id } = req.params;

    const candidato = candidatos.find((candidate) => candidate.id == id);

    if (!candidato) {
        return res.status(404).send({message: "Candidato não encontrado",});
    }

    const { nome, cor } = req.body
    candidato.nome = nome;
    candidato.partido = partido;
    candidato.idade = idade;
    candidato.mandato = mandato;
    candidato.propostas = propostas;

    return res.status(200).send({
        message: "Candidato atualizado!", 
        candidato,
    });
})

candidatosRoutes.delete("/:id", (req, res) => {
    const { id } = req.params;

    const candidato = candidatos.find((candidate) => candidate.id == id);

    if (!candidato) {
        return res.status(404).send({message: "Candidato não encontrado",});
    }

    candidatos = candidatos.filter((candidate) => candidate.id != id);

    return res.status(200).send({
        message: "Candidato Deletado!", 
        candidato,
    });
})

export default candidatosRoutes;
