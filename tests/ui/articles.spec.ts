import { expect } from '@playwright/test';
import { test } from '../../fixtures/app.fixture';


test.beforeEach(async ({ articlesPage }) => {
  await articlesPage.open();
});

test('Articles page should show pagination', async ({ articlesPage }) => {
  await expect(articlesPage.pagination.root).toBeVisible();
});

test('User can navigate between article pages using pagination', async ({ articlesPage }) => {
  await articlesPage.open();
  await expect(articlesPage.pagination.currentPage).toHaveText('1');
  await articlesPage.pagination.goToNextPage();
  await expect(articlesPage.pagination.currentPage).toHaveText('2');
  await articlesPage.pagination.goToPreviousPage();
  await expect(articlesPage.pagination.currentPage).toHaveText('1');
});