import React, { useRef, useState } from 'react';
import videoFile from './resources/vid.mp4';
import congratulationsFile from './resources/congratulations.png';

import "./counters.css";

const Video = () => {
  const videoRef = useRef(null);
  const [count, setCount] = useState(0);
  const aim = 20;

  // Функция запуска воспроизведения видео
  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(error => {
        console.log('something strange')
      });
    }
    setCount(prev => prev + 1);
  };

  return (
    <div>
      {count < aim ? (
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center', // вертикально по центру
          alignItems: 'center',     // горизонтально по центру
          height: '100vh',          // по высоте занимаем весь экран устройства
          width: '100%',            // используем всю ширину
          textAlign: 'center'
        }}>
          <video
            ref={videoRef}
            src={videoFile}
            width="auto"
            height="70%"
            playsInline
            webkit-playsinline="true"
            controls={false}
            preload="auto"
          />

          <button
            onClick={handlePlay}
            style={{
              padding: '10px 20px',
              fontSize: '18px',
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              marginTop: '20px',
              transition: 'transform 0.2s ease-in-out',
            }}
          >
            Chinazes
          </button>

          <div className="counters">
            <div>Набрано<br /> {count}</div>
            <div>Цель<br /> {aim}</div>
          </div>
        </div>
      ) : (
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center', // вертикально по центру
          alignItems: 'center',     // горизонтально по центру
          height: '100vh',          // по высоте занимаем весь экран устройства
          width: '100%',            // используем всю ширину
          textAlign: 'center'
        }}>
          <img
            src={congratulationsFile}
            alt="Congratulations"
            style={{ width: 'auto', height: '70%' }}
          />
          <p>
            <b>Congratulations!</b>
          </p>

          <button
            style={{
              padding: '10px 20px',
              fontSize: '18px',
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              marginTop: '20px',
              transition: 'transform 0.2s ease-in-out',
            }}
          >
            Go to next level
          </button>
        </div>
      )}
    </div>
  );
};

export default Video;
