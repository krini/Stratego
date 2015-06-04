var React = require('react');


var Frontpage = React.render(
                    <div>hest</div>
);

window.addEventListener("DOMContentLoaded", function () {
    var outer = document.getElementById('app');
    React.render(<Frontpage/>, outer);
});

if (typeof window !== 'undefined') {
    window.React = React;
}
