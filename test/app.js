const express = require("express");


const server = express();


console.log("develop ---")
server.listen(3000, () => {
    console.log(`server running`)
})