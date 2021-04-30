import express, {Request, Response} from 'express'

const api = express()
const port = 3000

api.use(express.json());


api.get('/test', (req: Request, res: Response) => {
    res.json({success: true})
    

})


api.listen(port, () => console.log(`Express is listening on port ${port}`))