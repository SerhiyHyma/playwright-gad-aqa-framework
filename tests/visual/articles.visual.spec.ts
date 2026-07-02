import { expect } from '@playwright/test';
import { test } from '../../fixtures/app.fixture';

test.describe.configure({ mode: 'serial' });

test.beforeEach(async ({ restoreApi }) => {
  await restoreApi.restoreDefaultDB();
});

test('Articles page should match visual baseline', async ({ articlesPage, page }) => {
  await articlesPage.open();
  await expect(page).toHaveScreenshot('articles-page.png', {
    fullPage: true,
  });
});
