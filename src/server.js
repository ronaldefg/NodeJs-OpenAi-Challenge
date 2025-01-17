const express = require('express');
const { validateInput } = require('./utils/validation');
const { generateResponse } = require('./utils/responses');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post('/chat', async (req, res) => {
  try {
    const { input } = req.body;
    let validInput;
    try {
      validInput = validateInput(input);
    } catch (error) {
      return res.status(400).json({ error: 'Invalid input' });
    }
    const response = await generateResponse(validInput);
    return res.json({ response });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});