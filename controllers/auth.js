const jwt = require('jsonwebtoken');

function auth(req, res, next) {
    const token = req.cookies.token;
    if (!token) {
        return res.status(401).json({ message: 'Token Not Provided' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        // console.log(req.user)
        next();
    } catch (error) {
        res.status(401).json({ message: 'Unauthorized' });
    }
}

module.exports = auth;