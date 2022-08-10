import bcrypt from "bcryptjs"

const users = [{
    name: "Admin",
    email: "admin@kalacademy.com",
    password: bcrypt.hashSync("123456"),
    isAdmin: true
    },
    {
        name: "Apollo",
        email: "apollo@kalacademy.com",
        password: bcrypt.hashSync("123456"),
        isAdmin: false
    }]

export default users;