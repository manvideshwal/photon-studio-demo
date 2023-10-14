// const express = require("express");
// const app = express();
// const PORT = 3000;
// app.use(express.json());

// // Initialize an empty storage object
// let storedColor = null;

// // POST API to store a color string
// app.post('/api/cart/:cartAliasId/sku/:skuAliasId/v1', (request, response) => {
//   const { color } = request.body;

//   if (color) {
//     // Store the color string
//     storedColor = color;
//     response.json({ message: 'Color stored successfully' });
//   } else {
//     response.status(400).json({ 'Error': 'Color is required' });
//   }
// });

// // GET API to retrieve the stored color string
// app.get('/api/cart/:cartAliasId/sku/:skuAliasId/v1', (request, response) => {
//   if (storedColor) {
//     response.json({ color: storedColor });
//   } else {
//     response.status(404).json({ 'Error': 'No color has been stored' });
//   }
// });


// app.listen(PORT, () => {
//   console.log("Server Listening on PORT:", PORT);
// });


const express = require("express");
const app = express();
const PORT = 3000;
app.use(express.json());

// Initialize an empty storage object
let storedColor = null;

// Define a common route for both POST and GET with route parameters
app.route('/api/cart/:cartAliasId/sku/:skuAliasId/v1')
  .post((request, response) => {
    const { color } = request.body;
  
    if (color) {
      // Store the color string
      storedColor = color;
      response.json({ message: 'Color stored successfully' });
    } else {
      response.status(400).json({ 'Error': 'Color is required' });
    }
  })
  .get((request, response) => {
    if (storedColor) {
      response.json({ color: storedColor });
    } else {
      response.status(404).json({ 'Error': 'No color has been stored' });
    }
  });

// Status endpoint
app.get('/api/cart/:cartAliasId/sku/:skuAliasId/v1/status', (request, response) => {
  const status = {'Status': 'Running'};
  response.json(status);
});

app.listen(PORT, () => {
  console.log("Server Listening on PORT:", PORT);
});

