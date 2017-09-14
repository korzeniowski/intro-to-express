const faker = require('faker');

faker.seed(12345);

const users = Array.from({length: 10}, () => ({
  id: faker.random.uuid(),
  name: faker.name.findName()
}));

const posts = Array.from({length: 50}, () => ({
  id: faker.random.uuid(),
  authorId: faker.random.arrayElement(users).id,
  content: faker.lorem.sentences(Math.random() * 3)
}));

const comments = Array.from({length: 500}, () => ({
  id: faker.random.uuid(),
  postId: faker.random.arrayElement(posts).id,
  authorId: faker.random.arrayElement(users).id,
  content: faker.lorem.sentences(Math.random() * 3)
}));

exports.users = users;
exports.posts = posts;
exports.comments = comments;
