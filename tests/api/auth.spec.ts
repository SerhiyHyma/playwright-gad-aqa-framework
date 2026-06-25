import { expect } from '@playwright/test';
import { test } from '../../fixtures/app.fixture';

test('User can login and receive token', async ({ authApi }) => {
  const token = await authApi.login();
  expect(token).toBeTruthy();
});

test('User can create article via API', async ({ authApi, articlesApi }) => {
  const token = await authApi.login();
  const title = `Test Article from API ${Date.now()}`;
  const article = await articlesApi.createArticle(token, title);
  expect(article.id).toBeDefined();
  expect(article.title).toBe(title);
});

test('User should not be able to create article without token', async ({ articlesApi }) => {
  const response = await articlesApi.createArticleWithoutToken('Unuthorized article');
  const body = await response.json();
  expect(response.status()).toBe(401);
  expect(body.error.message).toContain('Access token');
});
