import React from 'react'
import styles from './Clock.module.scss'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class Clock extends React.Component {
    
    constructor(props) {
        super(props);
        const datetime = this.getTime();
        this.state = {
          date: datetime.date,
          time: datetime.time,
          tz: datetime.tz,
        };
    }
    componentDidMount() {
        this.intervalID = setInterval(
            () => this.updateTime(),
            1000
        );
    }
    componentWillUnmount() {
        clearInterval(this.intervalID);
    }
    getTime() {
        const week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
        const d = new Date();
        const day = week[d.getDay()];
        const mm = d.getMonth() + 1;
        const dd = d.getDate();
        const yy = d.getFullYear();

        const date = day + ' ' + dd + '-' + mm + '-' + yy
        const time = d.toLocaleTimeString()
        
        const tz = this.getTimezoneName(d)

        return {date: date, time: time, tz: tz}
    }
    updateTime() {
        const datetime = this.getTime();
        this.setState({
            date: datetime.date,
            time: datetime.time,
            tz: datetime.tz,
        });
    }
    getTimezoneName(today) {
        const short = today.toLocaleDateString(undefined);
        const full = today.toLocaleDateString(undefined, { timeZoneName: 'long' });
      
        // Trying to remove date from the string in a locale-agnostic way
        const shortIndex = full.indexOf(short);
        if (shortIndex >= 0) {
          const trimmed = full.substring(0, shortIndex) + full.substring(shortIndex + short.length);
          
          // by this time `trimmed` should be the timezone's name with some punctuation -
          // trim it from both sides
          return trimmed.replace(/^[\s,.\-:;]+|[\s,.\-:;]+$/g, '');
      
        } else {
          // in some magic case when short representation of date is not present in the long one, just return the long one as a fallback, since it should contain the timezone's name
          return full;
        }
    }
    render() {
        return (
            <div className={styles.clock}>
                <FontAwesomeIcon icon={faGlobe} className={styles.icon_globe}></FontAwesomeIcon>
                <div className={styles.date}>{ this.state.date }</div>
                <div className={styles.time}>{ this.state.time }</div>
                <div className={styles.text}>{ this.state.tz }</div>
            </div>
        );
    }
}