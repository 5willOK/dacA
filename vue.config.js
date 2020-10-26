module.exports = {
    publicPath: './',
    devServer: {
        host: '0.0.0.0',
        port: '3001',
        open: true,
        proxy: {
            //http://localhost:3000/api/v1/index/swipe
            '/api': {
                target: 'http://localhost:3000/api',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}