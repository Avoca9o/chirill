import React, { useEffect } from 'react';
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
      
        <Routes>
          <Route path="/" element={<Video />} />
        </Routes>
      
    </Router>
  );
};

export default App;