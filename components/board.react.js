var React = require('react');
var Brick = require('./brick.react.js');
var ReactGridLayout = require('react-grid-layout');

var brick = {
    id: 1,
    x: 2,
    y: 3
};
var array = [brick, brick, brick];

function addBrick(brick){
        return <div key={brick.id} _grid={{x:brick.x, y:brick.y, w:50, h:50}}>test</div>
}


var Board = React.createClass({

    render: function(){
        var bricks = array.map(addBrick);
        return (
            <ReactGridLayout className="layout" cols={10} rowHeight={50}>
            {bricks}
            </ReactGridLayout>
        )
    }
});

module.exports = Board;