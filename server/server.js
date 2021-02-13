const app = require('./app');

app.get('/', (req, res) => {
    res.send('Welcome to TIJUANA!');
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});