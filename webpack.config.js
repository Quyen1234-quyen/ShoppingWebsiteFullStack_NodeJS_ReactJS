const path=require('path');
const webpack =require('webpack');
const HtmlWebpackPlugin=require("html-webpack-plugin");


module.exports={
    entry:"./src/appview/index.js",
    output:{
        path:path.join(__dirname,'/src/public'),
        filename:'bundle.js'
    },
    module:{
        rules:[
            {
                use:"babel-loader",
                test: /\.js$/,
                exclude:"/node_modules/"
            },
            {
             test: /\.(scss|css)$/,
             use: [
                 'style-loader',
               'css-loader',
               'sass-loader',
             ],
                exclude:"/node_modules/"
            },{
                loader:"file-loader",
                test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.woff2$|\.eot$|\.ttf$|\.wav$|\.mp3$|\.ico$/,
            }
 
         ]
    },
    plugins:[
        new webpack.ProvidePlugin({
            "$":"jquery",
            "jQuery":"jquery",
            "window.$":"jquery",
            "window.jQuery":"jquery"
        }),
        new HtmlWebpackPlugin({
            template:'src/appview/index.html'
        })

    ],
    devServer: {
        historyApiFallback: true
    }
}