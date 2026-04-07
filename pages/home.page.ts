import { Locator, Page } from "@playwright/test";


export class HomePage {
    readonly page: Page;
    readonly articlesLink: Locator;
    readonly welcomeHeading: Locator;

    constructor(page: Page) {
        this.page = page;
        this.articlesLink = page.locator('a[href="./articles.html"]');
        this.welcomeHeading = page.getByRole('heading', {name: /Welcome on/i});
    };

    async open() {
        await this.page.goto('/');
    };
    
    async openArticles() {
        await this.articlesLink.click();
    };
}