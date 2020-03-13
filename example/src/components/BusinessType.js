import React from 'react';

// this is temporal, backend to fix it from CS to Bloom
const type = {
  CS: 'Bloom'
};

export default function BusinessType({ appTypes }) {
  return (
    appTypes &&
    appTypes.length > 0 && (
      <div style={{ display: 'flex' }}>
        {appTypes.map(app => {
          return (
            <div key={app}>
              <span style={styles.container}>{type[app] || app}</span>
            </div>
          );
        })}
      </div>
    )
  );
}

const styles = {
  container: {
    padding: '4px 20px',
    borderRadius: '3px',
    backgroundColor: 'rgba(9,132,227,0.2)',
    marginRight: 8,
    fontFamily: 'Sofia Pro',
    fontSize: '12px',
    textAlign: 'center',
    color: '#0984E3'
  }
};
