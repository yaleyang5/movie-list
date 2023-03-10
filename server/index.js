const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000 || process.env.PORT;

app.use(express.static('client/dist'));

app.get("/", (req, res, next) => {
  console.log('res: ', res);
  // res.sendFile(path.join(__dirname, './../client/dist/index.html'));

})

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})

// test