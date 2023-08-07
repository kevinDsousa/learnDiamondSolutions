"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const pokemonRoutes_1 = require("./routes/pokemonRoutes");
const filmeRoutes_1 = require("./routes/filmeRoutes");
const paisRoutes_1 = require("./routes/paisRoutes");
exports.app = (0, express_1.default)();
exports.app.use(express_1.default.json());
exports.app.use('/pokemons', pokemonRoutes_1.pokemonRoutes);
exports.app.use('/filmes', filmeRoutes_1.filmesRoutes);
exports.app.use('/pais', paisRoutes_1.paisRoutes);
//# sourceMappingURL=app.js.map