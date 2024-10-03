// Imports
import { Router } from "express";
import candidatosRoutes from "./candidatos.routes.js";

// Routes
const routes = Router();

// Routes - GET / - 200 OK
routes.get("/", (rec, res) => {
    return res.status(200).send({ message: "Aqui estão os candidatos!" });
});

// Routes - POST / - 201 Created
routes.post("/", (rec, res) => {
    return res.status(201).send({ message: "Candidato criado com sucesso!" });
});

// Routes - use - Candidatos
routes.use("/candidatos", candidatosRoutes);

export default routes;