/*jshint node:true */
"use strict";

var fs    = require("fs"),
    spots = JSON.parse(fs.readFileSync("./data/spots.json"));

function _getSpots() {
    return spots;
};


module.exports.getSpots = _getSpots;