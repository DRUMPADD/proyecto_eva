const express = require("express");
const routes = express.Router();

routes.get("/inicio", (req, res) => {
    res.render("index.html", {
        title: "EVA Project Advisory & Scheduling"
    });
});


routes.get("*", (req, res) => {
    // Here user can also design an
    // error page and render it 
    res.redirect("/inicio");
});


module.exports = routes;