import React from 'react';
import { Info } from 'lucide-react';

export const Legend = ({ items, title, type = 'categorical' }) => {
  return (
    <div style={{
      position: 'absolute',
      bottom: '20px',
      right: '20px',
      background: 'white',
      borderRadius: '8px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
      padding: '16px',
      minWidth: '200px',
      zIndex: 1000
    }}>
      <div style={{
        fontWeight: 600,
        marginBottom: '12px',
        fontSize: '14px',
        display: 'flex',
        alignItems: 'center',
        gap: '8px'
      }}>
        <Info size={16} />
        {title}
      </div>
      
      <div style={{ fontSize: '13px' }}>
        {type === 'categorical' && items.map((item, idx) => (
          <div 
            key={idx}
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '8px'
            }}
          >
            <div style={{
              width: '20px',
              height: '20px',
              background: item.color,
              borderRadius: '3px',
              marginRight: '10px',
              border: '1px solid #d1d5db'
            }} />
            <span>{item.label}</span>
          </div>
        ))}
        
        {type === 'sequential' && (
          <div>
            <div style={{
              height: '20px',
              background: `linear-gradient(to right, ${items.map(i => i.color).join(', ')})`,
              borderRadius: '3px',
              marginBottom: '8px',
              border: '1px solid #d1d5db'
            }} />
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              fontSize: '11px',
              color: '#6b7280'
            }}>
              <span>{items[0].label}</span>
              <span>{items[items.length - 1].label}</span>
            </div>
          </div>
        )}
        
        {type === 'diverging' && (
          <div>
            <div style={{
              height: '20px',
              background: `linear-gradient(to right, ${items.map(i => i.color).join(', ')})`,
              borderRadius: '3px',
              marginBottom: '8px',
              border: '1px solid #d1d5db'
            }} />
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              fontSize: '11px',
              color: '#6b7280',
              position: 'relative'
            }}>
              <span>{items[0].label}</span>
              <span style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}>
                {items[Math.floor(items.length / 2)].label}
              </span>
              <span>{items[items.length - 1].label}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};