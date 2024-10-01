import { Request, Response } from "express";
import prisma from "../config/database";

export const getUsuarios = async (req: Request, res: Response) =>{
    try {
        const users = await prisma.usuario.findMany();
        res.json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao buscar usuários'});
    }
};

export const buscarPorId = async (req: Request, res: Response) =>{
    try{
        const _id = parseInt(req.params.id);
        const usuario = await prisma.usuario.findUnique(
            {where:{id:_id}}
        );
        res.json(usuario).status(200);
    } catch(error){
        console.error(error);
        res.status(500).json({ error: 'Erro ao buscar usuários'});
    }
}