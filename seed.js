const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Crypto = require('./models/Crypto');

dotenv.config();

const cryptoData = [
  {
    name: 'Bitcoin',
    symbol: 'BTC',
    price: 97234.56,
    change24h: 2.34,
    marketCap: 1920000000000,
    volume24h: 28500000000,
    image: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png',
  },
  {
    name: 'Ethereum',
    symbol: 'ETH',
    price: 3456.78,
    change24h: 1.56,
    marketCap: 415000000000,
    volume24h: 15200000000,
    image: 'https://assets.coingecko.com/coins/images/279/large/ethereum.png',
  },
  {
    name: 'Tether',
    symbol: 'USDT',
    price: 1.0,
    change24h: 0.01,
    marketCap: 95000000000,
    volume24h: 45000000000,
    image: 'https://assets.coingecko.com/coins/images/325/large/Tether.png',
  },
  {
    name: 'BNB',
    symbol: 'BNB',
    price: 634.12,
    change24h: -0.89,
    marketCap: 97000000000,
    volume24h: 1200000000,
    image: 'https://assets.coingecko.com/coins/images/825/large/bnb-icon2_2x.png',
  },
  {
    name: 'Solana',
    symbol: 'SOL',
    price: 189.45,
    change24h: 4.23,
    marketCap: 82000000000,
    volume24h: 3500000000,
    image: 'https://assets.coingecko.com/coins/images/4128/large/solana.png',
  },
  {
    name: 'XRP',
    symbol: 'XRP',
    price: 2.34,
    change24h: 1.12,
    marketCap: 134000000000,
    volume24h: 8900000000,
    image: 'https://assets.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png',
  },
  {
    name: 'USD Coin',
    symbol: 'USDC',
    price: 1.0,
    change24h: 0.0,
    marketCap: 33000000000,
    volume24h: 5400000000,
    image: 'https://assets.coingecko.com/coins/images/6319/large/usdc.png',
  },
  {
    name: 'Cardano',
    symbol: 'ADA',
    price: 0.98,
    change24h: -1.45,
    marketCap: 34500000000,
    volume24h: 890000000,
    image: 'https://assets.coingecko.com/coins/images/975/large/cardano.png',
  },
  {
    name: 'Dogecoin',
    symbol: 'DOGE',
    price: 0.38,
    change24h: 3.67,
    marketCap: 56000000000,
    volume24h: 2300000000,
    image: 'https://assets.coingecko.com/coins/images/5/large/dogecoin.png',
  },
  {
    name: 'TRON',
    symbol: 'TRX',
    price: 0.124,
    change24h: 0.85,
    marketCap: 10800000000,
    volume24h: 320000000,
    image: 'https://assets.coingecko.com/coins/images/1094/large/tron-logo.png',
  },
  {
    name: 'Polkadot',
    symbol: 'DOT',
    price: 7.89,
    change24h: 0.78,
    marketCap: 11000000000,
    volume24h: 450000000,
    image: 'https://assets.coingecko.com/coins/images/12171/large/polkadot.png',
  },
  {
    name: 'Polygon',
    symbol: 'MATIC',
    price: 0.72,
    change24h: -2.15,
    marketCap: 6700000000,
    volume24h: 310000000,
    image: 'https://assets.coingecko.com/coins/images/4713/large/polygon.png',
  },
  {
    name: 'Avalanche',
    symbol: 'AVAX',
    price: 38.56,
    change24h: 2.15,
    marketCap: 15800000000,
    volume24h: 620000000,
    image: 'https://assets.coingecko.com/coins/images/12559/large/Avalanche_Circle_RedWhite_Trans.png',
  },
  {
    name: 'Chainlink',
    symbol: 'LINK',
    price: 18.42,
    change24h: 3.21,
    marketCap: 10800000000,
    volume24h: 780000000,
    image: 'https://assets.coingecko.com/coins/images/877/large/chainlink-new-logo.png',
  },
  {
    name: 'Shiba Inu',
    symbol: 'SHIB',
    price: 0.0000245,
    change24h: 5.67,
    marketCap: 14400000000,
    volume24h: 890000000,
    image: 'https://assets.coingecko.com/coins/images/11939/large/shiba.png',
  },
  {
    name: 'Litecoin',
    symbol: 'LTC',
    price: 105.34,
    change24h: 1.89,
    marketCap: 7800000000,
    volume24h: 540000000,
    image: 'https://assets.coingecko.com/coins/images/2/large/litecoin.png',
  },
  {
    name: 'Uniswap',
    symbol: 'UNI',
    price: 12.56,
    change24h: -0.34,
    marketCap: 9500000000,
    volume24h: 320000000,
    image: 'https://assets.coingecko.com/coins/images/12504/large/uni.jpg',
  },
  {
    name: 'Cosmos',
    symbol: 'ATOM',
    price: 9.87,
    change24h: 1.45,
    marketCap: 3800000000,
    volume24h: 210000000,
    image: 'https://assets.coingecko.com/coins/images/1481/large/cosmos_hub.png',
  },
  {
    name: 'Stellar',
    symbol: 'XLM',
    price: 0.145,
    change24h: 2.34,
    marketCap: 4200000000,
    volume24h: 180000000,
    image: 'https://assets.coingecko.com/coins/images/100/large/Stellar_symbol_black_RGB.png',
  },
  {
    name: 'Filecoin',
    symbol: 'FIL',
    price: 6.23,
    change24h: -1.78,
    marketCap: 3400000000,
    volume24h: 190000000,
    image: 'https://assets.coingecko.com/coins/images/12817/large/filecoin.png',
  },
  {
    name: 'Aave',
    symbol: 'AAVE',
    price: 268.9,
    change24h: 4.56,
    marketCap: 4000000000,
    volume24h: 290000000,
    image: 'https://assets.coingecko.com/coins/images/12645/large/aave-token-round.png',
  },
  {
    name: 'VeChain',
    symbol: 'VET',
    price: 0.028,
    change24h: -0.56,
    marketCap: 2000000000,
    volume24h: 67000000,
    image: 'https://assets.coingecko.com/coins/images/1167/large/VET_Token_Icon.png',
  },
  {
    name: 'Algorand',
    symbol: 'ALGO',
    price: 0.215,
    change24h: 1.23,
    marketCap: 1700000000,
    volume24h: 78000000,
    image: 'https://assets.coingecko.com/coins/images/4380/large/download.png',
  },
  {
    name: 'Internet Computer',
    symbol: 'ICP',
    price: 12.45,
    change24h: -3.12,
    marketCap: 5800000000,
    volume24h: 120000000,
    image: 'https://assets.coingecko.com/coins/images/14495/large/Internet_Computer_logo.png',
  },
  {
    name: 'Aptos',
    symbol: 'APT',
    price: 9.34,
    change24h: 6.78,
    marketCap: 4100000000,
    volume24h: 250000000,
    image: 'https://assets.coingecko.com/coins/images/26455/large/aptos_round.png',
  },
  {
    name: 'Near Protocol',
    symbol: 'NEAR',
    price: 5.67,
    change24h: 3.45,
    marketCap: 6200000000,
    volume24h: 340000000,
    image: 'https://assets.coingecko.com/coins/images/10365/large/near.jpg',
  },
  {
    name: 'Arbitrum',
    symbol: 'ARB',
    price: 1.23,
    change24h: 2.89,
    marketCap: 3200000000,
    volume24h: 450000000,
    image: 'https://assets.coingecko.com/coins/images/16547/large/arb.jpg',
  },
  {
    name: 'Optimism',
    symbol: 'OP',
    price: 2.45,
    change24h: 1.67,
    marketCap: 2800000000,
    volume24h: 210000000,
    image: 'https://assets.coingecko.com/coins/images/25244/large/Optimism.png',
  },
  {
    name: 'Render',
    symbol: 'RNDR',
    price: 8.92,
    change24h: 7.34,
    marketCap: 4600000000,
    volume24h: 380000000,
    image: 'https://assets.coingecko.com/coins/images/11636/large/rndr.png',
  },
  {
    name: 'Pepe',
    symbol: 'PEPE',
    price: 0.0000156,
    change24h: 12.45,
    marketCap: 6500000000,
    volume24h: 2100000000,
    image: 'https://assets.coingecko.com/coins/images/29850/large/pepe-token.jpeg',
  },
];

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('✅ Connected to MongoDB');

    // Clear only seeded data (not user-created entries)
    // We delete all and re-insert to ensure clean state
    await Crypto.deleteMany({});
    console.log('🗑️  Cleared existing crypto data');

    // Insert seed data with staggered createdAt so "new listings" order makes sense
    const now = Date.now();
    const seededData = cryptoData.map((crypto, index) => ({
      ...crypto,
      createdAt: new Date(now - (cryptoData.length - index) * 86400000), // 1 day apart
    }));

    await Crypto.insertMany(seededData);
    console.log(`✅ Seeded ${seededData.length} tradable cryptocurrencies`);

    await mongoose.disconnect();
    console.log('🔌 Disconnected from MongoDB');
    process.exit(0);
  } catch (error) {
    console.error('❌ Seeding error:', error.message);
    process.exit(1);
  }
};

seedDB();
