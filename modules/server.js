var exports = module.exports = {};

exports.StartServer = function(){
    var serverConfig = require('./serverConfig');
    var router = require('./Router');

    var app = serverConfig.ConfigServer();
    var portConfig = serverConfig.GetPortConfig();

    router.SetRouting(app).listen(portConfig.port,function(){
        console.log("App Server is running at %s",portConfig.port);
    });
};