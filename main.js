var game = require('./stores/Stratego/game');
var gameController = require('./stores/Stratego/gameController');


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
                line += "[" + position.get("field").name + ":EMPTY:" + "]";
            }
        }
        console.log(line);
    }
}

function randomCord(){
    return {row: Math.floor((Math.random() * 10)), col: Math.floor((Math.random() * 10))};
}
function randomNext(cord){
    var deltaRow = Math.floor((Math.random() * 3 -1));
    var deltaCol =0;
    if(deltaRow ===0) {
        deltaCol =  Math.floor((Math.random() * 2));
        if(deltaCol === 0){
            deltaCol = -1;
        }
    }
    return {row: cord.row + deltaRow, col: cord.col + deltaCol};
}

var newGame = game.StandardRandomized();
var Moves = [];

printBoard(newGame.get('Board'));
console.log("\n\n");
var iterations = 0;

while(gameController.spoleGame(newGame,Moves).get('State') ==='Playing' && iterations++ <1000 ){
    var from = randomCord();
    var to = randomNext(from);
    var move ={from: from, to:to};
    //console.dir(move);
    if(gameController.moveIsPossible(newGame,Moves, move)){
        iterations =0;
        Moves.push(move);
        var curGame = gameController.spoleGame(newGame,Moves);
        //printBoard(curGame.get('Board'));
    }
}
var curGame = gameController.spoleGame(newGame,Moves);
console.log('State: ' + curGame.get('State'));
console.log('Winner: ' + curGame.get('Winner'));
console.log('Game sequence');
Moves.forEach(function(move){
    console.dir(move);
});
printBoard(curGame.get('Board'));





