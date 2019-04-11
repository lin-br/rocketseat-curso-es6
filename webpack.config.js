module.exports = {
    // arquivo principal
    entry: './main.js',
    // para qual lugar e/ou arquivo que será enviado o código 'compilado'
    output: {
        path: __dirname,
        // nome do arquivo
        filename: "bundle.js",
    },
    module: {
        // como o webpack deve ser comportar quando o usuário tentar importar novos arquivos javascript
        rules: [
            {
                // verifica os arquivos que terminam com js em regex
                test: /\.js$/,
                // vai excluir o diretório node_modules para importar os arquivos
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                }
            }
        ],
    },
};