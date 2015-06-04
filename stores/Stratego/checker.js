
var ManyMoves = 2;

var checkers= function(player) { return {
    Marshal: function(){return {name:'Marshal',movesAllowed:1, attackRank:10, defenceRank:10, player: player}},
    General: function(){return{name:'General',movesAllowed:1, attackRank:9, defenceRank:9, player: player}},
    Colonel: function(){return{name:'Colonel',movesAllowed:1, attackRank:8, defenceRank:8, player: player}},
    Major:   function(){return{name:'Major',movesAllowed:1, attackRank:7, defenceRank:7, player: player}},
    Captain: function(){return{name:'Captain',movesAllowed:1, attackRank:6, defenceRank:6, player: player}},
    Lieutenant: function(){return{name:'Lieutenant',movesAllowed:1, attackRank:5, defenceRank:5, player: player}},
    Sergent: function(){return{name:'Sergent',movesAllowed:1, attackRank:4, defenceRank:4, player: player}},
    Miner: function(){return{name: 'Miner', movesAllowed: 1, attackRank: 3, defenceRank: 3,
        specialAttack: function (checker) {
            return checker.name === 'Bomb';
        }, player: player
    }},
    Scout: function(){return{name:'Scout',movesAllowed:ManyMoves, attackRank:2, defenceRank:2,player: player}} ,
    Spy: function(){return{name:'Spy',movesAllowed:1, attackRank:1, defenceRank:1,
          specialAttack:function(checker){return checker.name === 'Marshal';},player: player
    }},
    Bomb: function(){return{name:'Bomb',movesAllowed:0, attackRank:0, defenceRank:11,player: player}},
    Flag: function(){return{name:'Flag',movesAllowed:0, attackRank:0, defenceRank:0,player: player}}
}};

module.exports = checkers;


