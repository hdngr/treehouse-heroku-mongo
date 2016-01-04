const http = require('http');

const port = process.env.PORT || 1337;

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World\n');
}).listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
