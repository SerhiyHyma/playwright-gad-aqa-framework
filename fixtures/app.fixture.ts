import { test as base } from '@playwright/test';
import { HomePage } from '../pages/home.page';
import { ArticlesPage } from '../pages/articles.page';
import { AuthApi } from '../services/auth.api';
import { ArticlesApi } from '../services/articles.api';
import { RestoreApi } from '../services/restore.api';


type AppFixtures = {
    homePage: HomePage;
    articlesPage: ArticlesPage;
    authApi: AuthApi;
    articlesApi: ArticlesApi;
    restoreApi: RestoreApi;
};

export const test = base.extend<AppFixtures>({
    homePage: async ({ page }, use) => {
        await use(new HomePage(page));
    },

    articlesPage: async ({ page }, use) => {
        await use(new ArticlesPage(page));
    },

    authApi: async ({ request }, use) => {
        await use(new AuthApi(request))
    },

    articlesApi: async ({ request }, use) => {
        await use(new ArticlesApi(request))
    },

    restoreApi: async ({ request }, use) => {
        await use(new RestoreApi(request))
    }
});