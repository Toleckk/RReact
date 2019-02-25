import './style.scss';
import React, {useMemo} from 'react';

const Counts = React.memo(({style, count, currency}) => {
    const prettyNumber = number =>
        [...(number + '')].reverse().join('').match(/.{1,3}/g).join('.').split('').reverse().join('');

    const num = useMemo(() => prettyNumber(count), [count]);

    return <span className={'counts'} style={style}>{num + ' ' + (currency ? currency : '')}</span>;
});

export default Counts;