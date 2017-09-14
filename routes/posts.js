const express = require('express');
const router = express.Router();

const fakePosts = require('../fakeData').posts;
const fakeComments = require('../fakeData').comments;

router.get('/', (req, res) => {
  let posts = fakePosts;
  if (req.query.ids) {
    let ids = [].concat(req.query.ids);
    posts = posts.filter(p => ids.includes(p.id));
  }
  res.json(posts);
});

router.get('/:id', (req, res) => {
  res.json(fakePosts.filter(p => p.id === req.params.id));
});

router.get('/:id/comments', (req, res) => {
  res.json(fakeComments.filter(c => c.postId === req.params.id));
});

module.exports = router;
