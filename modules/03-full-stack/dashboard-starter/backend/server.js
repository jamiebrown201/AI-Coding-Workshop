const express = require('express');
const cors = require('cors');
const metricsRoute = require('./routes/metrics');
const topicsRoute = require('./routes/topics');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.use('/metrics', metricsRoute);
app.use('/topics', topicsRoute);

app.use((err, req, res, next) => {
  console.error('Dashboard backend error', err);
  res.status(500).json({ error: 'Internal server error' });
});

app.listen(PORT, () => {
  console.log(`Dashboard backend listening on http://localhost:${PORT}`);
});
