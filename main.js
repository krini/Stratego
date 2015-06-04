var game = require('./stores/Stratego/game');
var boardController = require('./stores/Stratego/boardController');

function printBoard( board ) {
    for( var row = 0; row < board.size; row++) {
        var line = "";
        for( var column = 0; column < board.get(row).size; column++) {
            var position =  board.getIn([row,column]);
            var checker = position.get("checker");
            if ( checker ) {
                line += "[" + checker.player + ":" + checker.name + "]";
            }
            else {
                line += "[EMPTY:" +  position.get("field").name + "]";
            }
        }
        console.log(line);
    }
}
var newGame = game.StandardRandomized();
var theBoard = newGame.Board;
printBoard(theBoard);
console.log("\n\n");
theBoard = boardController.move(theBoard,{row:3,col:0}, {row:4,col:0});
printBoard(theBoard);
