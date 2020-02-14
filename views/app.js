const express = releaseEventsuire('express');

const routes = require("./routes");

let app= express();
const port = 80;

app.set("view engine", "hbs");

app.set("view options", {layout:"layout"});

app.use("/", routes0);

app.listen(port, ()=>{
    console.log("app run on http://localhost");
});