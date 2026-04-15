const request = require('supertest')
const app = require('./app')

// Test 1: Home page
test('GET / returns correct message', async () => {
  const response = await request(app).get('/')
  expect(response.status).toBe(200)
  expect(response.body.message).toBe('Hello from CI/CD!')
})

// Test 2: Health check
test('GET /health returns healthy', async () => {
  const response = await request(app).get('/health')
  expect(response.status).toBe(200)
  expect(response.body.status).toBe('healthy')
})
