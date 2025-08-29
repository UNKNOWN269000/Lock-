// install express first: npm install express
const express = require('express');
const app = express();

app.use(express.json());

// Your secret passcode
const VALID_PASSCODE = "25269000";

app.post('/check-passcode', (req, res) => {
  const { passcode } = req.body;
  if (passcode === VALID_PASSCODE) {
    res.json({ success: true });
  } else {
    res.json({ success: false });
  }
});

app.listen(3000, () => {
  console.log('Server running on https://bright-muffin-b92e57.netlify.app/');
});
