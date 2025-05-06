const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Каталог шаблонів
app.set('views', path.join(__dirname, 'views'));

// Реєстрація двох шаблонізаторів
app.engine('pug', require('pug').__express);
app.engine('ejs', require('ejs').__express);

// PUG за замовчуванням
app.set('view engine', 'pug');

// Статика
app.use(express.static(path.join(__dirname, 'public')));

// Маршрути
const userRoutes = require('./routes/users');
const articleRoutes = require('./routes/articles');

app.use('/users', userRoutes);
app.use('/articles', articleRoutes);

// 404
app.use((req, res) => {
  res.status(404).send('Сторінку не знайдено');
});

app.listen(PORT, () => {
  console.log(`Сервер працює: http://localhost:${PORT}`);
});
