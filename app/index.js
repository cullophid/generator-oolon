'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');

var OolonGenerator = yeoman.generators.Base.extend({
  initializing: function () {
    this.pkg = require('../package.json');
  },
  writing: {
    app: function () {
      this.directory('config', 'config');
      this.directory('middleware', 'middleware');
      this.directory('routes', 'routes');
      this.directory('test', 'test');
      this.directory('services', 'services');
      this.src.copy('main.js', 'main.js');

    },

    projectfiles: function () {
      this.src.copy('_package.json', 'package.json');
      this.src.copy('editorconfig', '.editorconfig');
      this.src.copy('jshintrc', '.jshintrc');
      this.src.copy('gitignore', '.gitignore');
      this.src.copy('gulpfile.js', 'gulpfile.js');
      this.src.copy('server.js', 'server.js');

    }
  },

  end: function () {
    this.installDependencies({bower:false});
  }
});

module.exports = OolonGenerator;
