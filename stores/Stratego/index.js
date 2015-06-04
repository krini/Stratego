var EventEmitter = require('events').EventEmitter;
var Dispatcher = require('./../../Dispatcher');
var game = require('./game');
var gameController = require('./gameController');
var GAME_CHANGED = "GAME_CHANGED";
var assign = require('object-assign');
var ActionTypes = require('../../actionCreators/actions');
var Game = null;

var Moves =[];
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
       if(Game === null){
           Game = game.StandardRandomized();
       }
        var currentGame = gameController.spoleGame(Game, Moves);
        return currentGame.Board;
    }

});

StrategoStore.dispatchToken = Dispatcher.register(function(action){
    switch (action.type) {
        case ActionTypes.Move:
            if(gameController.moveIsPossible(Game,Moves,action.move)){
                Moves.push(action.move);
            }
            StrategoStore.emitGameChanged();
            break;
        default:
        break;
    }
});

module.exports = StrategoStore;