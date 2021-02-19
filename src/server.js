// import express from 'express'
// import graphqlHTTP from 'express-graphql'
// import { buildSchema } from 'graphql'
// import schema from './api/schema'
const express = require('express')
const {graphqlHTTP} = require('express-graphql')
const { buildSchema } = require('graphql')
const schema = require('./api/schema')

const app = express()
app.use('/', graphqlHTTP({
    schema,
    graphiql: true
}))

app.listen(4000, () => console.log('Executando...'))