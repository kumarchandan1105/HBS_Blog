import express from "express";

const main = express.Router();

main.get('', (req, res) =>{
    res.render("pages/index");
});

export default main;