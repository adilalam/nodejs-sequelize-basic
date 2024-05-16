const express = require('express');
require('./model/index');
const app = express();

app.get("/", (req, res) => {
    res.send("hi sequelize")
})

// User.sync({force: true});
// Contact.sync({force: true});

app.listen(3000, () => {
    console.log("Server started on port 3000");
})