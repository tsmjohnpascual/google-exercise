const express = require('express');
const app = express();
const cors = require('cors');

const port = 3000;
app.listen(port, () => {
    console.log(`Server listening on ${port}`)
})