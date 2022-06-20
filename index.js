const { log } = require("console");
const express = require("express");
const path = require("path");
const app = express();

const port = 3000;




app.get(`/`, (req, res)=>{
    res.sendFile(path.resolve(__dirname, "./index.html"));
})



app.listen(port, () => console.log(`Servidor ejecutandose en el puerto ${port}`));


