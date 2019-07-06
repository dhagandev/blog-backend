let Post = require('../models/post')

module.exports = {
	getAllPosts,
	getPost,
	createPost,
	updatePost,
	deletePost
}

function getAllPosts(req, res) {
  let posts = Post.getAllPosts();
  res.send(JSON.parse(posts));
}

function getPost(req, res) {
  let post = Post.getPost(req.params.id);
  res.send(JSON.parse(post));
}

function createPost(req, res) {
  Post.createPost(req.params.id);
  res.status(201);
  res.send({ body: 'Successful post creation.' });
}

function updatePost(req, res) {
  req.body.done = !!req.body.done;
  Post.updatePost(req.params.id, req.body);
  res.status(200);
  res.send({ body: 'Successful post update.' });
}

function deletePost(req, res) {
  res.send({ title: 'Express' });
}