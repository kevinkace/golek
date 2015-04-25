/*jshint devel:true, node:true */
"use strict";

var trick = require("./classes/trick"),
    argv  = require("minimist")(process.argv.slice(2)),
    t1;

trick.boot();

console.dir(argv);

if(argv.name) {
    t1 = trick.createTrick( { name : argv.name } );
}

trick.saveData();
