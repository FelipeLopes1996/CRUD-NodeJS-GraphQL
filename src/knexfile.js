// import {password} from '../.env'
const {env} = require('process')
// const {password} = require('../.env')



module.exports = {
    client: 'mysql',
    connection: {
        database: env.MYSQL_DATABASE,
        user: env.MYSQL_USERNAME,
        password: env.MYSQL_PASSOWRD
    },
    pool: {
        min: 2,
        max: 10
    },
    migrations: {
        tableName: 'knex_migrations'
    }
}