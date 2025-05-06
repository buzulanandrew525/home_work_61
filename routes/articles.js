const express = require('express');
const router = express.Router();

const articles = [
  { id: 1, title: 'Node.js Intro', content: 'Lorem ipsum dolor sit amet...' },
  { id: 2, title: 'Express Routing', content: 'Routing with Express...' },
];

router.get('/', (req, res) => {
  res.render('articles/index.ejs', { articles });
});

router.get('/:articleId', (req, res) => {
  const article = articles.find(a => a.id == req.params.articleId);
  if (article) {
    res.render('articles/article.ejs', { article });
  } else {
    res.status(404).send('Article not found');
  }
});

module.exports = router;
