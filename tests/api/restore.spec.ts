import { expect } from "@playwright/test";
import { test } from "../../fixtures/app.fixture"
import { RestoreApi } from "../../services/restore.api";


test('Default DB restore endpoint should return successful response', async ({ page }) => {
    const restoreApi = new RestoreApi(page.request);
    const response = await restoreApi.restoreDefaultDB();

    const body = response.message;
    expect(body).toBe('Database successfully restored');
});