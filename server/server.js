const fs = require('fs')
const loadSocketServer = async ssl => {
  const server = require('fastify')(ssl)
  await server.register(require('middie'))
  ssl && await server.register(require('fastify-https-redirect'), { httpPort: 80 })
  await server.register(require('fastify-websocket'), { options: { maxPayload: 16 * 1024 * 1024 } })
  server.register(require('fastify-static'), { root: process.cwd() })
  await server.register(async (server, opts, done) => {
    await server.register(require('fastify-file-upload'))
    server.get('/status/:name', (req, res) => res.send(JSON.stringify({ status: 'ok', ...req.params })))
    server.post('/upload', (req, res) => {
      const bodyFiles = req.body['files[]']
      const files = Array.isArray(bodyFiles) ? bodyFiles : [bodyFiles]
      files.forEach(({ name, data, md5, size }) => fs.writeFileSync(process.cwd() + '/upload/' + name, data))
      res.send(JSON.stringify({ status: 'ok' }))
    })
    done()
  }, { prefix: '/api' })
  // https://parceljs.org/api.html#bundler
  server.parcel = path => server.use(new (require('parcel-bundler'))(path, {}).middleware())
  return server
}

module.exports = loadSocketServer
