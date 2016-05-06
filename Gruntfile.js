module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat_css: {
      options: {
        // Task-specific options go here.
      },
      all: {
        src: [
          "js/vendor/angular-material/angular-material.css",
          "css/*.css"
      ],
        dest: "dist/styles.css"
      },
    },
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: [
          "js/vendor/angular/angular.js",
          "js/vendor/angular-aria/angular-aria.js",
          "js/vendor/angular-animate/angular-animate.js",
          "js/vendor/angular-material/angular-material.js",
          "js/vendor/angular-ui-router/release/angular-ui-router.min.js",
          "js/vendor/angular-sanitize/angular-sanitize.min.js",
          "js/app/app.js",
          "js/app/portfolio/PortfolioController.js",
          "js/app/portfolio/portfolioProject.js"
        ],
        dest: 'dist/app.js'
      }
    },
  });

  //grunt.loadNpmTasks('grunt-contrib-uglify');
  //grunt.loadNpmTasks('grunt-contrib-jshint');
  //grunt.loadNpmTasks('grunt-contrib-qunit');
  //grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-concat-css');

  //grunt.registerTask('test', ['jshint', 'qunit']);

  //grunt.registerTask('default', ['jshint', 'qunit', 'concat', 'uglify']);

  grunt.registerTask('default', ['concat', 'concat_css']);

};
