const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;
const FRONTEND_URL = process.env.FRONTEND_URL || `http://localhost:${PORT}`;

// Parsing JSON
app.use(express.json());

// Activating CORS
const whiteListCORS = ['http://localhost:8080', FRONTEND_URL];
const options = {
  origin: (origin, callback) => {
    if (whiteListCORS.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed'));
    }
  },
};
app.use(cors(options));

// Test endpoint
app.get('/api', (req, res) => {
  res.send('Prueba express');
});

app.listen(PORT, () => {
  console.log(`App running on ${PORT}`);
});
