var express = require('express');
var router = express.Router();
var postCtrl = require('../controllers/postController')

router.get('/posts', postCtrl.getAllPosts)
router.get('/posts/new', postCtrl.newPost)
router.get('/posts/:id', postCtrl.getPost)
router.get('/posts/:id', postCtrl.editPost)

router.post('/posts/create', postCtrl.createPost)
router.delete('/posts/:id', postCtrl.deletePost)
router.put('/posts/:id', postCtrl.updatePost)


module.exports = router;