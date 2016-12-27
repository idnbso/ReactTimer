let React = require('react');
let Clock = require('Clock');

let Timer = React.createClass({

    render: function() {
        return (
            <div>
                <p>Timer.jsx</p>
                <Clock/>
            </div>
        );
    }
});

module.exports = Timer;