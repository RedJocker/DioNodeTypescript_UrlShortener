import express, {Request, Response} from 'express'
import { UrlController } from './controller/UrlController';

const api = express()
const port = 3000

api.use(express.json());
const urlController = new UrlController()

api.post("/shorten", urlController.shorten )

api.get('/test', (req: Request, res: Response) => {
    res.json({success: true})
    

})


api.listen(port, () => console.log(`Express is listening on port ${port}`))