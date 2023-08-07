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
exports.paisRoutes = void 0;
const express = __importStar(require("express"));
const pais_1 = require("../models/pais");
const pais = new pais_1.Pais({
    common: "Brazil",
    official: "Federative Republic of Brazil",
    nativeName: {
        por: {
            official: "República Federativa do Brasil",
            common: "Brasil",
        }
    }
}, // _name
true, // _independent
true, // _unMember
"Brasília", // _capital
"Americas", // _region
"South America", // _subregion
["Portuguese"], // _languages
"-14.235004, -51.92528", // _latlng
["ARG", "BOL", "COL"], // _borders
8515767, // _area
213993437, // _population
["UTC-02:00", "UTC-03:00", "UTC-04:00", "UTC-05:00"], // _timezones
{
    svg: "https://restcountries.com/data/bra.svg",
    png: "https://restcountries.com/data/bra.png"
} // _flags
);
exports.paisRoutes = express.Router();
exports.paisRoutes.get('/', (req, res) => {
    res.send(pais);
});
//# sourceMappingURL=paisRoutes.js.map