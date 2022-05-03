import express from 'express';
import bodyParser from 'body-parser';
import pool from './dbconfig/dbconnector';
import UserController from './controllers/UserController';
import TestController from './controllers/TestController';

class Server {
    private app;

    constructor() {
        this.app = express();
        this.config();
        this.routerConfig();
        this.dbConnect();
    }

    private config() {
        this.app.use(bodyParser.urlencoded({ extended:true }));
        this.app.use(bodyParser.json({ limit: '1mb' })); // 100kb default
    }

    private dbConnect() {
        pool.connect(function (err, client, done) {
            if (err) {
                console.log(err);
                throw new Error();
            }
            console.log('DB Connected');
          }); 
    }

    private routerConfig() {
        this.app.use('/users',UserController.getUser);
        this.app.use('/usersDeposit',UserController.getUserDeposit);
        this.app.use('/test',TestController.get);
        
    }

    public start = (port: number) => {
        return new Promise((resolve, reject) => {
            this.app.listen(port, () => {
                resolve(port);
            }).on('error', (err: Object) => reject(err));
        });
    }
}

export default Server;