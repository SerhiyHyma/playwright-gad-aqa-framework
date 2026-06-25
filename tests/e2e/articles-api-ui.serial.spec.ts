import { expect } from '@playwright/test';
import { test } from '../../fixtures/app.fixture';

test.describe.configure({ mode: 'serial' });

test.beforeEach(async ({ homePage }) => {
  await homePage.open();
});

test('User should see article created via API on UI', async ({
  homePage,
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
  await homePage.open();
  await homePage.openArticles();

  // Assert created article is visible
  await expect(articlesPage.articleTitle(uniqueTitle)).toBeVisible();
});

test('User should see article created via API on UI after DB restore', async ({
  page,
  homePage,
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
  await homePage.openArticles();
  // Assert
  await expect(articlesPage.articleTitle(uniqueTitle)).toBeVisible();
});
