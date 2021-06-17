const express = require("express");

require("dotenv").config();


const app = express();

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Server started at the port ${port}`);
});

app.get("/home", (req,  res) => {
    return res.send("Hello world")
})