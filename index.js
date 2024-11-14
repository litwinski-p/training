import axios from 'axios';
import crypto from 'crypto';

const API_KEY = "7PyxQOTTkNuSk4hQAROTy7L4QvgNle5ylacptKlpW8u8H3b4YFn7oXxymaZzk32x";
const API_SECRET = "KCo3vTCsBYjIQbRhXXY7zVYMixY9esWVLpSUHNBYvzr31VfdOoYc9Q6toCFnothR";
const BASE_URL = "https://testnet.binance.vision/api";

const query = `timestamp=${Date.now()}`;
const signature = crypto.createHmac('sha256', API_SECRET).update(query).digest('hex');

const getTrades = async (symbol) => {
    try {
        const trades = await axios.get(`${BASE_URL}/v3/trades`, {
            headers: {
                'X-MBX-APIKEY': API_KEY
            }, params: {
                symbol,
                limit: 1
            }
        });

        return trades.data;
    } catch (error) {
        console.error("Error fetching trades:", error.response ? error.response.data : error.message);
    }

}

(async () => {
    const data = await getTrades("BTCUSDT");
    console.log(data);
})()