"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.filmesRoutes = void 0;
const express = __importStar(require("express"));
const filmes_1 = require("../models/filmes");
const filme = new filmes_1.Filmes(true, // _adult
"/path/to/backdrop.jpg", // _backdrop_path
"123456", // _id
"en", // _original_language
"Original Title", // _original_title
"Overview of the movie", // _overview
7.5, // _popularity
"/path/to/poster.jpg", // _poster_path
new Date("2023-08-03"), // _release_date
"Title of the movie", // _title
false, // _video
8.2, // _vote_average
1200 // _vote_count
);
exports.filmesRoutes = express.Router();
exports.filmesRoutes.get('/', (req, res) => {
    res.send(filme);
});
//# sourceMappingURL=filmeRoutes.js.map