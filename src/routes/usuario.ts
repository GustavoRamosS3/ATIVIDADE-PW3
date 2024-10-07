import { Router } from 'express';
import * as usuario from '../controllers/usuario';

const rota = Router();

rota.get('/usuario', usuario.getUsuarios);
rota.get('/usuario/:id', usuario.buscarPorId);

export default rota;