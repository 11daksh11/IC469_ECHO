const route = require('express')()
const responses = require('../configs/responses.js')
const FetchStoryComments = require('../controllers/Story/FetchStoryComments.js')

route.get('/user/story/fetchComments', (req, res) => {
  if ([undefined, null, ''].includes(req.body.storyId)) {
    return res.status(400).send({
      statusCode: 400,
      serverMessage: responses['400'],
      payload: {},
      error: 'Bad Request - incorrect or no story id passed'
    })
  }
  FetchStoryComments(req.body.storyId)
    .then((resp) => res.status(resp.statusCode).send(resp))
    .catch((err) => res.status(err.statusCode).send(err))
})

module.exports = route
