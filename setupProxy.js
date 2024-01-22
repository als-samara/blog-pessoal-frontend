const proxy = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/usuarios/cadastrar',
        proxy({
            target: 'http://localhost:5173',
            changeOrigin: true,
        })
    );
};
