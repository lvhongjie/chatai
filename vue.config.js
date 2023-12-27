const {defineConfig} = require('@vue/cli-service')
const CompressionPlugin = require("compression-webpack-plugin");
const TerserPlugin = require('terser-webpack-plugin');
module.exports = defineConfig({
    publicPath: process.env.NODE_ENV === "production" ? "./" : "/",
    transpileDependencies: true,
    lintOnSave: false,
    productionSourceMap: false,
    // ����ļ�Ŀ¼
    outputDir: "dist",
    // ��̬��Դ��ŵ��ļ���(�����outputDir)
    assetsDir: "assets",
    configureWebpack: {
        plugins: [
            new CompressionPlugin({
                algorithm: 'gzip', // ʹ��gzipѹ��
                test: /\.js$|\.html$|\.css$/, // ƥ���ļ���
                filename: '[path][base].gz[query]', // ѹ������ļ���(����ԭ�ļ�������׺��.gz)
                minRatio: 1, // ѹ����С��1�Ż�ѹ��
                threshold: 10240, // �Գ���10k������ѹ��
                deleteOriginalAssets: false, // �Ƿ�ɾ��δѹ����Դ�ļ���
            }),
        ],
        optimization: {
            minimizer: [
                new TerserPlugin({
                    terserOptions: {
                        compress: {
                            drop_console: true
                        }
                    }
                })
            ]
        }
    }
})
