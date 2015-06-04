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
var globalRow = 0;
var globalBrick = 0;

function addRow(row, rowID){
        console.log(rowID);
        row.map(function(brick, columnID){
        console.log(columnID);
        global++;
        return <div key={global} _grid={{x:columnID+1, y:rowID+1, w:50, h:50}}>test</div>;
    });
}


var Board = React.createClass({

    render: function(){
        var board = StrategoStore.getBoard();
        var bricks = board.map(addRow);
        return (
            <ReactGridLayout className="layout" cols={10} rowHeight={50}>
            {bricks}
            </ReactGridLayout>
        )
    }
});

module.exports = Board;