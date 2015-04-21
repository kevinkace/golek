/*jshint node:true */

"use strict";

var gulp       = require("gulp"),
    nodemon    = require("gulp-nodemon"),
    concat     = require("gulp-concat"),
    express    = require("express"),
    serverport = 5000,
    server     = express();


gulp.task("serve", function() {
    server.use(express.static(__dirname + "/public"));
    server.listen(serverport);
});

gulp.task("dev", function() {
    nodemon({ script : "./app/app.js", ext : "html js" })
        .on("restart", function() {
            console.log("restarted");
        });
});


gulp.task("default", function() {
    gulp.run("dev");
});
