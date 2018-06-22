var store = require('../models/posts');

module.exports = {
    getComments(req, res) {
      let idPost = req.params.id
      res.status(200).send(store.posts[idPost].comments)
    }, 
    addComment(req, res) {
      let newComment = req.body
      let idPost = req.params.id
      let idComment = store.posts[idPost].comments.length
      store.posts[idPost].comments.push(newComment)
      res.status(201).send({id:idComment})
    },
    updateComment(req, res) {
      let idPost = req.params.id
      let idComment = req.params.idComment
      store.posts[idPost].comments[idComment]=req.body
      res.status(200).send(store.posts[idPost])
    },
    removeComment(req, res) {
      let idPost = req.params.id
      let idComment = req.params.idComment
      store.posts[idPost].comments.splice(idComment, 1)
      res.status(204).send()
    }  
  }