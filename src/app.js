const express = require('express');




// ------------------FIRING EXPRESS APP
const app = express();








/* -------------------------------------
.                routes
------------------------------------- */
app.get('/', (req, res)=>{
  res.json(`Hello world!`);
})







// ------------------------------LISTEN
const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
  console.log(`Server is running on port ${ PORT }`);
})