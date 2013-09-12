module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    less: {
      dev: {
        options: {
          paths: ["css/less"],
          compress: true,
        },
        files: {
          "css/style.css": "css/less/style.less",
        }
      }
    },
    // concat: {
    //   mp: {
    //     src: [
    //       'src/core.js',
    //       'src/data_source.js',
    //       'src/test_select.js',
    //       'src/tab_select.js',
    //       'src/multi_tab_select.js',
    //       'src/message_box.js',
    //       'src/grid.js',
    //       'src/menu.js',
    //       'src/org_select.js',
    //       'src/year_grade.js',
    //       'src/tooltip.js',
    //       'src/save_report.js',
    //     ],
    //     dest: 'dist/mp.core.js'
    //   }
    // },
    // uglify: {
    //     options: {
    //         banner : '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
    //     },
    //     build: {
    //         src : 'dest/domop.js',
    //         dest : 'dest/domop.min.js'
    //     }
    // }
    // copy: {
    //   mp: {
    //     src: 'dist/mp.core.js',
    //     dest: '../mp.core.js'
    //   }
    // },
  });
  grunt.loadNpmTasks('grunt-contrib-less');
  // grunt.loadNpmTasks('grunt-contrib-uglify');
  // grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.registerTask('default', [ 'less:dev' ]);
};