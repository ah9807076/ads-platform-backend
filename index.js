const express = require('express'); const app = express(); const port = process.env.PORT || 3000;
app.get('/', (req, res) => { res.send('Ads Platform Backend is running'); }); app.get('/admin', (req, res) => { res.send('Admin Dashboard'); }); app.get('/publisher', (req, res) => { res.send('Publisher Dashboard'); }); app.listen(port, () => { console.log('Server is running on port ' + port); });
