import express from 'express';
import * as functions from 'firebase-functions';
import samplePluginRouter from '../plugins/sample-plugin/backend/routes.js';

const app = express();

// Example core route
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from Firebase Functions!' });
});

// Mount plugin routers
app.use('/plugins/sample', samplePluginRouter);

export const api = functions.https.onRequest(app);
