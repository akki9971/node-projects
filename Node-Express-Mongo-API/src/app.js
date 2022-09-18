const express = require('express')
require("./Database/connect")
const router = require('./routes/route')

const app = express();
const port = 3010;


app.use(express.json())
app.get('/', (req, res) => {
    res.send('hello world and our api is running at http://localhost:3010/mens')
})
app.use(router)


app.listen(port, "127.0.0.1", () => {
    console.log(`Example app listening at http://localhost:${port}`)
});

// console.log('hello world');