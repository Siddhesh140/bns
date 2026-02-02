/**
 * @fileoverview Pricing Configuration
 * @description Centralized pricing values to keep UI in sync across components
 */

/**
 * @typedef {Object} PricingConfig
 * @property {number} amount - Price amount in smallest currency unit
 * @property {string} currency - ISO 4217 currency code
 * @property {string} currencySymbol - Currency symbol for display
 * @property {string} displayPrice - Formatted price with symbol
 * @property {string} displayPriceOnly - Formatted price without symbol
 */

/**
 * Application pricing configuration
 * @constant {PricingConfig}
 */
export const PRICING = {
    amount: 4999,
    currency: 'INR',
    currencySymbol: '₹',
    displayPrice: '₹4,999',
    displayPriceOnly: '4,999'
};
