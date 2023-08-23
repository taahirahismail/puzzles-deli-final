const {sign, verify} = require('jsonwebtoken');
require('dotenv').config();

function createToken(user) {
    return sign({
        emailAdd: user.emailAdd,
        userPass: user.userPass
    },
    
    process.env.secret_key,
    
    {
        expiresIn: '1h'
    });
}

// function verifyAToken(req, res, next){
//    try {
//         // Retrieve token from req.headers
//         console.log("Get token from req.headers['authorization']");
//         const token = req.headers["authorization"];

//         if (!token) {
//             throw new Error('Token not provided!');
//         }

//         // verify token using secret key
//         const decoded = verify(token, process.env.secret_key);
//         console.log('Token verified:', decoded);

//         req.decoded = decoded;

//         console.log(token);
//         next();
//    } catch(error) {
//         console.error('Token verification failed:', error.message);
//         res.status(401).json({
//             status: res.statusCode,
//             msg: error.message
//         });
//    }
// }

module.exports = {createToken};
// add verifyAToken to module.exports