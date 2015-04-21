/*jshint node:true */
"use strict";

var m      = require("mithril"),
    render = require("mithril-node-render"),
    spots  = require("../utils/spots");

exports.trolls = [
    function f1(req, res, next) {
        res.data = res.data || {};
        res.data.spots = spots.getSpots();
        next();
    },
    function formatTable(req, res, next) {
        var tableHeaders = Object.keys(res.data.spots[0]);
        res.data = res.data || {};
        res.data.table = m("table", [
            m("tr", [
                tableHeaders.map(function(th){
                    return(m("th", th));
                })
            ]),
            res.data.spots.map(function(spot) {
                return m("tr", tableHeaders.map(function(tableHeader){
                    return m("td", spot[tableHeader]);
                }));
            })
        ]);
        // Object.keys(res.data.spots[0]).forEach(function(k) { tableHeaders.push(k); });
        // res.data.headers = tableHeaders;
        next();
    },
    function f2(req, res, next) {
        // res.send("spots" + JSON.stringify(res.data.spots) +
        //          "headers" + res.data.headers.toString());
        res.render("index", {
            content : render(res.data.table)
        });
    }
];
