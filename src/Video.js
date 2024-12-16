import ReactPlayer from 'react-player';
import { useRef } from 'react';
import videoFile from './resources/vid.mp4';

const Video = () => {
    const playerRef = useRef(null);

    // Функция для воспроизведения видео
  const handlePlay = () => {
    if (playerRef.current) {
      playerRef.current.seekTo(0); // Перематываем видео на начало
      playerRef.current.getInternalPlayer().play(); // Воспроизводим видео
    }
  };

    return (
        <div
      style={{
        display: 'flex',
        flexDirection: 'column', // Вертикальное выравнивание
        alignItems: 'center', // Центрируем содержимое по горизонтали
        justifyContent: 'center', // Центрируем содержимое по вертикали
        height: '100vh',
        backgroundColor: '#f4f4f4',
      }}
    >
      {/* Видео */}
      <ReactPlayer
        ref={playerRef} // Подключаем реф к плееру
        url={videoFile} // Видео URL
        controls={false} // Показываем элементы управления
        playing={false} // Видео не воспроизводится автоматически
        width="640px" // Ширина
        height="360px" // Высота
      />

      {/* Кнопка воспроизведения */}
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
        Click
      </button>
    </div>
      );
};

export default Video;