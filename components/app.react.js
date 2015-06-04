var React = require('react');
var Board = require('./board.react.js');

var App = React.createClass({

    render: function(){

       return <Board/>;
    }
});

window.addEventListener("DOMContentLoaded", function () {
    var outer = document.getElementById('app');
    React.render(<App/>, outer);
});
