import { chromium } from 'playwright'

const scrapeStocks = async () => {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

  await page.goto('https://finance.yahoo.com/quote/GOOG/');
  const stockPrice = await page.$eval('.Trsdu\(0\.3s\).Fw\(b\).Fz\(36px\).Mb\(-4px\).D\(ib\)', el => el.textContent);
  
  console.log("Stock Price: ", stockPrice);
  await browser.close();
};

scrapeStocks();