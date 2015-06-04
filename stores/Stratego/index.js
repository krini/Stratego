var EventEmitter = require('events').EventEmitter;
var Dispatcher = require('./../../Dispatcher');

var GAME_CHANGED = "GAME_CHANGED";

var Turn = null;
var Board  = null;

var StrategoStore = assign({},EventEmitter.prototype,{

    addGameChangeListener: function(cb){
        this.on(GAME_CHANGED, cb);
    },

    removeGameChangeListener: function(cb){
        this.removeListener(GAME_CHANGED, cb);
    },

    emitGameChanged: function(){
        this.emit(GAME_CHANGED);
    },
    getGameState: function(){

    },
    getBoard: function(){
       return new [];
    }

});

StrategoStore.dispatchToken = Dispatcher.register(function(action){
    switch (action.type) {
        default:
        break;
    }
});

module.exports = StrategoStore;