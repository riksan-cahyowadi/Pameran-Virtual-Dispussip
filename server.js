const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
app.use(bodyParser.json());

let visitCount = 0;

// Endpoint untuk mendapatkan jumlah kunjungan
app.get('/visits', (req, res) => {
    res.json({ visits: visitCount });
});

// Endpoint untuk menambah jumlah kunjungan
app.post('/visit', (req, res) => {
    visitCount++;
    res.json({ visits: visitCount });
});

app.listen(3000, () => {
    console.log('Server is running on port 5500');
});