var app = require("./main");

module.exports = {
    loadSettings: function(){
        app.set('port', process.env.PORT || 8000);
    }
};