import './style.scss';
import React, {useEffect, useState} from 'react';
import moment from "moment";

const TimeLeft = ({style, finishAt, onFinish}) => {
    const [time, setTime] = useState(finishAt - new Date());

    useEffect(() => {
        if(finishAt > new Date().getTime()){
            const timeout = setTimeout(() => setTime(finishAt - new Date()), 100);
            return () => clearTimeout(timeout);
        } else
            onFinish && onFinish();
    });

    const duration = moment.duration(time, 'milliseconds');
    const minutes = duration.minutes().toString();
    const seconds = duration.seconds().toString();
    const result = (minutes.length === 1 ? '0' : '') + minutes + ':' + (seconds.length === 1 ? '0' : '') + seconds;

    return <span className={'time-left'} style={style}>
        {(minutes > 0 || seconds > 0) && result}
        </span>
};

export default React.memo(TimeLeft);