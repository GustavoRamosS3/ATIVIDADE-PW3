import express from 'express';
import rotas_usuario from './routes/usuario';
const app = express();
app.use(express.json());
app.get('/', (req, res) => {
  res.send('API Geo-Timeline funcionando');
});
app.use('/', rotas_usuario); // Usando as rotas de usuário

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT} (http://localhost:${PORT})`);
});