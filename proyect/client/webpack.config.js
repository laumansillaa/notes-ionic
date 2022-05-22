module.exports = {
    entry: "./src/index.tsx",
    resolve: {
        extensions: [".js", ".ts", ".tsx", ".jsx"]
    },
    devtool: 'source-map',

    module: {
        rules: [
            {
                test: /\.js$|jsx$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-react']
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']

            }, 
            {
                test: /\.tsx$|ts$/,
                loader: 'ts-loader',
                options: {
                    compilerOptions: {noEmit: false},
                  }
            }

        ]
    }
}