var field = require('./field');


function newField(row,col){
    if(row === 4 || row === 5){
        if(col === 2 || col === 3 || col === 6 || col === 7){
            return position.Water();
        }
    }
    return field.Plain();
}

var boards ={standardBoard: function(){
    var rows = [];
    for(var row=0; row<10; row++){
        var row =[];
        rows.push(row);
        for(var col=0; col<10;col++){
            row.push({field: newField(row,col), checker: null});
        }
    }
  }
};

module.exports = boards;