/*jshint devel:true, node:true */
"use strict";

var base = {};

function boot() {
    base = require("../classes/base");
    for(var prop in base) {
        exports[prop] = exports[prop] || base[prop];
    }
}

exports.boot = boot;

function createTrick(args) {
    console.log("createTrick trick.js" + JSON.stringify(args));
}

exports.createTrick = createTrick;
