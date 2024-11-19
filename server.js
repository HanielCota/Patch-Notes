const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Servir arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Rota inicial
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Rota para patch notes
app.get('/patch-notes', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'patch-notes.html'));
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
