import { expect } from '@playwright/test';
import { test } from '../../fixtures/app.fixture';

test.describe.configure({ mode: 'serial' });

test('User should see article created via API on UI', async ({
  authApi,
  articlesApi,
  articlesPage,
}) => {
  // Create variables
  const uniqueTitle = `Test Article ${Date.now()}`;

  // API setup
  const token = await authApi.login();
  await articlesApi.createArticle(token, uniqueTitle);

  // Open UI
  await articlesPage.open();

  // Assert created article is visible
  await expect(articlesPage.articleTitle(uniqueTitle)).toBeVisible();
});

test('User should see article created via API on UI after DB restore', async ({
  authApi,
  articlesApi,
  restoreApi,
  articlesPage,
}) => {
  // Arrange
  await restoreApi.restoreDefaultDB();
  const uniqueTitle = `Restored Article ${Date.now()}`;
  const token = await authApi.login();
  await articlesApi.createArticle(token, uniqueTitle);
  // Act
  await articlesPage.open();
  // Assert
  await expect(articlesPage.articleTitle(uniqueTitle)).toBeVisible();
});
