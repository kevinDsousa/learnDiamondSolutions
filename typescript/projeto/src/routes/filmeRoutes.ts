import * as express from 'express'
import { filmesData } from '../data/filmesData'


export const filmesRoutes = express.Router();

filmesRoutes.get('/', (req, res) => {
    res.send(filmesData)
})