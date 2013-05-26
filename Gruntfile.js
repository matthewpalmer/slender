module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {
        separator: ''
      },
      dist: {
        src: ['src/index.js', 'src/rest.js', 'src/bind.js'],
        dest: '<%= pkg.name %>.js'
      }
    },
    jshint: {
      beforeconcat: ['src/*.js', 'test/*.js'],
      afterconcat: ['<%= pkg.name %>.js']
    },
    nodeunit: {
      all: ['test/*_test.js']
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: '<%= pkg.name %>.js',
        dest: '<%= pkg.name %>.min.js'
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Default task(s).
  grunt.registerTask('default', ['concat', 'jshint', 'nodeunit', 'uglify']);

};