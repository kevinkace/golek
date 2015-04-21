/*jshint node:true */

"use strict";

var m      = require("mithril"),
    render = require("mithril-node-render"),
    routes = require("../routes");

exports.trolls = [
    function step1(req, res) {
        res.render("index", { content :
            render(
                m("div.container", [
                    m("h2", "menu"),
                    m("ul", routes().map(function(r) {
                        return m("li", [
                            m("a[href=" + r + "]", r)
                        ]);
                    }))
                ])
            )
        });
    }
];
