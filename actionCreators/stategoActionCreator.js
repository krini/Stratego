var ActionTypes = require('./actions');
var Dispatcher = require('./../Dispatcher');

var ActionCreator = {

    move: function (fromRow, fromCol, toRow, toCol) {
        Dispatcher.dispatch({
            type: ActionTypes.Move,
            move:{
            from: {row:fromRow, col: fromCol},
            to: {row: toRow, col: toCol}}
        });
    }
};

module.exports = ActionCreator;


