let React = require('react');

let CountdownForm = React.createClass({
    onSubmit: function(e) {
        e.preventDefault();

        let strSeconds = this.refs.seconds.value;

        if (strSeconds.match(/^[0-9]*$/)) {
            this.refs.seconds.value = '';
            this.props.onSetCountdown(parseInt(strSeconds, 10));
        }
    },

    render: function() {
        return (
            <div>
                <form ref="form" onSubmit={this.onSubmit} className="countdown-form">
                    <input className="text-center" type="text" ref="seconds"
                           placeholder="Enter time in seconds"/>
                    <button className="button expanded">Start</button>
                </form>
            </div>
        );
    }
});

module.exports = CountdownForm;