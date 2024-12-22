import React, { useEffect } from 'react';
import Default from './Default';
import Video from './Video';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  useEffect(() => {
    // Проверяем доступность Telegram Web App API
    const tg = window.Telegram?.WebApp;
    if (tg) {
      // Уведомляем Telegram, что приложение готово
      tg.ready();

      // Выводим данные пользователя из Telegram
      console.log("User data:", tg.initDataUnsafe);
    }
  }, []);

  return (
    // Маршруты
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Default />} />
          <Route path="/video" element={<Video />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
