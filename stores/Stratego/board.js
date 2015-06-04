var field = require('./field');
var Immutable = require('immutable');

function newField(row,col){
    if(row === 4 || row === 5){
        if(col === 2 || col === 3 || col === 6 || col === 7){
            return position.Water();
        }
    }
    return field.Plain();
}
var PositionRecord = Immutable.Record({
    field: null,
    checker: null
});

var boards ={
    StandardBoard: function(){
        var rows = new Immutable.List();
        for(var row=0; row<10; row++){
            var row = new Immutable.List();

            for(var col=0; col<10;col++){
                row = row.push(new PositionRecord({field: newField(row,col), checker: null}));
            }
            rows = rows.push(row);
        }
        return rows;
    }
};

module.exports = boards;