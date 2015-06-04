module.exports = {
    // Assume that from and to are pairs indicating a position (ex. {row :1, col:2})
    // Assumes that board is an immutable list of lists
    move: function(board, from, to) {
        if ( this.moveIsPossible(board, from, to)) {
            return this.doAttackAndUpdateBoard(board, from, to);
        }
        return board;
    },
    moveIsPossible : function(board, from, to) {
        // Determine if move is possible.
        // Requires:
        //  - From and to are inside the board
        //  - there is a checker in from position
        //  - from and to are on the same row or on the same column
        //  - Distance between the two positions matches checker ability
        //  - all positions between from and two are of type plain
        //  - all positions between from and two are unoccupied by other checkers
        //  - player at from is different from player at to
        var fromIsInsideTheBoard = from.row < board.size && from.col < board.get(from.row).size;
        var toIsInsideTheBoard = to.row < board.size && to.col < board.get(to.row).size;
        var fromPosition = board.get(from.row).get(from.col);
        var toPosition = board.get(to.row).get(to.col);
        var fromChecker = fromPosition.get("checker");
        var thereIsAPieceInTheFromPosition = fromChecker != null;
        var correspondRowOrColumn = from.row == to.row || from.col == to.col;
        var distanceBetweenPositionsIsOk = fromChecker.movesAllowed == 2 || this.getDistance(from, to) <= fromChecker.movesAllowed;
        var pathIsTraversable = this.pathIsTraversable(board, from, to, from.row != to.row);
        var noPlayerOrPlayerIsDifferent = this.noPlayerOrPlayerIsDifferent(fromChecker, toPosition.get("checker"));
        return fromIsInsideTheBoard && toIsInsideTheBoard && thereIsAPieceInTheFromPosition && correspondRowOrColumn &&distanceBetweenPositionsIsOk && pathIsTraversable && noPlayerOrPlayerIsDifferent;
    },
    noPlayerOrPlayerIsDifferent : function(fromChecker,toChecker) {
        if ( fromChecker && toChecker)
            return fromChecker.player != toChecker.player;
        return true;
    },
    getDistance: function(from,to) {
        var rowDistance = Math.abs(to.row - from.row);
        var columnDistance = Math.abs(to.col - from.col);
        return Math.max(rowDistance,columnDistance);

    },
    pathIsTraversable : function(board, from, to, isRowMove) {
        var result = true;
        if ( isRowMove) {
            // Dont include the final row, this is the target position
            for( var row = from.row+1; row <= to.row - 1 && result; row++) {
                var position = board.getIn([row,from.column]);
                result = result && position.get("field").traversable && position.get("checker")== null;
            }
        }
        else {
            // Dont include the final column, this is the target position
            for( var column = from.column+1; column <= to.column - 1 && result; column++) {
                var position = board.getIn([from.row,column]);
                result = result && position.get("field").traversable && position.get("checker")== null;
            }
        }
        return result;
    },
    doAttackAndUpdateBoard : function(board, from, to) {
        // Attack logic is as follows:
        // Positions are immutable records
        var attackingPosition = board.get(from.row).get(from.col);
        var defendingPosition = board.get(to.row).get(to.col);
        if ( this.attackerWins(attackingPosition,defendingPosition)) { // Attacking an empty position is always a win
            var newAttackingPosition = attackingPosition.set("checker",  null);
            var newDefendingPosition = defendingPosition.set("checker", attackingPosition.checker);
            // update the board with the new positions
            board = board.setIn([from.row,from.col], newAttackingPosition);
            return board.setIn([to.row,to.col], newDefendingPosition);
        }
        else if ( this.isATie(attackingPosition,defendingPosition)) {
            var newAttackingPosition = attackingPosition.set("checker",  null);
            var newDefendingPosition = defendingPosition.set("checker", null);
            // update the board with the new positions
            board = board.setIn([from.row,from.col], newAttackingPosition);
            return board.setIn([to.row,to.col], newDefendingPosition);
        }
        else { // remove attacker from map
            var newAttackingPosition = attackingPosition.set("checker",  null);
            return board.setIn([from.row,from.col], newAttackingPosition);
        }
    },
    isATie: function(attackingPosition, defendingPosition) {
        var attackChecker = attackingPosition.get("checker");
        var defenceChecker = defendingPosition.get("checker");
        return
            defenceChecker != null &&
            attackChecker.attackRank == defenceChecker.defenceRank;
    },
    attackerWins : function(attackingPosition, defendingPosition) {
        var attackChecker = attackingPosition.get("checker");
        var defenceChecker = defendingPosition.get("checker");
        return (defenceChecker == null ||
            attackChecker.attackRank > defenceChecker.defenceRank ||
            (attackChecker.specialAttack && attackChecker.specialAttack(defenceChecker)));

    }
};