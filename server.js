'use strict';

/**
 * Small demo Express server for the Velocity connector.
 *
 * Routes:
 *   GET /        -> "Hello from Velocity"
 *   GET /health  -> healthcheck JSON payload
 */

const express = require('express');

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || '0.0.0.0';

const app = express();

// Root route
app.get('/', (req, res) => {
  res.type('text/plain').send('Hello from Velocity');
});

// Healthcheck route
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'ok',
    uptime: process.uptime(),
    timestamp: new Date().toISOString()
  });
});

app.listen(PORT, HOST, () => {
  console.log(`Velocity connector demo app listening on http://${HOST}:${PORT}`);
});
