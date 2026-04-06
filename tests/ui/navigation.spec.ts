import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/home.page';
import { ArticlesPage } from '../../pages/articles.page';


test.beforeEach(async ({page}) => {
    const homePage: HomePage = new HomePage(page);
    await homePage.open();
})

test('Home page should display welcome text', async({page}) => {
    
    await expect(page.getByRole('heading', {name: /Welcome on/i})).toBeVisible();
});

test('User can navigate to articles page from home page', async ({page}) => {
    //Arrange
    const homePage: HomePage = new HomePage(page);
    const articlesPage: ArticlesPage = new ArticlesPage(page);

    //Act
    await homePage.openArticles();

    //Assert
    await expect(page).toHaveURL('http://localhost:3000/articles.html');
    await expect(await articlesPage.isOpened()).toBe(true);
});

test('User should see pagination on Articles page', async ({page}) => {
    //Arrange
    const homePage: HomePage = new HomePage(page);
    const articlesPage: ArticlesPage = new ArticlesPage(page);

    await homePage.open();

    //Act
    await homePage.openArticles();

    //Assert
    await expect(page).toHaveURL('http://localhost:3000/articles.html');
    await expect(articlesPage.paginationController).toBeVisible();
});