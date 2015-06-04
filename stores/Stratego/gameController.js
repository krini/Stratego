var boardController = require('./boardController');

function gameState(Game){
    var nextGame = Game;
    var allCheckers = Game.Board.reduce(function(cola, colb){
        return cola.concat(colb);
    }).map(function(position){
        return position.checker;
    });

    var flagsPlayer1 = allCheckers.filter(function(checker){
        return checker.player === Game.get('Players')[0] &&
            checker.name === 'Flag';
    });

    var flagsPlayer2 = allCheckers.filter(function(checker){
        return checker.player === Game.get('Players')[1] &&
            checker.name === 'Flag';
    });
    if(flagsPlayer1.size === 0){
        nextGame = nextGame.set('State','Finished');
        nextGame = nextGame.set('Winner',Game.get('Players')[1]);
    }
    if(flagsPlayer2.size === 0){
        nextGame = nextGame.set('State','Finished');
        nextGame = nextGame.set('Winner',Game.get('Players')[0]);
    }
    return nextGame;
}

module.exports = {
    moveIsPossible: function(Game,moves,nextMove){
        var curGame = this.spoleGame(Game,moves);

        if(curGame.get('State') !== 'Playing'){
            return false;
        }
        var positionFrom = curGame.get('Board').getIn([nextMove.from.row, nexMove.from.col]);
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
        return gameState(newGame);
    }


};