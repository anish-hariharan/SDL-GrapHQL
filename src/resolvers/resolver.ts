import { users } from "../index" 


type User = {
    id: number
    name: string
    email: string
}

type UserInput = Pick<User, "email" | "name">


const getUser = (args: {id: number}): User | undefined => 
    users.find((u) => u.id === args.id)

const getUsers = () : User[] => users

const createUser = (args: {input: UserInput}): User => {
    const user ={
        id: users.length + 1,
        ...args.input,
    }
    users.push(user)

    return user
}

const updateUser = (args: { user: User }): User => {
    const index = users.findIndex( u => u.id === args.user.id)
    const tuser = users[index]

    if(tuser) users[index] = args.user

    return tuser
}

export const root = {
    getUser,
    getUsers,
    createUser,
    updateUser
}