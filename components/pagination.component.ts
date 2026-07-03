import { Page, Locator } from '@playwright/test';

export class PaginationComponent {
  readonly page: Page;
  readonly root: Locator;
  readonly nextButton: Locator;
  readonly previousButton: Locator;
  readonly currentPage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.root = page.locator('#paginationController');
    this.nextButton = this.root.locator('#btnNext');
    this.previousButton = this.root.locator('#btnPrev');
    this.currentPage = this.root.locator('#page');
  }

  async goToNextPage(): Promise<void> {
    await this.nextButton.click();
  }

  async goToPreviousPage(): Promise<void> {
    await this.previousButton.click();
  }
}
