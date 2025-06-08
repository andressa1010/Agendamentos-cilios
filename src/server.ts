import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import procedimentosRoutes from "./Routes/procedimentosRoutes"
import agendamentosRoutes from "./Routes/agendamentosRoutes"

dotenv.config()

const app = express()

app.use(express.json())
app.use(express.static("public"))
app.use(cors())


app.use("/procedimentos", procedimentosRoutes)
app.use("/agendamentos", agendamentosRoutes)


app.get("/", (req,res)=>{
     res.send("Api agendamentos de Cilios rodando !")
})

app.listen(3001, ()=>{
    console.log("Servidor em execução na porta http://localhost:3001")
})