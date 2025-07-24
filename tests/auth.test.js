const request = require('supertest');
const app = require('../server');

describe('Auth API', () => {
  it('should register a new user', async () => {
    const res = await request(app)
      .post('/api/auth/register')
      .send({ username: 'testuser', password: 'password123', role: 'employee' });
    expect(res.statusCode).toBe(201);
    expect(res.body.message).toBe('User created');
  });

  it('should login a user', async () => {
    await request(app)
      .post('/api/auth/register')
      .send({ username: 'testlogin', password: 'password123', role: 'employee' });
    const res = await request(app)
      .post('/api/auth/login')
      .send({ username: 'testlogin', password: 'password123' });
    expect(res.statusCode).toBe(200);
    expect(res.body.token).toBeDefined();
  });
});