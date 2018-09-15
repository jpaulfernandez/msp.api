module.exports = function(grunt)
{
    "use strict";

    grunt.initConfig({
        ts: {
          app: {
            files: [{
              src: ["src/\*\*/\*.ts", "!src/.baseDir.ts", "!src/_all.d.ts"],
              dest: "./build"
            }],
            options: {
              module: "commonjs",
              target: "es6",
              noImplicitAny: true,
              strictNullChecks: true,
              moduleResolution: "node",
              sourceMap: true,
              experimentalDecorators: true,
              allowJs: true
            }
          }
        },
        tslint: {
          options: {
            configuration: "tslint.json"
          },
          files: {
            src: ["src/\*\*/\*.ts"]
          }
        },
        watch: {
          ts: {
            files: ["js/src/\*\*/\*.ts", "src/\*\*/\*.ts"],
            tasks: ["ts", "tslint"]
          }
        },
        clean: {
            options: {
                'no-write': true
            },
            build: ["build"],
            release: ["dist"]
        }
      });
    
      grunt.loadNpmTasks("grunt-contrib-watch");
      grunt.loadNpmTasks("grunt-ts");
      grunt.loadNpmTasks("grunt-tslint");
      grunt.loadNpmTasks("grunt-contrib-clean");
    
      grunt.registerTask("default", [
        "ts",
        "tslint"
      ]);
}


// node_modules/.bin/typings install dt~body-parser --save
// node_modules/.bin/typings install dt~express --save
// node_modules/.bin/typings install dt~node --save --global
// node_modules/.bin/typings install dt~serve-static --save
// node_modules/.bin/typings install dt~express-serve-static-core  --save
// node_modules/.bin/typings install dt~mime --save