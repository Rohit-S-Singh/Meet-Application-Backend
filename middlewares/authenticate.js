const jwt = require('jsonwebtoken');
require('dotenv').config();

const authenticate = (req, res, next) => {
    if (req.headers.authorization) {
        const token = req.headers.authorization.split(' ')[1];
        if (token) {
            const user = jwt.verify(token, "eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTcxMjY4OTEyMywiaWF0IjoxNzEyNjg5MTIzfQ.-kaOOzUv5sR_2QNHr1ZBxpkw7__Bm90ls8Ly39e2CRo");
            req.user = user;
            next();
        } else {
            return res.status(400).json({ message: 'Authorization required' });
        }
    }
};

module.exports = { authenticate };