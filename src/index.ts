import fetchStockPrice from './utils/fetchStockPrice'

async function main() {
    while (true) {
      await fetchStockPrice();
      await new Promise((resolve) => setTimeout(resolve,0.5 * 60 * 1000)); // 1分の待機
    }
  }
  
  main();