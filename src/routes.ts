import {Router} from "express"
 
export const router = Router()

router.get("/", (req: express.Request, res: express.Response) => {
    res.send("Hello World")
})

