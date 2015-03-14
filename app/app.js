/*jshint node:true */

"use strict";

var express     = require("express"),
    app         = express(),
    server;


app.get("/",          require("./controllers/home").trolls);
app.get("/spots",     require("./controllers/spots").trolls);
app.get("/tricks",    require("./controllers/tricks").trolls);
app.get("/lines",     require("./controllers/lines").trolls);
app.get("/add/spot",  require("./controllers/add/spot").trolls);
app.get("/add/trick", require("./controllers/add/trick").trolls);


server = app.listen(3000, function() {
    var host = server.address().address,
        port = server.address().port;

    console.log("app listening: http://%s:%s", host, port);
});
