module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat_css: {
      options: {
        // Task-specific options go here.
      },
      all: {
        src: [
          "vendor/angular-material/angular-material.min.css",
          "css/*.css"
      ],
        dest: "dist/styles.css"
      },
    },
    concat: {
      options: {
        separator: ';'
      },
      dependencies: {
        src: [
          "vendor/angular/angular.min.js",
          "vendor/angular-aria/angular-aria.min.js",
          "vendor/angular-animate/angular-animate.min.js",
          "vendor/angular-material/angular-material.js",
          "vendor/angular-ui-router/release/angular-ui-router.min.js",
          "vendor/angular-sanitize/angular-sanitize.min.js"
        ],
        dest: 'build/dependencies.min.js'
      },

      app_src: {
        src: [
          "js/app/app.js",
          "js/app/portfolio/PortfolioController.js",
          "js/app/portfolio/portfolioProject.js"
        ],
        dest: 'build/app_src.js'
      },

      bundle: {
        src: [
          'build/dependencies.min.js',
          "build/app_src.min.js"
        ],
        dest: 'dist/app.min.js'
      }


    },
    uglify: {
        options: {
          mangle: false
        },
        my_target: {
          files: {
            'build/app_src.min.js': ['build/app_src.js']
          }
        }
      }
  });

  //grunt.loadNpmTasks('grunt-contrib-uglify');
  //grunt.loadNpmTasks('grunt-contrib-jshint');
  //grunt.loadNpmTasks('grunt-contrib-qunit');
  //grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-concat-css');


  //grunt.registerTask('test', ['jshint', 'qunit']);

  //grunt.registerTask('default', ['jshint', 'qunit', 'concat', 'uglify']);

  grunt.registerTask('default', ['concat_css', 'concat:dependencies', 'concat:app_src', 'uglify', 'concat:bundle' ]);

};
