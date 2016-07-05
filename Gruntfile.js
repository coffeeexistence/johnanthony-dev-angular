var clientApp = './src/app/';

var files = [
  clientApp + '**/*.module.js',
  '<%= ngtemplates.app.dest %>',
  clientApp + '**/*.js',
  'src/third_party/**.js'
];

var vendorCss = [
  "vendor/angular-material/angular-material.min.css"
]

module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),


    sass: {                              // Task
      dist: {                            // Target
        options: {                       // Target options
          style: 'expanded'
        },
        files: {                         
          'build/app.css': 'build/app.scss'
        }
      }
    },

    concat_css: {
      options: {
        // Task-specific options go here.
      },
      app: {
        src: [
          'src/sass/variables/*.scss',
          'src/sass/*.scss'
          ],
        dest: 'build/app.scss'
      },
      bundle: {
        src: [
          vendorCss,
          "build/app.css"
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
          'vendor/jquery/jquery.min.js',
          "vendor/angular/angular.min.js",
          "vendor/angular-aria/angular-aria.min.js",
          "vendor/angular-animate/angular-animate.min.js",
          "vendor/angular-material/angular-material.min.js",
          "vendor/angular-ui-router/release/angular-ui-router.min.js",
          "vendor/angular-sanitize/angular-sanitize.min.js",
          'vendor/angular-bind-html-compile/angular-bind-html-compile.min.js',
          'vendor/angular-gist-embed/dist/angular-gist-embed.min.js'
          
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
      },

      bundle_dev: {
        src: [
          'build/vendor.min.js',
          'build/app_src.js',
        ],
        dest: 'dist/app.min.js'
      }
    },


    uglify: {
        options: {
          mangle: false,
          beautify: true,
          compress: false
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
  grunt.loadNpmTasks('grunt-contrib-sass');


  // grunt.registerTask('default', ['concat_css', 'concat:vendor', 'ngtemplates', 'concat:app_src', 'uglify', 'concat:bundle' ]); // Production
  grunt.registerTask('default', ['concat_css:app', 'sass', 'concat_css:bundle', 'concat:vendor', 'ngtemplates', 'concat:app_src', 'concat:bundle_dev' ]); // Development

};
