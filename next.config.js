// next.config.js
module.exports = {
  images: {
    domains: ['www.appverticals.com'], // Add your image hostnames here
  },
    webpack: (config, { isServer }) => {
      // Add the file-loader rule for MP4 files
      config.module.rules.push({
        test: /\.(mp4|mp3|jpeg)$/,
        use: {
          loader: 'file-loader',
          options: {
            publicPath: '/_next',
            name: 'static/media/[name].[ext]', // Output path and filename
          },
        },
      });
  
      return config;
    },
  };
  