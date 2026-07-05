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
