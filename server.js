const express = require('express')
const app = express()
const port = process.env.PORT || 3000


// MIDDLEWARES////////////////////////////////
const bodyParser = require ('body-parser')
app.use(bodyParser.json());

app.use ((req,res,next) => {
    console.log(`${req.method}: ${req.url}`);
    next ();
});


// UI ///////////////////////////////////

app.use ('/', express.static("./public"))

// ROUTERS////////////////////////////////
const todoRouter  = require ("./routes/todo");
app.use ("/api", todoRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})