var React = require('react');
var Brick = require('./brick.react.js');
var ReactGridLayout = require('react-grid-layout');
var StrategoStore = require('./../stores/Stratego');


//var brick = {
//    id: 1,
//    x: 2,
//    y: 3
//};
//var array = [brick, brick, brick];
//var global = 1;

//function addRow(row, rowID){
//        //console.log(rowID);
//        var array =
//         row.map(function(brick, columnID){
//        global = global++;
//        return (<div key={global} _grid={{x:columnID+1, y:rowID+1, w:50, h:50}}>test</div>);
//    });
//}
//
//function addTestRow(id){
//    return <div key={id} _grid={{x:id, y:id, w:50, h:50}}>test{id}</div>
//
//}

var Board = React.createClass({

    render: function(){
        var board = StrategoStore.getBoard();
        var rows = [];
        var brickCounter = 0;
        //for( var rows = 0; rows < board.size; rows++) {
        //    for(var cell = 0; cell < 10; cell++){
        //        items[brickCounter].push();
        //        <div key={brickCounter} _grid={{x:cell+1, y:rows+1, w:50, h:50}}>test</div>
        //        brickCounter++;
        //    }
        //}

        for( var row = 0; row < board.size; row++) {
            for(var col=0; col <board.size; col++){
                var pos = board.getIn([row,col]);
                var checker = pos.get('checker');
                var checkerText = checker ? checker.player + ' ' +checker.name : "";
                console.log("col: " + col + " row: " + row);
                rows.push(<div key={brickCounter++} _grid={{x:col+1, y:row+1, w:50, h:50}}>
                {pos.get('field')} <br/> {checkerText}</div>);
            }
        }

        return (
        <div className="layout" cols={10} rowHeight={50}>
            {rows}
        </div>


        )
    }
});

module.exports = Board;