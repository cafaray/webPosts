const express = require('express')
const logger = require('morgan')
const errorhandler = require('errorhandler')
const bodyparser = require('body-parser')
//const endPoints = require('./routes/posts')
//const endPointsComments = require('./routes/comments')

const endPoints = require('./routes/index')

let app = express()
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({
    extended: true
}))

app.use(logger('dev'))
app.use(errorhandler())

app.route('/posts')
    .get(endPoints.posts.getPosts)
    .post(endPoints.posts.addPost);
app.route('/posts/:id')
    .put(endPoints.posts.updatePost)
    .delete(endPoints.posts.removePost)

app.route('/posts/:id/comments')
    .get(endPoints.comments.getComments)
    .post(endPoints.comments.addComment);
app.route('/posts/:id/comments/:idComment')
    .put(endPoints.comments.updateComment)
    .delete(endPoints.comments.removeComment)

app.listen(3000)