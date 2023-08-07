import { Pokemon } from '../models/pokemon';
import { stats } from '../consts/pokemons/stats';
import { abilities } from '../consts/pokemons/abilities';

export const pokemonData = [
    new Pokemon('1', 'Bobassalto', 2, abilities.initial, stats.basicStats),
    new Pokemon('2', 'Ivysassalto', 3, abilities.adult, stats.basicStats),
    new Pokemon('2', 'venoassalto', 4, abilities.old, stats.longStats),
];