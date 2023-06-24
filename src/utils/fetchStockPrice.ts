import { chromium, Browser, Page, ElementHandle } from 'playwright';

async function fetchStockPrice(): Promise<void> {
  const browser: Browser = await chromium.launch();
  const page: Page = await browser.newPage();

  const url = 'https://finance.yahoo.com/quote/MSFT';
  await page.goto(url);

  const stockPriceSelector = 'span[data-reactid="50"]';
  const stockPriceElement: ElementHandle | null = await page.$(stockPriceSelector);
  if (stockPriceElement) {
    const stockPrice: string = await stockPriceElement.innerText();
    console.log(`Microsoft stock price: $${stockPrice}`);
  } else {
    console.log('Failed to get stock price element.');
  }

  await browser.close();
}

export default fetchStockPrice;