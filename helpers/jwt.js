const expressJwt = require('express-jwt')
const config = require('config.json')

function jwt() {
    const { secret } = config;
    
    return expressJwt({ secret }).unless({
        path: [
            '/users',
            '/users/authenticate'
        ]
    })
}

module.exports = jwt