var React = var require('react');
var Frontpage = var require('./frontpage/frontpage.react')

window.addEventListener("DOMContentLoaded", function () {
    var outer = document.getElementById('app');
    React.render(<Frontpage/>, outer);
});