import React, { useState, useEffect } from 'react';
import { Radio } from 'antd';

const Clock = () => {
  const [timeData, setTimeData] = useState(null);
  const [viewMode, setViewMode] = useState('short'); 
  const [loading, setLoading] = useState(true);


  const fetchTime = async () => {
    try {
      const response = await fetch('http://worldtimeapi.org/api/timezone/Europe/Kyiv');
      const data = await response.json();
      setTimeData(data);
      setLoading(false);
    } catch (error) {
      console.error('Error:', error);
    }
  };

 
  useEffect(() => {
    fetchTime();
    const interval = setInterval(() => {
      fetchTime();
    }, 1000); 

    return () => clearInterval(interval); 
  }, []);

  if (loading) {
    return <div>Downlaoding...</div>;
  }


  const renderTime = () => {
    const dateTime = new Date(timeData.datetime);
    if (viewMode === 'short') {
      return dateTime.toLocaleTimeString(); 
    } else {
      return dateTime.toLocaleString(); 
    }
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Current time in Kyiv</h1>
      <p style={{ fontSize: '45px' }}>{renderTime()}</p>

      <Radio.Group 
        value={viewMode} 
        onChange={(e) => setViewMode(e.target.value)} 
        style={{ marginBottom: '20px' }}
      >
        <Radio.Button value="short">Short mode</Radio.Button>
        <Radio.Button value="long">Advanced mode</Radio.Button>
      </Radio.Group>
    </div>
  );
};

export default Clock;
