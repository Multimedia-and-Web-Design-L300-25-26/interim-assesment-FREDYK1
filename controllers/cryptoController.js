const Crypto = require('../models/Crypto');

// @desc    Get all cryptocurrencies
// @route   GET /api/crypto
// @access  Public
const getAllCryptos = async (req, res) => {
  try {
    const cryptos = await Crypto.find({}).sort({ marketCap: -1 });

    res.status(200).json({
      success: true,
      count: cryptos.length,
      data: cryptos,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error. Please try again later.',
    });
  }
};

// @desc    Get top gainers (sorted by 24h change, highest first)
// @route   GET /api/crypto/gainers
// @access  Public
const getTopGainers = async (req, res) => {
  try {
    const cryptos = await Crypto.find({}).sort({ change24h: -1 });

    res.status(200).json({
      success: true,
      count: cryptos.length,
      data: cryptos,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error. Please try again later.',
    });
  }
};

// @desc    Get new listings (sorted by createdAt, newest first)
// @route   GET /api/crypto/new
// @access  Public
const getNewListings = async (req, res) => {
  try {
    const cryptos = await Crypto.find({}).sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: cryptos.length,
      data: cryptos,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error. Please try again later.',
    });
  }
};

// @desc    Add a new cryptocurrency
// @route   POST /api/crypto
// @access  Public
const addCrypto = async (req, res) => {
  try {
    const { name, symbol, price, image, change24h } = req.body;

    // Validate required fields
    if (!name || !symbol || price === undefined || !image || change24h === undefined) {
      return res.status(400).json({
        success: false,
        message: 'Please provide name, symbol, price, image, and 24h change',
      });
    }

    // Create cryptocurrency
    const crypto = await Crypto.create({
      name,
      symbol,
      price,
      image,
      change24h,
      marketCap: req.body.marketCap || 0,
      volume24h: req.body.volume24h || 0,
    });

    res.status(201).json({
      success: true,
      message: 'Cryptocurrency added successfully',
      data: crypto,
    });
  } catch (error) {
    // Handle mongoose validation errors
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map((err) => err.message);
      return res.status(400).json({
        success: false,
        message: messages.join(', '),
      });
    }

    res.status(500).json({
      success: false,
      message: 'Server error. Please try again later.',
    });
  }
};

module.exports = { getAllCryptos, getTopGainers, getNewListings, addCrypto };
