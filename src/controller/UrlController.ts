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

    public async redirect(req: Request, res: Response): Promise<void> {

        const {hash} = req.params
        console.log(hash)

        const mockReturn  = {
            "originUrl": "https://dd.engineering/blog/how-to-set-up-a-back-end-project-using-typescript-and-node-js",
            "hash": "tYGAUjon2",
            "shortUrl": "http://localhost:3000//tYGAUjon2"
        }
        
        res.redirect(mockReturn.originUrl) 
    }


}