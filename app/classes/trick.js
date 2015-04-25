/*jshint devel:true, node:true */
"use strict";

var _      = require("lodash"),

    base   = {},
    tricks = [{
        name : "ollie"
    }, {
        name : "kickflip",
        feature : "flat"
    }, {
        name : "heelflip"
    }, {
        name : "shuvit"
    }, {
        name : "360 shuvit"
    }, {
        name : "50-50",
        feature : "rail"
    }, {
        name : "5-0",
        feature : "rail"
    }, {
        name : "boardslide",
        feature : "rail"
    }, {
        name : "lipslide",
        feature : "rail"
    }],
    features = [
        "flat",
        "curb",
        "ledge",
        "manny pad",
        "handrail",
        "flatbar",
        "downbar",
        "quarter pipe",
        "bank"
    ],
    _trick = {
        name    : "ollie",
        feature : "flat",
        stance  : "regular"
    };

function boot() {
    base = require("./base");
    for(var prop in base) {
        exports[prop] = exports[prop] || base[prop];
    }
}

exports.boot = boot;

function createTrick(args) {
    var trick = {};

    if(_.find(tricks, { name: args.name })) {
        _.assign(trick, _trick, _.find(tricks, { name: args.name }));
    } else {
        trick = false;
    }

    return trick;
}

function addTrick(args) {
    var status = false;
    if(tricks.indexOf(args.name) === -1) {
        tricks.push(args.name);
        status = true;
    } else {
        console.log("trick not added, already exists");
    }
    return status;
}

exports.createTrick = createTrick;
exports.addTrick    = addTrick;
