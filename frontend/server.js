const https = require('https');
const fs = require('fs');
const path = require('path');
const express = require('express');

const app = express();

// Указываем путь к статическим файлам React-приложения
app.use(express.static(path.join(__dirname, 'build')));

// Обработка всех запросов
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Загружаем SSL-сертификаты
const options = {
  key: fs.readFileSync('/etc/letsencrypt/live/tg.chirill-game.ru/privkey.pem'), // Путь к приватному ключу
  cert: fs.readFileSync('/etc/letsencrypt/live/tg.chirill-game.ru/fullchain.pem'), // Путь к сертификату
};

// Создаем HTTPS-сервер
const port = 3000;
https.createServer(options, app).listen(port, '0.0.0.0', () => {
  console.log(`HTTPS сервер запущен на https://0.0.0.0:${port}`);
});
