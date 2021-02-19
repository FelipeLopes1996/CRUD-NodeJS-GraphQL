const knexfile = require('../knexfile')
const knex = require('knex')(knexfile)
module.exports = knex

// knex('users').insert({
//     name: 'felipe',
//     email: 'mail@mail.com.br',
//     password: 'teste'
// }).then(data => console.log(data))

// knex('users').select('*').then(res => console.log(res))

// knex('users').first().then(res => console.log(res))

// knex('users').where({id: '2'}).then(res => console.log(res))