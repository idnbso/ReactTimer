let React = require('react');
let Clock = require('Clock');

let Countdown = React.createClass({

    render: function() {
        return (
            <div>
                <p>Countdown.jsx</p>
                <Clock totalSeconds={129}/>
            </div>
        );
    }
});

module.exports = Countdown;