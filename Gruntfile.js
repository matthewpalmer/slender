module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {
        separator: '\n\n'
      },
      dist: {
        src: ['src/*.js'],
        dest: '<%= pkg.name %>.js'
      }
    },
    jshint: {
      beforeconcat: ['src/*.js', 'spec/*.js'],
      afterconcat: ['<%= pkg.name %>.js']
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: '<%= pkg.name %>.js',
        dest: 'slender.min.js'
      }
    },
    jasmine : {
      src : 'src/*.js',
      options : {
        specs: 'spec/*_spec.js',
        vendor: 'jquery.min.js' 
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jasmine');

  // Default task(s).
  grunt.registerTask('default', ['jasmine', 'concat', 'jshint', 'uglify']);

};