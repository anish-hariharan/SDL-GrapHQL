import { schema } from "./schemas/schema"
import express from "express"
import { graphqlHTTP } from "express-graphql"
import { root } from "./resolvers/resolver"

export const users = [
    { id: 1, name: "John Doe", email: "johndoe@gmail.com" },
    { id: 2, name: "Jane Doe", email: "janedoe@gmail.com" },
    { id: 3, name: "Mike Doe", email: "mikedoe@gmail.com" },
]

const app = express()

app.use("/graphql", graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}))

app.listen(4000)
console.log("connected")