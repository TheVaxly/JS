const express = require('express');
const app = express();
const port = 3000;


app.use(express.static('/home/marten/js-basics/isikukood website'));
app.get('/', (req, res) => {
    res.sendFile('/home/marten/js-basics/isikukood website/isikukood.html');
    });

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
    }
);
