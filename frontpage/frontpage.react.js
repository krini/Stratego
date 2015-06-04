var React = require('react');


var Frontpage = React.createClass({render: function(){
                   return <div>hest</div>}}
);

window.addEventListener("DOMContentLoaded", function () {
    var outer = document.getElementById('app');
    React.render(<Frontpage/>, outer);
});


