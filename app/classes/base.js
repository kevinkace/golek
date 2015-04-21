/*jshint devel:true, node:true */
"use strict";

var _ = require("lodash");

function saveData() {
    console.log("saveData base");
}

function getData() {
    console.log("getData base");
}

function create(args) {

    var defaults = {
        id : ""
    };

    _.merge(defaults, args);

    console.log("create base" + defaults.id);
}

exports.saveData = saveData;
exports.getData  = getData;
exports.create   = create;
