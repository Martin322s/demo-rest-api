const express = require('express');
const databaseConnection = require('../config/database');
const cors = require('cors');
const app = express();
const port = 3030;

app.use(cors());

databaseConnection()
    .then(() => {
        console.log('Database connected successfully!');
        app.listen(port, () => console.log(`Server is working at: http://localhost:${port}`));
    })
    .catch((err) => console.log(`Database connection error: ${err}`));