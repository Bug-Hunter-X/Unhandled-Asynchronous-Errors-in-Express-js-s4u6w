const express = require('express');
const app = express();
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get('/', (req, res) => {
  someAsyncOperation()
    .then(() => {
      res.send('Hello World!');
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Something broke!');
    });
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));

async function someAsyncOperation() {
  // Simulate an asynchronous operation that might fail
  const random = Math.random();
  if (random < 0.5) {
    throw new Error('Something went wrong!');
  }
  return;
}