// Imports - Express
import { Router } from "express";

const candidatosRoutes = Router();

// Array de candidatos
let candidatos = [
    {
        id: Math.floor(Math.random() * 1000000),
        nome: "João",
        partido: "PSDB",
        idade: 25,
        // Se é concorrente ao segundo mandato
        mandato: true,
        // Resumo das propostas
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

    // Validação dos campos nome e partido tornando-os obrigatórios
    if (!nome || !partido) {
        return res.status(400).send({message: "O nome e partido são campos obrigatórios para participar do debate!"});
    };
    
    // Validção de idade - deve ser maior que 18!
    if (idade < 18) {
        return res.status(400).send({message: "A idade deve ser maior que 18 para ser um candidato válido para o debate!"});
    }; 

    // Criação do novo candidato 
    const novoCandidato = {
        id: Math.floor(Math.random() * 1000000),
        nome,
        idade,
        partido,
        mandato,
        propostas
    };

    // Adiciona o novo candidato ao array de candidatos
    candidatos.push( novoCandidato );

    // Retornando o novo candidato com status 201 - Created
        return res.status(201).json({ message: "Candidato criado com sucesso!", novoCandidato, });
});

// Rota para buscar o candidato pelo id
//get = buscar
candidatosRoutes.get("/:id", (req, res) => {
    const { id } = req.params;
    
    //console.log(id);

    const candidato = candidatos.find((candidate) => candidate.id == id);

    if (!candidato) {
        return res.status(404).send({message: "Candidato não encontrado!",});
    }

    return res.status(200).send({message: "Candidato encontrado!", candidato});
});

candidatosRoutes.put("/:id", (req, res) => {
    const { id } = req.params;

    const candidato = candidatos.find((candidate) => candidate.id == id);

    if (!candidato) {
        return res.status(404).send({message: "Candidato não encontrado!",});
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
        return res.status(404).send({message: "Candidato não encontrado!",});
    }

    candidatos = candidatos.filter((candidate) => candidate.id != id);

    return res.status(200).send({
        message: "Candidato Deletado!", 
        candidato,
    });
})

export default candidatosRoutes;
