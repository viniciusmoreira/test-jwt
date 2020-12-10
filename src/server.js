const express = require('express');
const routes = require('./routes');

class Server {
  app = null;

  constructor(){
    this.app = express();   
    this.routes(); 
  }

  routes(){
    this.app.use(express.json());
    this.app.use(routes);
  }

  middlewares(){

  }
}

module.exports = new Server().app;