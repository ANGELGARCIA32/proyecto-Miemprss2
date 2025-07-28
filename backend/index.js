const express = require('express');
const app = express();
const PORT = 5000; // Puerto para el backend

// Un "endpoint" o ruta de prueba
app.get('/api', (req, res) => {
  res.json({ message: "¡Hola desde el backend!" });
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor backend corriendo en http://localhost:${PORT}`);
});