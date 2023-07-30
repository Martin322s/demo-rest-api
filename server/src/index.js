const express = require('express');
const databaseConnection = require('../config/database');
const cors = require('cors');
const router = require('./router');
const app = express();
const port = 3030;

app.use(express.json());
app.use(cors());
app.use(router);

databaseConnection()
    .then(() => {
        console.log('Database connected successfully!');
        app.listen(port, () => console.log(`Server is working at: http://localhost:${port}`));
    })
    .catch((err) => console.log(`Database connection error: ${err}`));