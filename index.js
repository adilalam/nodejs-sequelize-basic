const express = require('express');
const bodyParser = require('body-parser')
require('./model/index');
const userControl = require('./controller/userController');

const app = express();
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send("hi sequelize")
})

app.get("/add", userControl.addUser)
app.get("/getUsers", userControl.getUsers)
app.get("/getUser/:id", userControl.getUser)
app.post("/createUser", userControl.createUser)
app.patch("/updateUser/:id", userControl.updateUser)


// User.sync({force: true});
// Contact.sync({force: true});

app.listen(3000, () => {
    console.log("Server started on port 3000");
})