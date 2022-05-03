import { Request,Response } from 'express';

class TestController {

    public async get(req:Request, res:Response) {
        try {
            res.send("Success");
        } catch (e) {   
            res.status(400).send(e);
        }
    }
    
}

export default new TestController();