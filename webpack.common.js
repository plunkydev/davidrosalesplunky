const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/template.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
        options: {
        // No proceses/reescribas URLs dentro del HTML.
        // Así el <link rel="icon" href="assets/icons/favicon.ico"> queda tal cual.
          sources: false
        }
      },

      // --- Reglas específicas con nombres fijos (para SEO/OG) ---
      {
        test: /favicon\.ico$/i,
        type: 'asset/resource',
        generator: { filename: 'assets/icons/favicon.ico' }
      },
      {
        test: /apple-touch-icon\.(png|jpe?g)$/i,
        type: 'asset/resource',
        generator: { filename: 'assets/apple-touch-icon.jpg' } // fijo en .jpg
      },
      {
        test: /preview-1200x630\.png$/i,
        type: 'asset/resource',
        generator: { filename: 'assets/preview-1200x630.png' }
      },

      // Regla general para el resto de imágenes (con hash por defecto)
      {
        test: /\.(png|svg|jpg|jpeg|gif|webp|ico)$/i,
        exclude: [
          path.resolve(__dirname, 'src/assets/icons/favicon.ico'),
          path.resolve(__dirname, 'src/assets/apple-touch-icon.jpg'),
          path.resolve(__dirname, 'src/assets/preview-1200x630.png')
        ],
        type: 'asset/resource'
      },

      // Fuentes
      {
        test: /\.(woff2?|ttf|otf|eot)$/i,
        type: 'asset/resource',
        generator: { filename: 'assets/fonts/[name][ext]' }
      }
    ]
  },
  resolve: {
    fallback: {
      path: false,
      fs: false,
      os: false,
      util: false,
      https: false,
      http: false,
      crypto: false,
      stream: false,
      zlib: false,
      vm: false,
      buffer: false,
      url: false,
      assert: false,
      constants: false,
      child_process: false,
      worker_threads: false,
      module: false,
      querystring: false,
      'uglify-js': false,
      '@swc/core': false,
      esbuild: false,
      inspector: false
    }
  }
}
