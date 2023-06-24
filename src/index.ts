import fetchStockPrice from './utils/fetchStockPrice'

async function main() {
    while (true) {
      await fetchStockPrice();
      await new Promise((resolve) => setTimeout(resolve,1 * 60 * 1000)); // 5 分の待機
    }
  }
  
  main();