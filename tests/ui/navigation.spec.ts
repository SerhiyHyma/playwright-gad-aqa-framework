import { expect } from '@playwright/test';
import { test } from '../../fixtures/app.fixture';

test.beforeEach(async ({ homePage }) => {
  await homePage.open();
});

test('Home page should display welcome text', async ({ homePage }) => {
  //Assert
  await expect(homePage.welcomeHeading).toBeVisible();
});

test('User can navigate to articles page from home page', async ({
  page,
  homePage,
  articlesPage,
}) => {
  //Act
  await homePage.openArticles();

  //Assert
  await expect(page).toHaveURL(/articles\.html$/);
  await expect(articlesPage.articlesMenuButton).toBeDisabled();
});

test('User should see pagination on Articles page', async ({ page, homePage, articlesPage }) => {
  //Act
  await homePage.openArticles();

  //Assert
  await expect(page).toHaveURL('http://localhost:3000/articles.html');
  await expect(articlesPage.pagination.root).toBeVisible();
});

test('User can navigate between article pages using pagination', async ({articlesPage}) => {
  await articlesPage.open();
  await expect(articlesPage.pagination.currentPage).toHaveText('1');
  await articlesPage.pagination.goToNextPage();
  await expect(articlesPage.pagination.currentPage).toHaveText('2');
  await articlesPage.pagination.goToPreviousPage();
  await expect(articlesPage.pagination.currentPage).toHaveText('1');
})
