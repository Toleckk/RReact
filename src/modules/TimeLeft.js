import React, {Component} from 'react';

class TimeLeft extends Component {
    static prettyTime(seconds) {
        return [
            Math.floor(seconds / 3600),
            Math.floor((seconds % 3600) / 60),
            seconds % 60
        ].reduce((a, b) => a + ':' + ((b + '').length === 1 ? '0' : '') + b, '').replace(/^:/, '').replace(/^00:/, '');
    }

    render() {
        return (
            <span id={'drinks-in'} className={'time-left'} style={this.props.style}>
                {TimeLeft.prettyTime(this.props.seconds)}
            </span>
        );
    }
}
export default React.memo(TimeLeft);