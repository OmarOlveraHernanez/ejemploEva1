const { asClass, createContainer, asFunction, asValue } = require("awilix");

const server = require("./server");
const StartUp= require ("./startup");
const config = require("../config");
 //container
 const container = createContainer();

 //routes
 const Routes = require("../api/routes");
 //routes system
const userRoute = require("./routes/system/user.route");
 container.register(
    {
        server: asClass(server).singleton(),
        app: asClass(StartUp).singleton(),
        router:asFunction(Routes).singleton(),
        UserRoutes: asFunction(userRoute).singleton(),
    }
 ).register({
    config: asValue(config),
 })
;
 module.exports = container;