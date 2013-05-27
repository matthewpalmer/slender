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
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: '<%= pkg.name %>.js',
        dest: '<%= pkg.name %>.min.js'
      }
    },
    simplemocha: {
      options: {
        globals: ['should'],
        timeout: 3000,
        ignoreLeaks: false,
        grep: '',
        ui: 'bdd',
        reporter: 'tap'
    },

    all: { src: 'test/*.js' }
  }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-simple-mocha');

  // Default task(s).
  grunt.registerTask('default', ['simplemocha', 'concat', 'jshint', 'uglify']);

};