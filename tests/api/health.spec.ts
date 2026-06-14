import { test, expect, APIResponse } from '@playwright/test';


test('Health endpoint should return 200', async ({ request }) => {
    const response: APIResponse = await request.get('/api/health');
    const body = await response.json();

    expect(response.status()).toBe(200);
    expect(body.status).toBe('OK');
});

test('DB health endpoint should return 200 and no problems', async ({ request }) => {
    const response = await request.get('/api/health/dbcheck');
    const body = await response.json();

    expect(response).toBeOK();
    expect(body.status).toBe('OK');
    expect(body.result.missingTablesInCurrentDb).toEqual([]);
    expect(body.result.missingKeysInCurrentDb).toEqual([]);
    expect(body.result.invalidObjects).toEqual([]);
});