var React = require('react');


var Brick = React.createClass({

    render: function(){

        return <img src={this.props.imageURL} />
    }
});

module.exports = Brick;