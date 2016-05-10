var clientApp = './src/app/';

var files = [
  clientApp + '**/*.module.js',
  '<%= ngtemplates.app.dest %>',
  clientApp + '**/*.js'

];

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
          "src/css/*.css"
      ],
        dest: "dist/styles.css"
      },
    },


    concat: {
      options: {
        separator: ';'
      },
      vendor: {
        src: [
          "vendor/angular/angular.min.js",
          "vendor/angular-aria/angular-aria.min.js",
          "vendor/angular-animate/angular-animate.min.js",
          "vendor/angular-material/angular-material.min.js",
          "vendor/angular-ui-router/release/angular-ui-router.min.js",
          "vendor/angular-sanitize/angular-sanitize.min.js"
        ],
        dest: 'build/vendor.min.js'
      },
      app_src: {
        src: files,
        dest: 'build/app_src.js'
      },
      bundle: {
        src: [
          'build/vendor.min.js',
          'build/app_src.min.js',
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
      },


    ngtemplates: {
      app: {
        cwd:      'src/app',
        src:      'templates/**.tpl.html',
        dest:     'build/app.templates.js',
        options:  {
          htmlmin: {
            collapseBooleanAttributes:      true,
            collapseWhitespace:             true,
            removeAttributeQuotes:          true,
            removeComments:                 true, // Only if you don't use comment directives!
            removeEmptyAttributes:          true,
            removeRedundantAttributes:      true,
            removeScriptTypeAttributes:     true,
            removeStyleLinkTypeAttributes:  true
          }
        }
      }
    }


  });


  grunt.loadNpmTasks('grunt-angular-templates');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-concat-css');


  grunt.registerTask('default', ['concat_css', 'concat:vendor', 'ngtemplates', 'concat:app_src', 'uglify', 'concat:bundle' ]);

};
