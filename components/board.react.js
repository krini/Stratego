var React = require('react');
var Brick = require('./brick.react.js');
var ReactGridLayout = require('react-grid-layout');



var Board = React.createClass({

    render: function(){

        return (
            <ReactGridLayout className="layout" cols={10} rowHeight={30}>
        <div key={1}><Brick imageURL='/bomb.png'/></div>
        <div key={2}>2</div>
        <div key={3}>3</div>
        </ReactGridLayout>
        )
    }
});

module.exports = Board;