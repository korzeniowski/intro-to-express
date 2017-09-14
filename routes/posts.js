const express = require('express');
const router = express.Router();

const fakePosts = require('../fakeData').posts;
const fakeComments = require('../fakeData').comments;

router.get('/', (req, res) => {
  res.json(fakePosts);
});

router.get('/:id', (req, res) => {
  res.json(fakeUsers.filter(u => u.id === req.params.id));
});

router.get('/posts/:id/comments', (req, res) => {
  res.send(`Comments for Post ID ${req.params.id}`);
});

module.exports = router;
