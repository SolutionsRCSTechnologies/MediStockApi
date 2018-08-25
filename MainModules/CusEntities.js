var exports = module.exports = {};

exports.ResponseInstance = function(){
    return {
        status: 200,
        message: "This is default message from api call.",
        data: {},
        hasData: false,
        content_type: {"Content-Type":"application/json"},
        content_type_message: {"Content-Type":"plain/text"}
    };
};