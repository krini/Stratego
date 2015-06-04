var boardController = require('./boardController');



module.exports = {
    moveIsPossible: function(Game,moves,nextMove){
        var curGame = this.spoleGame(Game,moves);
        //Not the current players checker that is moved.
        if(positionFrom.get('checker') === null || positionFrom.get('checker').player !== curGame.CurrentPlayer){
            return false;
        }
        //Move is not possible;
        return boardController.moveIsPossible(curGame.Board, nextMove.from, nextMove.to);
    },

    spoleGame: function(Game, moves){
        var currentBoard = Game.get('Board');
        moves.forEach(function(move){
            currentBoard = boardController.move(currentBoard,move.from,move.to);
        });
        var numberOfMoves = moves.length;
        var currentPlayer = Game.get('Players')[numberOfMoves % 2];
         var newGame = Game.set('Board', currentBoard);
        newGame = Game.set('CurrentPlayer', currentPlayer);
        return newGame;
    }

};