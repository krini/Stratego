var React = require('react');



React.render(
<div>hest</div>

);

window.addEventListener("DOMContentLoaded", function () {
    var outer = document.getElementById('app');
    React.render(<Frontpage/>, outer);
});
