import React, { useState, useEffect, useRef } from 'react';
import { Clock } from 'lucide-react';

export const TimeSlider = ({ dates, currentDate, onDateChange }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const intervalRef = useRef(null);
  
  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        const currentIndex = dates.indexOf(currentDate);
        const nextIndex = (currentIndex + 1) % dates.length;
        onDateChange(dates[nextIndex]);
      }, 1000);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPlaying, currentDate, dates, onDateChange]);
  
  const currentIndex = dates.indexOf(currentDate);
  
  return (
    <div style={{
      position: 'absolute',
      bottom: '20px',
      left: '20px',
      background: 'white',
      borderRadius: '8px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
      padding: '16px',
      minWidth: '320px',
      zIndex: 1000
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        marginBottom: '12px'
      }}>
        <Clock size={18} />
        <span style={{ fontWeight: 600, fontSize: '14px' }}>
          {currentDate}
        </span>
      </div>
      
      <div style={{ marginBottom: '12px' }}>
        <input
          type="range"
          min={0}
          max={dates.length - 1}
          value={currentIndex}
          onChange={(e) => onDateChange(dates[parseInt(e.target.value)])}
          style={{ width: '100%' }}
        />
      </div>
      
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          style={{
            padding: '6px 16px',
            background: isPlaying ? '#ef4444' : '#3b82f6',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '13px',
            fontWeight: 500
          }}
        >
          {isPlaying ? 'Pause' : 'Play'}
        </button>
        
        <div style={{ fontSize: '11px', color: '#6b7280' }}>
          {currentIndex + 1} / {dates.length}
        </div>
      </div>
    </div>
  );
};