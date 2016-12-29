let React = require('react');
let Clock = require('Clock');

let Timer = React.createClass({

    render: function() {
        return (
            <div>
                <Clock/>
            </div>
        );
    }
});

module.exports = Timer;