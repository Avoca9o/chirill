import ReactPlayer from 'react-player';
import { useRef } from 'react';
import { useState } from 'react';
import videoFile from './resources/vid.mp4';
import congratulationsFile from './resources/congratulations.png';
import victorySound from './resources/vicotry_sound.mp3'
import "./counters.css"

const Video = () => {
    const playerRef = useRef(null);
    const [count, setCount] = useState(0);
    const aim = 20;
    const audio = new Audio(victorySound);

    function playSound() {
      audio.play();
    }

    // Функция для воспроизведения видео
  const handlePlay = () => {
    if (playerRef.current) {
      if (count + 2 < aim) {
        playerRef.current.seekTo(0); // Перематываем видео на начало
        playerRef.current.getInternalPlayer().play(); // Воспроизводим видео
      }
      setCount(count + 1); // обновляем счетчик
      if (count >= aim) {
        playSound();
      }
    }
  };

  const renderMessage = () => {
    if (count < aim ) {
          return <div
          style={{
            display: 'flex',
            flexDirection: 'column', // Вертикальное выравнивание
            alignItems: 'center', // Центрируем содержимое по горизонтали
            justifyContent: 'center', // Центрируем содержимое по вертикали
            height: '100vh',
            backgroundColor: '#f4f4f4',
          }}>

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
            }}>
            Chinazes
         </button>

          <div class="container">
            <div class="block">Набрано <br></br> {count}</div>
            <div class="block">Цель <br></br> {aim}</div>
          </div>

      </div>;

    } else {
         return <div
        style={{ textAlign: 'center', margin: '20px' }}>

          <img 
            src={congratulationsFile}
            style={{ width: '300px', height: 'auto' }} 
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
            }}>
            Go to next level
         </button>

        </div>;
    }
  };

    return (
        <div>
          {renderMessage()}
        </div>
      );
};

export default Video;