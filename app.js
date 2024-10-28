const express = require('express');
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3001;






app.get('/', (req, res) => {
  res.status(200).json({message: 'Hello from the server', app: 'Natures tour'});
})

app.listen(port, ()=>{
  console.log(`Natures app listening at ${port}`)
});