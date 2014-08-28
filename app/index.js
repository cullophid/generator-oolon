'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');

var OolonGenerator = yeoman.generators.Base.extend({
  initializing: function () {
    this.pkg = require('../package.json');
  },
  promptTask: function () {
    var done = this.async();
    this.prompt({
      type    : 'input',
      name    : 'appName',
      message : 'Your project name',
      default : this.appname // Default to current folder name
    }, function (custom) {
      this.custom = custom;
      done();
    }.bind(this));
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
      this.template('_package.json', 'package.json', this.custom);
      this.src.copy('editorconfig', '.editorconfig');
      this.src.copy('jshintrc', '.jshintrc');
      this.src.copy('gitignore', '.gitignore');
      this.template('gulpfile.js', 'gulpfile.js');
      this.template('server.js', 'server.js', this.custom);

    }
  },

  end: function () {
    this.installDependencies({bower:false});
  }
});

module.exports = OolonGenerator;
