const express = require("express");
const app = express();
const PORT = 3000;
app.use(express.json());

// Initialize an empty storage object
let storedColor = null;

// POST API to store a color string
app.post('/store-color', (request, response) => {
  const { color } = request.body;

  if (color) {
    // Store the color string
    storedColor = color;
    response.json({ message: 'Color stored successfully' });
  } else {
    response.status(400).json({ 'Error': 'Color is required' });
  }
});

// GET API to retrieve the stored color string
app.get('/get-color', (request, response) => {
  if (storedColor) {
    response.json({ color: storedColor });
  } else {
    response.status(404).json({ 'Error': 'No color has been stored' });
  }
});

app.listen(PORT, () => {
  console.log("Server Listening on PORT:", PORT);
});

