const express = require("express");
const router = express.Router();


class Server{
  constructor(){
    
    this._express = express();
    // Home page route.
   router.get( "/user", function (req, res) { res.send("traer informacion del usuario ");});
    router.post("/user", function (req, res) {
      res.send("guardar  usuario ");
    });
    router.put("/user", function (req, res) {
      res.send("update usuario ");
    });
    router.delete("/user", function (req, res) {
      res.send("delete usuario ");
    });giy
    this._express.use(router);
  }
  start(){
    return new Promise( (resolve, reject) => {
      const http = this._express.listen(3000,() => {
        const {port} = http.address();
        console.log('Application running on port ' + port);
        resolve();
      });
    });
  }
}

module.exports = Server;