module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
  	sass: {
  		options: {
  			sourceMap: true
  		},
  		dist: {
  			files: {
  				'css/style.css': 'css/style.sass'
  			}
  		}
  	},

  	imagemin: {
  		dynamic: {
  			files: [{
  				expand: true,
  				cwd: 'images/',
  				src: ['**/*.{png,jpg,gif}'],
  				dest: 'images/build/'
  			}]
  		}
  	},

    browserSync: {
      dev: {
        bsFiles: {
           src : [
            '*.css',
            '*.html'
           ]
        },
        options: {
          watchTask: true,
          server: './'
        }
      }
    },

    jshint: {
      all: ['js/*.js']
    },

    watch: {
      scripts: {
        files: ['css/*.sass'],
        tasks: ['sass'],
        options: {
            spawn: false,
        },
      }
    }

  });
  // Load the plugins tasks
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-contrib-jshint');


  // Default task(s).

  grunt.registerTask('default', ['sass', 'imagemin', 'browserSync', 'jshint', 'watch']);
};