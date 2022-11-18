function auth (req, res, next) {
    console.log('User Authenticated');
    next();
}

module.exports = auth;