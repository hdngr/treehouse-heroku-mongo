'use strict';

const http = require('http');
const mongoose = require('mongoose');

const port = process.env.PORT || 1337;

mongoose.connect('mongodb://localhost/fooobar');

let Post = mongoose.model('Post', { title: String });

let post = new Post({ title: 'My Awesome Goals for 2016!' });

post.save(function (err) {
  if (err) {
    console.log(err);
  }
  console.log('Blog post saved!');
});

http.createServer((req, res) => {
  Post.find((err, posts) => {
    if(err) {
      return console.log(err);
    }
    console.log(posts);
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(posts));
  })
}).listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
