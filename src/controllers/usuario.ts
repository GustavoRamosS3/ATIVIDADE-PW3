import { Request, Response } from 'express';
import prisma from '../config/database';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const consultar = async (req: Request, res: Response) => {
  try {
    const users = await prisma.usuario.findMany(); // Buscar muitos
    res.json(users).status(200);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar usuários' });
  }
};

export const consultarPorId = async (req: Request, res: Response)=>{
  try{
    const _id = parseInt(req.params.id);
    const usuario = await prisma.usuario.findUnique(
      {where:{id:_id}}
    );
    res.json(usuario).status(200);
  }
  catch(error){
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar usuários' });
  }
}

export const cadastrar = async (req: Request, res: Response)=>{
  try{
    const {nome,email,senha,data_nasc} = req.body;
      if(!nome || !email || !senha || !data_nasc){
        return res.status(400).json({
          result: false,
          data: null,
          info: "Nome, email e senha são obrigatórios"
        });
      }

      const usarioExistente = await prisma.usuario.findUnique({
        where: { email }
      });

      if ( usarioExistente ) {
        return res.status(400).json({
          result: false,
          data: null,
          info: "Email já cadastrado"
        });
      }
      const salt = await bcrypt.genSalt(5);
      const senhaCriptografada = await bcrypt.hash(senha,salt);
  }
  catch(error){
    console.error(error);
    res.status(500).json({ error: 'Erro ao cadastrar usuários' });
  }
}