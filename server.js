const express = require('express');
const http = require('http');

const users = require('./routes/users');
const posts = require('./routes/posts');

const PORT = 4567;

const app = express();

app.use('/users', users);
app.use('/posts', posts);

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
