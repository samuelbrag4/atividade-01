// Imports - Express e Dotenv
import express  from 'express';
import { config } from 'dotenv';

// Configuração do ambiente de desenvolvimento
config();
import routes from './routes/index.routes.js';

// Porta do servidor - 3000 se não achar
const serverPort = process.env.PORT || 3000;

// Express - Iniciando o servidor
const app = express();
app.use(express.json());
app.use(routes);

// Servidor - Iniciando o servidor
app.listen(serverPort, () => {
    console.log(`👨‍🎤 - Server started on http://localhost:${serverPort} - 👨‍🎤`);
});