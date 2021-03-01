import express, { json } from 'express';
import { router } from './routes';

const port = 3000;
const host = '0.0.0.0';

const app = express();

app.use(json)
app.use(router)


app.listen(port, host, () => console.log("O Servidor foi iniciado com sucesso !"));