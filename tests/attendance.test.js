const request = require('supertest');
const app = require('../server');
const jwt = require('jsonwebtoken');
require('dotenv').config();

describe('Attendance API', () => {
  let token;

  beforeAll(async () => {
    await request(app)
      .post('/api/auth/register')
      .send({ username: 'testemployee', password: 'password123', role: 'employee' });
    const res = await request(app)
      .post('/api/auth/login')
      .send({ username: 'testemployee', password: 'password123' });
    token = res.body.token;
  });

  it('should check in', async () => {
    const res = await request(app)
      .post('/api/attendance/check-in')
      .set('Authorization', `Bearer ${token}`);
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe('Checked in');
  });
});