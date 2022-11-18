function auth (req, res, next) {
    console.log('Logging...');
    next();
}

module.exports = auth;