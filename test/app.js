const express = require("express");


const server = express();


console.log("run")
server.listen(3000, () => {
    console.log(`server running`)
})