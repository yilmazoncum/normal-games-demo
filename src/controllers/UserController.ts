import { Request,Response } from 'express';
import pool from '../dbconfig/dbconnector';

class UserController {

    public async getUser(req:Request, res:Response) {
        try {
            const client = await pool.connect();
            const sql = "SELECT * FROM \"user\"";
            const { rows } = await client.query(sql);
            console.log("query sent :" + sql );
            const todos = rows;

            client.release();

            res.send(todos);
        } catch (e) {   
            res.status(400).send(e);
        }
    }

    public async getUserDeposit(req:Request, res:Response) {
        try {
            const client = await pool.connect();
            const sql = 
            "SELECT * FROM \"user\" INNER JOIN wallet ON \"user\".id = wallet.\"user-id\"";
            const { rows } = await client.query(sql);
            console.log("query sent :" + sql );
            const todos = rows;

            client.release();

            res.send(todos);
        } catch (e) {   
            res.status(400).send(e);
        }       
    }

}

export default new UserController();