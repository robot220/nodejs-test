const app = require("./settings/main");
const config = require("./settings/config");

config.loadSettings();

var server = app.listen(app.get('port'), function() {
    console.log('Express server listening on port ' + server.address().port);
});