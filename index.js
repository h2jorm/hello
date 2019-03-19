const http = require('http');

const app = http.createServer();
app.on('request', (req, res) => {
    res.end('hello again\n');
});

const PORT = process.env.NODE_PORT || 8080;

app.listen(PORT, () => {
    console.log('app is running on port %d', PORT);
});