import { Router } from "express";
import {
  atualizarProcedimentos,
  buscarProcedimentoPeloId,
  criarNovosProcedimentos,
  deletarProcedimentos,
  listaDeProcedimentos,
} from "../Controllers/procedimentosControllers";

const router = Router();

router.get("/", listaDeProcedimentos);
router.post("/", criarNovosProcedimentos);
router.get("/:id", buscarProcedimentoPeloId);
router.put("/:id", atualizarProcedimentos);
router.delete("/:id", deletarProcedimentos);

export default router;
