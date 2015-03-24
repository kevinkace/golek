/*jshint node:true */

"use strict";

var express     = require("express"),
    app         = express(),
    routes      = require("./routes"),
    server;

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.get("/", require("./controllers/home").trolls);
routes().forEach(function(route) {
    app.get(route, require("./controllers" + route).trolls);
});


server = app.listen(3000, function() {
    var host = server.address().address,
        port = server.address().port;

    console.log("app listening: http://%s:%s", host, port);
});
