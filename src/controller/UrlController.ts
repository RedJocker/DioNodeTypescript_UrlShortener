import {Request, Response, response} from 'express'
import shortId from 'shortid'
import { config } from "../config/Constants"
import { UrlModel } from '../model/Url'

export class UrlController {
    public async shorten(req: Request, res: Response): Promise<void> {


        const { originUrl } = req.body

        const url = await UrlModel.findOne({ originUrl })
        if (url) {
            response.json(url)
            return
        }

        const hash = shortId.generate()
        const shortUrl = `${config.API_URL}/${hash}`

        const newUrl = await UrlModel.create({originUrl, hash, shortUrl})
        res.json(newUrl)
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