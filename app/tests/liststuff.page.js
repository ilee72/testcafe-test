import { Selector } from 'testcafe';

class ListStuffPage {
  constructor() {
    this.pageId = '#list-stuff-page';
    this.pageSelector = Selector(this.pageId);
  }

  /** Asserts that this page is currently displayed. */
  async isDisplayed(testController) {
    await testController.expect(this.pageSelector.exists).ok();
  }

  /** Asserts that this page is currently displayed. */
  async hasTable(testController) {
    const rowCount = Selector('tr').count;    // Look or select <tr> | <.tr> means look for class | <#tr> id of tr
    await testController.expect(rowCount).gte(2);
  }
}

export const listStuffPage = new ListStuffPage();
