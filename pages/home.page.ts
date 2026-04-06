import { Locator, Page } from "@playwright/test";


export class HomePage {
    readonly page: Page;
    readonly articlesLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.articlesLink = page.locator('a[href="./articles.html"]');
    };

    async open() {
        await this.page.goto('/');
    }
    
    async openArticles() {
        await this.articlesLink.click();
    }
}