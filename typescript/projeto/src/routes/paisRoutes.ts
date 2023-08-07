import * as express from 'express'
import { paisData } from '../data/paisData'

export const paisRoutes = express.Router();

paisRoutes.get('/', (req, res) => {
    res.send(paisData)
})