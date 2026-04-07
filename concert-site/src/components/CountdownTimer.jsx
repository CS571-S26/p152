import { useState, useEffect, Fragment } from 'react';
import './CountdownTimer.css';

function getTimeLeft(target) {
  const diff = target - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days:    Math.floor(diff / 86400000),
    hours:   Math.floor((diff % 86400000) / 3600000),
    minutes: Math.floor((diff % 3600000) / 60000),
    seconds: Math.floor((diff % 60000) / 1000),
  };
}

export default function CountdownTimer({ targetDate }) {
  const [time, setTime] = useState(() => getTimeLeft(targetDate));

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft(targetDate)), 1000);
    return () => clearInterval(id);
  }, [targetDate]);

  const units = [
    { value: time.days,    label: 'Days' },
    { value: time.hours,   label: 'Hours' },
    { value: time.minutes, label: 'Min' },
    { value: time.seconds, label: 'Sec' },
  ];

  return (
    <div className="countdown">
      {units.map((u, i) => (
        <Fragment key={u.label}>
          <div className="countdown-unit">
            <span className="countdown-value">{String(u.value).padStart(2, '0')}</span>
            <span className="countdown-label">{u.label}</span>
          </div>
          {i < units.length - 1 && <span className="countdown-sep">:</span>}
        </Fragment>
      ))}
    </div>
  );
}
