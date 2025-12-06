import React, { useState } from 'react';
import { Image } from 'lucide-react';

export const BasemapSwitcher = ({ basemaps, currentBasemap, onBasemapChange }) => {
  const [expanded, setExpanded] = useState(false);
  
  return (
    <div style={{
      position: 'absolute',
      top: '20px',
      left: '20px',
      zIndex: 1000
    }}>
      <button
        onClick={() => setExpanded(!expanded)}
        style={{
          padding: '10px',
          background: 'white',
          border: 'none',
          borderRadius: '8px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}
      >
        <Image size={18} />
        <span style={{ fontSize: '14px', fontWeight: 500 }}>
          {currentBasemap.name}
        </span>
      </button>
      
      {expanded && (
        <div style={{
          marginTop: '8px',
          background: 'white',
          borderRadius: '8px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
          overflow: 'hidden'
        }}>
          {basemaps.map((basemap, idx) => (
            <div
              key={idx}
              onClick={() => {
                onBasemapChange(basemap);
                setExpanded(false);
              }}
              style={{
                padding: '12px 16px',
                cursor: 'pointer',
                background: currentBasemap.id === basemap.id ? '#f3f4f6' : 'white',
                borderBottom: idx < basemaps.length - 1 ? '1px solid #e5e7eb' : 'none',
                fontSize: '14px',
                transition: 'background 0.2s'
              }}
              onMouseEnter={(e) => {
                if (currentBasemap.id !== basemap.id) {
                  e.currentTarget.style.background = '#f9fafb';
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 
                  currentBasemap.id === basemap.id ? '#f3f4f6' : 'white';
              }}
            >
              {basemap.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};