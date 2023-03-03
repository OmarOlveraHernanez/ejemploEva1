const express = require("express");
const router = express.Router(); /*se declara la ruta dque va a  llamar*/


class Server{ /* server es una clase en la que se coloca el metodo para inicializar una instancia de un objeto de esa clase*/
  constructor({config, router}){
    this._config = config;
    this._express = express();
    this._express.use(router);
  } 
start(){
  return new Promise( (resolve, reject) => {
    const http = this._express.listen(this._config.PORT,() => {
      const {port} = http.address();
      console.log('Application running on port ' + port);
      resolve();
    });
  });
}
}

module.exports = Server;