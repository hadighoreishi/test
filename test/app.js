const express = require("express");


const server = express();


console.log("develop 2 ---")
server.listen(3000, () => {
    console.log(`server running`)
})