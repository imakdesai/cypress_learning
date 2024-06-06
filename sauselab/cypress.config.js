const { defineConfig } = require('cypress');
const env = require('dotenv').config();

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      const environmentName = config.env.environmentName || 'cred';
      const environmentConfig = require(`./config/${environmentName}.js`);

      if (environmentConfig.baseUrl) {
        config.baseUrl = environmentConfig.baseUrl;
      }
      if (environmentConfig.credentials) {
        config.env.credentials = {
          ...config.env.credentials,
          ...environmentConfig.credentials,
        };
      }
      return config;
      on('task', {
        // Do something with the event
      });

    },
    chromeWebSecurity: false,
    defaultCommandTimeout: 6000,
    requestTimeout: 6000,
  },
  env: {
    userName: process.env.username,
    password: process.env.password,
    errorUser: process.env.errorUser,
    performanceGlitch: process.env.performanceGlitch
  },
});
