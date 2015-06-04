var React = require('react');
var Brick = require('./brick.react.js');
var ReactGridLayout = require('react-grid-layout');
var StrategoStore = require('./../stores/Stratego');

var brick = {
    id: 1,
    x: 2,
    y: 3
};
var array = [brick, brick, brick];
var global = 0;

function addRow(row){
    if(global < 2){
        var rowIndex = row.index;
        console.log('row:'+rowIndex);
        row.map(function(brick){
        var brickIndex = brick.index;
        console.log('brick:'+brickIndex);
        global++;
        return <div key={global} _grid={{x:brickIndex, y:rowIndex, w:50, h:50}}>test</div>;
    })}
}


var Board = React.createClass({

    render: function(){
        var board = StrategoStore.getBoard();
        return (
            <ReactGridLayout className="layout" cols={10} rowHeight={50}>
            {board.map(addRow)}
            </ReactGridLayout>
        )
    }
});

module.exports = Board;