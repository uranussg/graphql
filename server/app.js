const express = require('express');
const graphqlHTTP = require('express-graphql');
const app = express();
const schema = require('./schema/schema')
app.use('/graphql', graphqlHTTP({
    schema
}));

app.listen(3000, () => {
    console.log('now is listening on port 3000')
})