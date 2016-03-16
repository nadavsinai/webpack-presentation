var t = require('./translator');

module.exports = {
  greet: function (name) {
    console.log('test hot111');
    return t(__('greeting'), {name: name});
  }
};
