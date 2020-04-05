const init = () => {
  console.log('loading env variables');
  require('dotenv').config({ debug: process.env.DEBUG });
};

module.exports = { init };
