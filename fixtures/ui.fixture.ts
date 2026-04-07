import { test as base } from '@playwright/test';
import { HomePage } from '../pages/home.page';
import { ArticlesPage } from '../pages/articles.page';


type UiFixtures = {
    homePage: HomePage;
    articlesPage: ArticlesPage;
};

export const test = base.extend<UiFixtures>({
    homePage: async ({page}, use) => {
        await use(new HomePage(page));
    },

    articlesPage: async ({page}, use) => {
        await use(new ArticlesPage(page));
    },
});