import express from 'express'
import {json, urlencoded} from 'body-parser'
import cors from 'cors'

const app = express()
let server = undefined
//app.use(cors())
app.use(json())
app.use(urlencoded({extended: true}))

app.all('*', (req, res) => res.send({msg: 'Hello World!', ...req.body, ...req.query}))

export function start(config = {port: process.env.SERVER_PORT}) {
  return new Promise(resolve => server = app.listen(config.port, () => resolve({server: server, stop: stop})))
}
export function stop() {
  return new Promise(resolve => server.close(resolve))
}
