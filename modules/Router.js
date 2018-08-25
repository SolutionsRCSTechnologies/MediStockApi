
var entities = require('../MainModules/CusEntities');
var ordHandler = require('../MainModules/OrderHandler');
var utilities = require('../CommonModule/Utility');

var exports = module.exports = {};

exports.SetRouting = function(app){
    app.get('/',function(req,res){
        var resData = entities.ResponseInstance();
        var response = utilities.CreateResponseObj(res,resData);
        if(response != null)
        {
            response.end();
        }
        else{
            res.end();
        }
    });
    app.get('/orders',function(req,res){
        var resData = ordHandler.GetOrders();
        var response = utilities.CreateResponseObj(res,resData);
        if(response != null)
        {
            response.end();
        }
        else{
            res.end();
        }
    });
    return app;
};
