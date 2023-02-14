import express from 'express'
import {pessoas} from './routes/pessoas'

const app = express();

app.use(express.json());
app.use("/pessoas",pessoas)

const port=1802
const host = "0.0.0.0"

app.listen(port,host,()=>{
    console.log(`Servidor express iniciado em http://${host}:${port}`);
})


