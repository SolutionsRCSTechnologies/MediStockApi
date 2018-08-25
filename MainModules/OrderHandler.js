//var entities = require('./CusEntities');
var helper = require('../DBModule/DBHelper');
var utility = require('../CommonModule/Utility');

var exports = module.exports = {};

exports.GetOrders = function(){
    var orders = helper.GetOrders();
    var output = null;
    if(orders != null){
        output = utility.SetResponseValue(orders,"",true,200);
    }
    else{
        output = utility.SetResponseValue(null,"No data found. Sorry!",false,200);
    }
    return output;
};

