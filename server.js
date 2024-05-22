const express = require('express');// it is a package present in node modules extract using require
const expressGraphQL = require('express-graphql').graphqlHTTP

const schema = require('./schema/schema')

const app = express();

app.use('/graphql',expressGraphQL({
    schema, // resembles schema:schema
    graphiql:true
}))

app.use('/shivam',()=>{console.log('hello')})


app.listen(4000, ()=>{
    console.log("listening");
})