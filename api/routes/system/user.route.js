const{Router} = require("express");
module.exports = function() {
    const router = Router ();
    router.get("/", function (req, res){res.send ("traer información del usuario");});
    router.post("/create",function(req, res){res.send ("guardar usuario");});
    router.put("/update",function(req, res){res.send ("update usuario");});
    router.delete("/delete",function(req, res){res.send ("delete usuario");});
    return router;
};
