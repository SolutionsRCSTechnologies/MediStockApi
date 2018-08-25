var entities = require('../MainModules/CusEntities');

var exports = module.exports = {};

exports.SetResponseValue = function (data,message,hasData,status){
    var output = entities.ResponseInstance();
    if(hasData){
        output.data = JSON.stringify(data);
        output.status = status;
        output.hasData = true;
    }
    else {
        output.message = JSON.stringify(message);
        output.hasData = false;
        output.status = status;
    }
    return output;
};


exports.CreateResponseObj = function(res,output){
    if(res != null){
        if(output != null){
            //res.status(output.status);
            if(output.hasData){
                res.writeHead(output.status, output.content_type);
                res.write(output.data);
            }
            else{
                res.writeHead(output.status, output.content_type_message);
                res.write(output.message);
            }
        }
        else{
            //res.status(404);
            res.writeHead(404,{"Content-Type":"plain/text"});
            res.write("No data found for API response.");
        }
    }
    return res;
};