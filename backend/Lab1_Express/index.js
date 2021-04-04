const express = require('express');
const app = express();

// app.get('/', (res, req)=> {
app.get('/', (req, res)=> {
//  res.send(' I am the root route');
  res.send(' I am the root route')
});

// const port = process.end.PORT || 8080;
const port = process.env.PORT || 8080;
//app.listen(PORT, ()=> console.log(`App listening on port ${port}`));
app.listen(port, ()=> console.log(`App listening on port ${port}`));
