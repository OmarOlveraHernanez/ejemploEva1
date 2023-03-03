const{Router} = require("express");
module.exports = function() {
    const router = Router ();
    router.get( "/categories", function (req, res) { res.send("traer informacion de la categoria");});
    router.post("/categories", function (req, res) {res.send("guardar categoría "); });
    router.put("/categories", function (req, res) {res.send("update categoría ");});
    router.delete("/categories", function (req, res) { res.send("delete categoría ");});
    return router;
};