module.exports = {
    // Assume that from and to are pairs indicating a position (ex. {row :1, col:2})
    // Assumes that board is an immutable list of lists
    move: function(board, from, to) {
    if ( moveIsPossible(board, from, to)) {
        return doAttackAndUpdateBoard(from, to);
    }
    },
    moveIsPossible : function(board, from, to) {
        // Determine if move is possible.
        // Requires:
        //  - there is a checker in from position
        //  - from and to are on the same row or on the same column
        //  - all positions between from and two are of type plain
        //  - all positions between from and two are unoccupied by other checkers
        //  - player at from is different from player at to

    },
    doAttackAndUpdateBoard : function(board, from, to) {
        // Attack logic is as follows:
        var attackingPosition = board[from.row][from.col];
        var defendingPosition = board[to.row][to.col];
        if ( defendingPosition.checker == null) { // Attacking an empty position is always a win
            defendingPosition.checker = attackingPosition.checker;
            attackingPosition.checker =  null;
            return board;
        }
        if ( attackingPosition.checker.attackRank > defendingPosition.checker.defenceRank ||
            (attackingPosition.checker.specialAttack && attackingPosition.checker.specialAttack(defendingPosition.checker))) {
            // Attacker wins
        }
    }
};