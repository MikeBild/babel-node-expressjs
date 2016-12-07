const SERVER_PORT = 5000

import 'isomorphic-fetch'
import {deepEqual} from 'assert'

import {start, stop} from '../server.js'

describe('ExpressJS Server integration tests', () => {
  before(() => start({port: SERVER_PORT}).then(x => console.log(`Server listen on ${x.server.address().port}`)))
  after(() => stop().then(x => console.log(`Server closed`)))

  it('should return a default JSON response', () => {

    return fetch(`http://localhost:${SERVER_PORT}`, {headers:{'Content-Type':'application/json'}})
      .then(response => response.json())
      .then(actual => {
        deepEqual(actual, { msg: 'Hello World!' })
      })
  })  

  it('should return a query parameter JSON response', () => {

    return fetch(`http://localhost:${SERVER_PORT}?message=Hello`, {headers:{'Content-Type':'application/json'}})
      .then(response => response.json())
      .then(actual => {
        deepEqual(actual, { msg: 'Hello World!', message: 'Hello' })
      })
  })

  it('should return a JSON response with JSON POST request', () => {

    return fetch(`http://localhost:${SERVER_PORT}`, {method: 'POST', body: '{"message": "HelloJSON"}', headers:{'Content-Type':'application/json'}})
      .then(response => response.json())
      .then(actual => {
        deepEqual(actual, { msg: 'Hello World!', message: 'HelloJSON' })
      })
  })

  it('should return JSON response with URL-Encoded POST request', () => {

    return fetch(`http://localhost:${SERVER_PORT}`, {method: 'POST', body: 'message=HelloURLEncoded', headers:{'Content-Type':'application/x-www-form-urlencoded'}})
      .then(response => response.json())
      .then(actual => {
        deepEqual(actual, { msg: 'Hello World!', message: 'HelloURLEncoded' })
      })
  })

})