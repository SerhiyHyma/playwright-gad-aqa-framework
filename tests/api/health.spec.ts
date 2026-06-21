import { expect } from '@playwright/test';
import { test } from '../../fixtures/app.fixture';


test('Health endpoint should return OK status', async ({ healthApi }) => {
    const body = await healthApi.getHealth();
    expect(body.status).toBe('OK');
});

test('DB health endpoint should return 200 and no problems', async ({ healthApi }) => {
    const body = await healthApi.getDbHealth();

    expect(body.status).toBe('OK');
    expect(body.result.missingTablesInCurrentDb).toEqual([]);
    expect(body.result.missingKeysInCurrentDb).toEqual([]);
    expect(body.result.invalidObjects).toEqual([]);
});