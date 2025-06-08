
import { Router } from "express";
import { atualizarAgendamentos, buscarAgendamentosPeloId, criarNovosAgendamentos, deletarAgendamentos, listaDeAgendamentos } from "../Controllers/agendamentosControllers";


const router = Router()

router.get("/", listaDeAgendamentos)
router.post("/", criarNovosAgendamentos)
router.get("/:id", buscarAgendamentosPeloId)
router.put("/:id", atualizarAgendamentos)
router.delete("/:id", deletarAgendamentos)


export default router