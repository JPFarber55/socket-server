import express from 'express';
import { EXPRESS_SERVER_PORT } from '../global/environment';

export default class Server {

  public app: express.Application;
  public port: number;

  constructor() {
    this.app = express();
    this.port = EXPRESS_SERVER_PORT
  }

  start(callback: VoidFunction) {
    this.app.listen(this.port, callback);
  }

}