const express = require('express');
const router = express.Router();

const fakeData = require('../fakeData');

const fakeUsers = fakeData.users;
const fakePosts = fakeData.posts;
const fakeComments = fakeData.comments;

router.get('/', (req, res) => {
  let users = fakeUsers;
  if (req.query.ids) {
    let ids = [].concat(req.query.ids);
    users = users.filter(u => ids.includes(u.id));
  }
  res.json(users);
});

router.get('/:id', (req, res) => {
  res.json(fakeUsers.filter(u => u.id === req.params.id));
});

router.get('/:id/posts', (req, res) => {
  res.json(fakePosts.filter(p => p.authorId === req.params.id));
});

router.get('/:id/comments', (req, res) => {
  res.json(fakeComments.filter(c => c.authorId === req.params.id));
});

module.exports = router;
