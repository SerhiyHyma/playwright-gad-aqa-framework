import { expect } from "@playwright/test";
import { test } from "../../fixtures/app.fixture"


test('Default DB restore endpoint should return successful response', async ({ restoreApi }) => {
    const response = await restoreApi.restoreDefaultDB();

    const body = response.message;
    expect(body).toBe('Database successfully restored');
});