const jwt = require('jsonwebtoken')
const user = require('../models/userSchema')


// is admin middlewares

exports.admin = async function (req, res, next) {
    if (req.user && req.user.isAdmin) {
        res.status(400).json({
            message: "you are not an authorise admin"
        });
    }
};

exports.project = async function (req, res, next) {
    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        try {
            token = req.header.authorization.split("")[1];
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = await User.findById(decoded)
            next();

        } catch (error) {
            res.status(400).json({
                message: "invalid token"
            })
        }
    }
    if (!token) {
        res.status(400).json({
            message: "you are not authorization"
        })
    }
};