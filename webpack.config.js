const ClosureCompilerPlugin = require('webpack-closure-compiler');
const path = require('path');

module.exports = {
    entry: './src/bootstrap.ts',
    output: {
        filename: './dist/game.min.js',
    },
    resolve: {
        extensions: ['.ts', '.js'],
        modules: [
            path.resolve(__dirname, 'src'), 
            'node_modules'
        ],
    },
    module: {
        loaders: [
            // Run TypeScript files through ts-loader
            { test: /\.ts$/, loader: 'ts-loader' },
        ],
    },
	plugins: [
		// new ClosureCompilerPlugin({
		// 	compiler: {
		// 		language_in: 'ECMASCRIPT6',
		// 		language_out: 'ECMASCRIPT5',
		// 		compilation_level: 'ADVANCED',
		// 	},
		// 	concurrency: 3,
		// }),
	],
};
