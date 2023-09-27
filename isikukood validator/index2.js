const express = require('express');
const app = express();
const port = 3000;
const fs = require('fs');
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
    const { year, sex, month, hospital, kontrollnumber, day } = validateId(estonianId);
    let resultHTML = fs.readFileSync(path.join(__dirname, 'hmtl.html'), 'utf8').toString();
        resultHTML = resultHTML.replace('{{userInput}}', req.body.estonianId);
        resultHTML = resultHTML.replace('{{year}}', year);
        resultHTML = resultHTML.replace('{{month}}', month);
        resultHTML = resultHTML.replace('{{day}}', day);
        resultHTML = resultHTML.replace('{{sex}}', sex)
        resultHTML = resultHTML.replace('{{hospital}}', hospital);
        resultHTML = resultHTML.replace('{{kontrollnumber}}', kontrollnumber);
    res.send(resultHTML);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
