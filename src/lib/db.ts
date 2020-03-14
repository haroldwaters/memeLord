import { Sequelize } from 'sequelize'

export const sequelize = new Sequelize('database', 'user', 'password', {
  host: 'localhost',
  dialect: 'sqlite',
  logging: false,
  // SQLite only
  storage: 'db/database.sqlite'
})
