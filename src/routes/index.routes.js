// Imports
import { Router } from "express";
import candidatosRoutes from "./candidatos.routes.js";

// Routes
const routes = Router();

// Routes - GET / - 200 OK
routes.get("/", (rec, res) => {
    return res.status(200).send({ message: "Hello, World" });
});

// Routes - use - Candidatos
routes.use("/candidatos", candidatosRoutes);

export default routes;