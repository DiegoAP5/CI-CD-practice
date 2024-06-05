const express = require('express');
const app = express();
const port = 3000;

app.get('/api/v1/welcome', (req, res) => {
    res.send('Prueba 3 .4');
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})