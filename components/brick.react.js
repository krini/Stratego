var React = require('react');


var Brick = React.createClass({

    render: function(){
        var styles = {
            content:{
                borderStyle: 'solid',
                borderWidth: 1
            }
        };
        return(<img src={this.props.imageURL} />)
    }
});

module.exports = Brick;