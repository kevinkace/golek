/*jshint devel:true, node:true */
"use strict";

var trick = require("../classes/trick");

trick.boot();


trick.createTrick({name:"kickflip"});
trick.saveData();
