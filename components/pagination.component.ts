import { Page, Locator} from "@playwright/test"


export class PaginationComponent {
    readonly page: Page;
    readonly root: Locator;

    constructor(page: Page) {
        this.page = page;
        this.root = page.locator('#paginationController');
    }
}