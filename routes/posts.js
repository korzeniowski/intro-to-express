const express = require('express');
const router = express.Router();

const fakeData = require('../fakeData');

const fakePosts = fakeData.posts;
const fakeComments = fakeData.comments;

router.get('/', (req, res) => {
  let posts = fakePosts;
  if (req.query.ids) {
    let ids = [].concat(req.query.ids);
    posts = posts.filter(p => ids.includes(p.id));
  }
  res.json(posts);
});

router.get('/:id', (req, res) => {
  res.json(fakePosts.find(p => p.id === req.params.id));
});

router.get('/:id/comments', (req, res) => {
  res.json(fakeComments.filter(c => c.postId === req.params.id));
});

module.exports = router;
