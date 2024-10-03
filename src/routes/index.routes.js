// Imports
import { Router } from "express";

// Routes
const routes = Router();

// Routes - GET / - 200 OK
routes.get("/", (rec, res) => {
    return res.status(200).send({ message: "Hello, World" });
});

export default routes;