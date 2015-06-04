var React = require('react');

var App = React.createClass({

    render: function(){

       return <div> test</div>;
    }
});

window.addEventListener("DOMContentLoaded", function () {
    var outer = document.getElementById('app');
    React.render(<App/>, outer);
});
