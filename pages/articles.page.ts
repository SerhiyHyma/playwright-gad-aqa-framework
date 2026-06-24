import { Page, Locator } from "@playwright/test";
import { PaginationComponent } from "../components/pagination.component";


export class ArticlesPage {
    readonly page: Page;
    readonly articlesMenuButton: Locator;
    readonly pagination: PaginationComponent;

    constructor(page: Page) {
        this.page = page;
        this.articlesMenuButton = page.getByTestId('open-articles');
        this.pagination = new PaginationComponent(page);
    };

    articleTitle(title: string): Locator {
        return this.page.getByText(title, { exact: true });
    };
}