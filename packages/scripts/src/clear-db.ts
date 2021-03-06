import chalk from 'chalk'
import dotenv from 'dotenv-flow'
import { resolve } from 'node:path'
import { Client } from 'pg'

dotenv.config({
  path: resolve(__dirname, '..', '..', 'backend')
})

const client = new Client({
  user: process.env.POSTGRES_USERNAME,
  password: process.env.POSTGRES_PASSWORD,
  host: process.env.POSTGRES_HOSTNAME,
  port: Number(process.env.POSTGRES_PORT),
  database: process.env.POSTGRES_DBNAME
})

console.log(chalk.green('deleting data in tables'));
// eslint-disable-next-line
(async () => {
  await client.connect()

  console.log(chalk.green('deleting transaction details'))
  await client.query('delete from transaction_details')
  console.log(chalk.green('deleting transactions'))
  await client.query('delete from transactions')
  console.log(chalk.green('deleting users'))
  await client.query('delete from users')
  console.log(chalk.green('deleting followers'))
  await client.query('delete from user_followers')
  console.log(chalk.green('deleting events'))
  await client.query('delete from events')

  console.log(chalk.green('successfully removes data from the db'))
  await client.end()
})()
