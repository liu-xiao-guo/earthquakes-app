const express = require('express');
const client = require('./elasticsearch/client');

const app = express();

const port = 5001;

//Define Routes
const data = require('./routes/api/data')
app.use('/api/data', data);

app.get('/', (req, res) => {
    res.send('Hello World!')
  })

app.listen(port, () => console.log(`Server listening at http://localhost:${port}`));