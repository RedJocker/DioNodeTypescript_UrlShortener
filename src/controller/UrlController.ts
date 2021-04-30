import {Request, Response} from 'express'
import shortId from 'shortid'
import { config } from "../config/Constants"

export class UrlController {
    public async shorten(req: Request, res: Response): Promise<void> {


        const { originUrl } = req.body
        const hash = shortId.generate()
        const shortUrl = `${config.API_URL}/${hash}`

        res.json({originUrl, hash, shortUrl})
    }
}