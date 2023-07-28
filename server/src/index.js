const express = require('exxpress');
const cors = require('cors');
const app = express();
const port = 3030;

app.use(cors());

app.listen(port, () => console.log(`Server is working at: http://localhost:${port}`));