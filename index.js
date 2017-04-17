var chalk = require('chalk');

var BuildMessagePlugin = function (options) {
  this.options = {};
  this.options.message= options.message;
  this.options.output = options.output;
};

BuildMessagePlugin.prototype.apply = function (compiler) {
  var options = this.options;
  compiler.plugin('compile', function(compilation, params) {
    console.log(chalk.yellow(options.message))
    return;
  });
};

module.exports = BuildMessagePlugin;
