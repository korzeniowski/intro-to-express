const express = require('express');
const router = express.Router();

const fakeUsers = require('../fakeData').users;
const fakePosts = require('../fakeData').posts;

router.get('/', (req, res) => {
  res.json(fakeUsers);
});

router.get('/:id', (req, res) => {
  res.json(fakeUsers.filter(u => u.id === req.params.id));
});

router.get('/:id/posts', (req, res) => {
  res.json(fakePosts.filter(p => p.authorId === req.params.id));
});

module.exports = router;
