const api = require('./utils/registry');

module.exports = (package, version, callback) => {
  api.getPackage(package, version, callback);
};
