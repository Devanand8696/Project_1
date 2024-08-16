const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = 5000;
const API_KEY = '6c09ad947d4bf84fbbc1006ee94c7bcd';
const API_URL = `http://indianrailapi.com/api/v2/TrainInformation/apikey/${API_KEY}/TrainNumber`;

app.use(cors());

app.get('/api/train/:trainNumber', async (req, res) => {
  const trainNumber = req.params.trainNumber;
  try {
    const response = await axios.get(`${API_URL}/${trainNumber}/`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch train details.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
