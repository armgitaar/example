// ===================================================
// FOR PRODUCTION
// Total.js - framework for Node.js platform
// https://www.totaljs.com
// ===================================================

const options = {};

options.ip = '0.0.0.0';
options.port = process.env.PORT;
// options.config = { name: 'Total.js' };
// options.sleep = 3000;

require('total.js').http('release', options);
