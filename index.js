const express = require('express');
const bodyParser = require('body-parser')
const swaggerjSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
require('./model/index');
const userControl = require('./controller/userController');
const { catchError } = require('./middlewares/globalError')

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Nodejs API',
            version: '1.0.0',
            description: 'create swagger api'
        },
        servers: [{ url: 'http://localhost:3000/' }]
    },
    apis: ['./index.js']
}

const swaggerSpec = swaggerjSDoc(options);

const app = express();
app.use(bodyParser.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

/**
 * @swagger
 * /:
 *  get:
 *      summary: Test swagger API
 *      description: Test swagger API
 *      responses:
 *          200:
 *              description: Test get method
 */

app.get("/", (req, res) => {
    res.send("Swagger api testing...")
})

app.get("/add", userControl.addUser)

/**
 * @swagger
 * /getUsers:
 *  get:
 *      summary: Get All users
 *      description: Get All users
 *      responses:
 *          200:
 *              description: This is a list of product in catlog
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              properties:
 *                                  firstName:
 *                                      type: string
 *                                      example: Hi Adil
 *      
 * 
*/

app.get("/getUsers", userControl.getUsers)
app.get("/getUser/:id", userControl.getUser)
app.post("/createUser", userControl.createUser)
app.patch("/updateUser/:id", userControl.updateUser)
app.get("/query", userControl.queryUser)

app.use(catchError);

app.listen(3000, () => {
    console.log("Server started on port 3000");
})