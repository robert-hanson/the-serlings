// config.js

// Set the current environment to true in the env object
var currentEnv = process.env.NODE_ENV || 'development';

exports.EMAIL_PASSWORD = process.env.EMAIL_PASSWORD;

exports.DB_CONNECTION=process.env.DB_CONNECTION;

exports.BOOTSTRAP_VERSION = process.env.BOOTSTRAP_VERSION || 4;