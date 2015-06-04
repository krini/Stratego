var board = require('./board');
var checker = require('./checker');
var players = ['Player1','Player2'];

var checkersInGame= {Standard:
            function() {return {Marshal: 1,
                              General: 1,
                              Colonel: 2,
                              Major: 3,
                              Captain: 4,
                              Lieutenant: 4,
                              Sergent: 4,
                              Miner:5,
                              Scout:8,
                              Spy: 1,
                              Bomb: 6,
                              Flag:1}}};


function randomChecker(player,keys, checkers){
    var idx = Math.floor((Math.random() * keys.length));
    var key =keys[idx];
    if(checkers[key] > 0){
        checkers[key] -=1;
        return checker(player)[key]();
    }else{
        keys.splice(idx,1);
       return randomChecker(player,keys,checkers);
    }
}


module.exports = {
    StandardRandomized: function(){
        var gameType ='Standard';
        var newBoard = board[gameType]();

        for(var p=0; p< players.length; p++) {
            var player = players[p];
            var checkers = checkersInGame[gameType]();
            var keys = Object.keys(checkers);

            for (var i = (0 + (6*p)); i < 4 + (6*p); i++) {
                for (var j = 0; j < 10; j++) {
                    pos = newBoard.getIn([i,j]);
                    pos = pos.set('checker', randomChecker(player,keys,checkers))
                    newBoard = newBoard.setIn([i,j], pos);
                }
            }
        }
        return {Board: newBoard, turn: players[0], players: players, state: 'newGame'};
    }
}