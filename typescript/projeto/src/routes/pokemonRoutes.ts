import * as express from 'express';
import { pokemonData } from '../data/pokemonsData'

export const pokemonRoutes = express.Router();

pokemonRoutes.get('/', (req, res) => {
    res.send(pokemonData);
});
