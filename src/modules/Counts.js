import React from 'react';

const Counts = props => {
    const prettyNumber = number =>
        [...(number + '')].reverse().join('').match(/.{1,3}/g).join('.').split('').reverse().join('');

    return <span className={'counts'} style={props.style}>{prettyNumber(props.count) + ' ' + props.what}</span>;
};

export default Counts;