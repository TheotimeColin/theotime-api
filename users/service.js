const config = require('config.json')
const jwt = require('jsonwebtoken')

const users = [
    { id: 1, username: 'test', password: 'test', firstName: 'Test', lastName: 'User' }
]

async function authenticate ({ username, password }) {
    const user = users.find(u => u.username === username & u.password === password)

    if (user) {
        const token = jwt.sign({ sub: user.id }, config.secret)
        const { password, ...userWithoutPassword } = user

        return {
            ...userWithoutPassword,
            token
        }
    }
}

module.exports = {
    authenticate
}