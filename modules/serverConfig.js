//var app = require('express')();
var bodyParser = require('body-parser');
var exports = module.exports = {};
exports.ConfigServer = function (){
    var app = require('express')();
    app.use(function(req,res,next){
        //Allow CORS
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.header("Access-Control-Allow-Methods", "GET,POST,DELETE,PUT");
        next();
    });

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    return app;
};

exports.GetPortConfig = function(){
    return {
        port: 3001,
        host_name: "api.medistocks.com"
    };
};
