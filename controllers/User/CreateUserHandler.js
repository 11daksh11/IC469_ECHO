/* eslint-disable prefer-promise-reject-errors */
const responses = require('../../configs/responses.js')
const User = require('../../models/User.js')
const Bot = require('../../models/Bot.js')

const CreateUserHandler = (user) => {
  return new Promise((resolve, reject) => {
    const UserDoc = new User(user)
    const BotDoc = new Bot({ uid: user.uid })
    Promise.all([UserDoc.save(), BotDoc.save()])
      .then(() => {
        resolve({
          statusCode: 201,
          serverMessage: responses['201'],
          payload: {
            isUserCreated: true
          },
          error: null
        })
      })
      .catch((err) => {
        reject({
          statusCode: 500,
          serverMessage: responses['500'],
          payload: {},
          error: err.message
        })
      })
  })
}

module.exports = CreateUserHandler
