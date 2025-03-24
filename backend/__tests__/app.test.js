const request = require('supertest');
const express = require('express');
const app = express();

// Mock des routes basiques pour le test
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

describe('App', () => {
  it('should return 200 on health check', async () => {
    const response = await request(app).get('/health');
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ status: 'ok' });
  });
}); 