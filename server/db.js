const db = require('better-sqlite3')('database.db', {})
const createTable = {
  users: 'CREATE TABLE IF NOT EXISTS user(_id INTEGER PRIMARY KEY, name TEXT NOT NULL UNIQUE, desc TEXT, type INTEGER, timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP)',
  tags: 'CREATE TABLE IF NOT EXISTS tag(_id INTEGER PRIMARY KEY, name TEXT NOT NULL UNIQUE, color TEXT, desc TEXT)'
}
Object.values(createTable).map(sql => db.exec(sql))
const query = (sql, ...args) => JSON.stringify(db.prepare(sql).all(...args))
const run = (sql, ...args) => JSON.stringify(db.prepare(sql).run(...args))
const createUser = user => run('INSERT INTO user(name, desc) VALUES(@title, @desc)', user)
const getUsers = () => query('SELECT * FROM user')

run('INSERT OR IGNORE INTO user(_id, name, desc) VALUES(0, @title, @desc)', { name: 'adminy', desc: 'A Senior Software Dev' })

// safe db close
process.on('exit', () => db.close())
process.on('SIGHUP', () => process.exit(128 + 1))
process.on('SIGINT', () => process.exit(128 + 2))
process.on('SIGTERM', () => process.exit(128 + 15))
module.exports = { createUser, getUsers }
