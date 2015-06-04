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
        // Positions are immutable records
        var attackingPosition = board.get(from.row).get(from.col);
        var defendingPosition = board.get(to.row).get(to.col);
        if ( defendingPosition.get("checker") == null) { // Attacking an empty position is always a win
            var newAttackingPosition = attackingPosition.set("checker",  null);
            var newDefendingPosition = defendingPosition.set("checker", attackingPosition.checker);
            // update the board with the new positions
            board = board.setIn([from.row,from.col], newAttackingPosition);
            return board.setIn([to.row,to.col], newDefendingPosition);
        }
        if ( attackingPosition.checker.attackRank > defendingPosition.checker.defenceRank ||
            (attackingPosition.checker.specialAttack && attackingPosition.checker.specialAttack(defendingPosition.checker))) {
            // Attacker wins
        }
    }
};