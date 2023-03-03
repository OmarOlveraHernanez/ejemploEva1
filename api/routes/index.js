const{Router} = require("express");
const bodyParser = require ("body-parser");
const cors = require("cors");
const compression = require ("compression");
module.exports = function ({UserRoutes}) { 
    const router = Router();
    const apiRoute = Router()
    //route system
    apiRoute.use(cors()).use(bodyParser.json()).use (compression());
    apiRoute.use('/user', apiRoute);
    //route system
    router.use("/api",apiRoute);
    return router;
}