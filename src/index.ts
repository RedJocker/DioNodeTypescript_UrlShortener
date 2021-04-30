import express, {Request, Response} from 'express'
import { UrlController } from './controller/UrlController';
import { MongoConnection } from './database/MongoConnection';

const api = express()
const port = 3000

api.use(express.json());
const database = new MongoConnection()
database.connect()

const urlController = new UrlController()

api.post("/shorten", urlController.shorten )


api.get('/test', (req: Request, res: Response) => {
    res.json({success: true})
    

})
api.get("/:hash", urlController.redirect)


api.listen(port, () => console.log(`Express is listening on port ${port}`))