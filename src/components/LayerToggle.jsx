import React, { useState } from 'react';
import { Layers, ChevronDown } from 'lucide-react';

export const LayerToggle = ({ layers, onLayerChange }) => {
  const [expanded, setExpanded] = useState(true);
  
  return (
    <div style={{
      position: 'absolute',
      top: '20px',
      right: '20px',
      background: 'white',
      borderRadius: '8px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
      minWidth: '220px',
      zIndex: 1000
    }}>
      <div 
        onClick={() => setExpanded(!expanded)}
        style={{
          padding: '12px 16px',
          borderBottom: expanded ? '1px solid #e5e7eb' : 'none',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          fontWeight: 600
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Layers size={18} />
          <span>Layers</span>
        </div>
        <ChevronDown 
          size={18} 
          style={{ 
            transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.2s'
          }} 
        />
      </div>
      
      {expanded && (
        <div style={{ padding: '8px' }}>
          {layers.map((layer, idx) => (
            <label 
              key={idx}
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '8px',
                cursor: 'pointer',
                borderRadius: '4px',
                transition: 'background 0.2s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = '#f3f4f6'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
            >
              <input
                type="checkbox"
                checked={layer.visible}
                onChange={(e) => onLayerChange(idx, e.target.checked)}
                style={{ marginRight: '8px' }}
              />
              <div style={{
                width: '16px',
                height: '16px',
                background: layer.color,
                borderRadius: '2px',
                marginRight: '8px',
                border: '1px solid #d1d5db'
              }} />
              <span style={{ fontSize: '14px' }}>{layer.name}</span>
              <span style={{ 
                marginLeft: 'auto', 
                fontSize: '11px', 
                color: '#6b7280',
                fontWeight: 500 
              }}>
                {layer.opacity}%
              </span>
            </label>
          ))}
        </div>
      )}
    </div>
  );
};