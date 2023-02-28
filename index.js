const container = require('./api/container')
const aplication = container.resolve("app")
aplication.start()      /*iniciamos una función para que el back se encuentre constantemente escuchando peticiones*/ 
  .then(async ()=>{        /*then es para la acción que va a realizar*/
   console.log("jalo");    
  }).catch(err => {        /*catch es para cuando surge un error y entonces pasa a ejecutar lo que se encuentra en catch */
    console.log(err);
    process.exit();
  });