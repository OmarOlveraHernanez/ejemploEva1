const { asClass, createContainer, asFunction, asValue } = require("awilix");

const server = require("./server");
const StartUp= require ("./startup");
 //container
 const container = createContainer();

 container.register(
    {
        server: asClass(server).singleton(),
        app: asClass(StartUp).singleton(),
    }
 );

 module.exports = container;