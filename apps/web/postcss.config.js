// The server was started in app/server - so for the moment
// we make the config path relative ../web/tailwind.config.js
module.exports = {
  plugins: {
    tailwindcss: {
      config: '../web/tailwind.config.js',
    },
    autoprefixer: {},
  },
}
