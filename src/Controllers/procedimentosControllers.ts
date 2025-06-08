
import { Request, Response } from "express";
import prisma from "../Config/prisma";

export const listaDeProcedimentos = async (req: Request, res:Response)=>{
     try{
        const listaDeTodosProcedimentos = await prisma.procedimentos.findMany()

        res.status(200).json(listaDeTodosProcedimentos)
     }
     catch(error){
        res.status(400).json({mensagem:"Erro ao buscar lista de procedimentos!"})
     }
}

export const criarNovosProcedimentos = async (req: Request , res: Response)=>{
     try{
        const {nome, imagem, preco, descricao} =req.body

        const novosProcedimentos = await prisma.procedimentos.create({
              data:{
                 nome,
                 imagem,
                 preco,
                 descricao
              }
        })

        res.status(201).json(novosProcedimentos)
     }
     catch(error){
         res.status(400).json({mensagem:"Erro ao criar novo procedimento!"})
     }
}

export const buscarProcedimentoPeloId = async (req:Request , res: Response)=>{
       try{
         const {id} =req.params
         const procedimentosId = await prisma.procedimentos.findUnique({
               where:{id: id}
         })

         res.status(200).json(procedimentosId)
       }
       catch(error){
          res.status(404).json({mensagem:"Erro procedimento não encontrado!"})
       }
}


export const atualizarProcedimentos = async (req: Request, res:Response)=>{
      try{
         const {id}=req.params
         const {nome,imagem, preco,descricao} = req.body

         const atualizarProcedimentoExistente = await prisma.procedimentos.update({
                where:{id: id},
                data:{
                    nome,
                    imagem,
                    preco,
                    descricao
                }
         })

         res.status(200).json(atualizarProcedimentoExistente)
      }
      catch(error){
          res.status(400).json({mensagem:"Erro ao atualizar procedimento! tente novamente!"})
      }
}


export const deletarProcedimentos = async (req: Request, res: Response)=>{
      try{
        const {id}=req.params

        const excluirProcedimento = await prisma.procedimentos.delete({
              where:{id: id}
        })

        res.status(204).json(excluirProcedimento)
      }
      catch(error){
        res.status(400).json({mensagem:"Erro ao deletar procedimento!"})
      }
}