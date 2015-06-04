var EventEmitter = require('events').EventEmitter;
var Dispatcher = require('./../../Dispatcher');
var game = require('./game');
var GAME_CHANGED = "GAME_CHANGED";
var assign = require('object-assign');

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
       if(Board === null){
           Board = game.StandardRandomized();
       }
        return Board;
    }

});

StrategoStore.dispatchToken = Dispatcher.register(function(action){
    switch (action.type) {
        default:
        break;
    }
});

module.exports = StrategoStore;