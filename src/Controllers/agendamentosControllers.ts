import { Request, Response } from "express";
import prisma from "../Config/prisma";

export const listaDeAgendamentos = async (req: Request, res: Response) => {
  try {
    const listarTodosAgendamentos = await prisma.agendamentos.findMany();

    res.status(200).json(listarTodosAgendamentos);
  } catch (error) {
    res.status(400).json({ mensagem: "Erro ao buscar lista de agendamentos!" });
  }
};

export const criarNovosAgendamentos = async (req: Request, res: Response) => {
  try {
    const { nome, email, celular, dataHora, procedimentoId } = req.body;

    const novosAgendamentos = await prisma.agendamentos.create({
      data: {
        nome,
        email,
        celular,
        dataHora: new Date(dataHora),
        procedimentoId,
      },
    });

    res.status(201).json(novosAgendamentos);
  } catch (error) {
    res.status(400).json({ mensagem: "Erro ao criar novo agendamento!" });
  }
};

export const buscarAgendamentosPeloId = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const agendamentosId = await prisma.agendamentos.findUnique({
      where: { id: id },
    });

    res.status(200).json(agendamentosId);
  } catch (error) {
    res.status(400).json({ mensagem: "Erro ao buscar agendamento!" });
  }
};

export const atualizarAgendamentos = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { nome, email, celular, dataHora, procedimentoId } = req.body;

    const agendamentosId = await prisma.agendamentos.update({
      where: { id: id },
      data: {
        nome,
        email,
        celular,
        dataHora: new Date(dataHora),
        procedimentoId,
      },
    });

    res.status(200).json(agendamentosId);
  } catch (error) {
    res.status(400).json({ mensagem: "Erro ao atualizar agendamento!" });
  }
};


export const deletarAgendamentos = async (req: Request, res: Response)=>{
     try{
        const {id} =req.params

        const excluirAgendamento = await prisma.agendamentos.delete({
             where:{id: id}
        })

        res.status(204).json(excluirAgendamento)
     }
     catch(error){
         res.status(400).json({mensagem:"Erro ao excluir agendamento!"})
     }
}