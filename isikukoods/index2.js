const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

const { validateId } = require('./script');

app.use(express.static(path.join(__dirname)));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'isikukood.html'));
});

app.post('/validate', (req, res) => {
    const estonianId = req.body.estonianId;
    const result = validateId(estonianId);
    res.send(result);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
