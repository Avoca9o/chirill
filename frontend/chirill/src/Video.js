import ReactPlayer from 'react-player';
import { useState } from 'react';
import videoFile from './resources/vid.mp4';

const Video = () => {
    const [playing, setPlaying] = useState(false); // Управление воспроизведением видео

    return (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            height: '100vh', // Задаем всю высоту экрана
            backgroundColor: '#f4f4f4', // Фон для наглядности
            textAlign: 'center',
          }}
        >
          {/* Кнопка "Click" для запуска видео */}
          {!playing && (
            <button
              onClick={() => setPlaying(true)} // Активируем воспроизведение
              style={{
                padding: '10px 20px',
                fontSize: '18px',
                backgroundColor: '#007bff',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                marginBottom: '20px',
              }}
            >
              Click
            </button>
          )}
    
          {/* Видео отображается только при срабатывании состояния */}
          {playing && (
            <ReactPlayer
              url={videoFile} // Укажите свой путь к видео
              controls={true} // Показываем элементы управления
              playing={true}
              width="640px" // Ширина видео
              height="360px" // Высота видео
            />
          )}
        </div>
      );
};

export default Video;