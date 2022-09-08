import { Request, Response, Router } from 'express';

const router: Router = Router()

router.get('/', function (req: Request, res: Response): void {
    res.render('hello', {
        header: 'Hello Page',
        title: 'Hello!!',
        msg: 'This is Hello Page.'
    })
})

export default router
