import express from 'express';
import { pokemonRoutes } from './routes/pokemonRoutes';
import { filmesRoutes } from './routes/filmeRoutes'
import { paisRoutes } from './routes/paisRoutes'

export const app = express();

app.use(express.json());

app.use('/pokemons', pokemonRoutes);
app.use('/filmes', filmesRoutes)
app.use('/pais', paisRoutes)