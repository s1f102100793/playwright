import fetchStockPrice from './utils/fetchStockPrice'; // 変更前： import { fetchStockPrice } from './utils/fetchStockPrice';

setInterval(fetchStockPrice, 60000); // 1 minute