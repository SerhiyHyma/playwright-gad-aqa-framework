import { Page, Locator } from "@playwright/test";


export class ArticlesPage {
    readonly page: Page;
    readonly articlesMenuButton: Locator;
    readonly paginationController: Locator;

    constructor(page: Page) {
        this.page = page;
        this.articlesMenuButton = page.getByTestId('open-articles');
        this.paginationController = page.locator('#paginationController');
    }

    async isOpened() {
        return await this.articlesMenuButton.isDisabled();
    }
}