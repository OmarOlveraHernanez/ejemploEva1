require("dotenv").config()
const DEVELOPMENT = require("./developments");
let currentEnv = DEVELOPMENT;
module.exports = currentEnv;

