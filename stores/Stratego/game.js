var board = require('./board');
var

var checkers= {Standard: {Marshal: 1,
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
                              Flag:1}};

module.exports = {

    randomized: function(){
        var gameType ='Standard';
        var board = board[gameType];

    }
}