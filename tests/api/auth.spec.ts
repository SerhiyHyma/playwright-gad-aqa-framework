import { test, expect } from "@playwright/test";


test('User can login and receive token', async ({ request }) => {
    const response = await request.post('/api/login', {
        data: {
            email: 'j.sumderland@test.test',
            password: '12345',
        },
    });
    
    const body = await response.json();

    await expect(response).toBeOK();
    expect(body).toHaveProperty('access_token')
});

test('User can create article via API', async ({ request }) => {
// Login
    const loginResponse = await request.post('/api/login', {data: {
        email: 'j.sumderland@test.test',
        password: '12345',
    },
});
const loginBody = await loginResponse.json();
const token = loginBody.access_token;

// Create login
const articleResponse = await request.post('/api/articles', {
    headers: {
        Authorization: `Bearer ${token}`,
    },
    data: {
        title: "Test Article from API",
        body: "This is a test article created by Playwright",
        date: new Date().toISOString(),
        image: "test.png"
    },
});
const articleBody = await articleResponse.json();

await expect(articleResponse).toBeOK();
expect(articleBody).toHaveProperty('id');
expect(articleBody.title).toBe('Test Article from API')
});

test('User should not be able to create article without token', async ({ request }) => {
    const response = await request.post('/api/articles', {
        data: {
            title: 'Unauthorized article',
            body: 'Should not be created',
            date: new Date().toISOString(),
            image: 'test.png',
        },
    });
    const body = await response.json();
    expect(response.status()).toBe(401);
    expect(body.error.message).toContain('Access token');
});