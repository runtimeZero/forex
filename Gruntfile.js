module.exports = function(grunt){

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),


  jshint: {
    // define the files to lint
    files: ['gruntfile.js','client/controllers/*.js','client/directives/*.js','client/services/*.js','client/*.js'],

    options: {
    // more options here if you want to override JSHint defaults
      globals: {
        jQuery: true,
        console: true,
        module: true
      }
    }
   },
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
};
