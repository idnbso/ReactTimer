let React = require('react');
let Clock = require('Clock');
let Controls = require('Controls');

let Timer = React.createClass({
    getInitialState: function() {
        return {
            count: 0,
            timerStatus: 'stopped'
        };
    },
    componentDidUpdate: function(prevProps, prevState) {
        if (this.state.timerStatus !== prevState.timerStatus) {
            switch (this.state.timerStatus) {
                case 'started':
                    this.startTimer();
                    break;
                case 'stopped':
                    this.setState({count: 0});
                case 'paused':
                    clearInterval(this.timer);
                    this.timer = undefined;
                    break;
            }
        }
    },
    componentWillUnmount: function() {
        clearInterval(this.timer);
        this.timer = undefined;
    },
    startTimer: function() {
        this.timer = setInterval(() => {
            let newCount = this.state.count + 1;
            this.setState({
                count: newCount >= 0 ? newCount : 0
            });
            if (newCount === 0) {
                this.setState({timerStatus: 'stopped'});
            }
        }, 1000);
    },
    handleStatusChange: function(newStatus) {
        this.setState({timerStatus: newStatus});
    },
    render: function() {
        let {count, timerStatus} = this.state;

        return (
            <div>
                <h2 className="page-title">Timer App</h2>
                <Clock totalSeconds={count}/>
                <Controls countdownStatus={timerStatus} onStatusChange={this.handleStatusChange}/>
            </div>
        );
    }
});

module.exports = Timer;