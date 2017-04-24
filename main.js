var login = require("facebook-chat-api");
var data = require("./data")
// Create simple echo bot
login({email: data.username, password: data.password}, function callback (err, api) {
    if(err) return console.error(err);

    api.listen(function callback(err, message) {
        api.getThreadInfo(data.targetID, function(error, info) {
        	if(err) return console.error(err);
        	console.log(info);
        })
    });

     api.getThreadInfo(data.targetID, function(error, info) {
       	if(err) return console.error(err);
      	console.log(info);
    })
});