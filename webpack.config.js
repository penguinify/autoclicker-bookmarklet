const path = require('path')

module.exports = {
    entry: './src/index.js', // Entry point of your application
    mode: 'production', // Or 'development' for non-minified output
    resolve: {
        extensions: ['.js'],
        alias: {
            '@': path.resolve('src/'),
        },
    },
    devServer: {
        host: 'localhost',
        static: {
            directory: path.join(__dirname, 'dist/'),
        },
        port: 6969,
        open: true,
        hot: true,
    },
    output: {
        filename: 'bundle.js', // Output bundle filename
        // path: path.resolve(__dirname, 'build'), // Output directory
        path: path.resolve(__dirname, 'dist/'), // testing directory
    },
}
