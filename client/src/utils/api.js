/**
 * @fileoverview API Client for Backend Communication
 * @description Centralized HTTP client with authentication, error handling, and request management
 */

/** @constant {string} Base URL for API requests */
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

/**
 * API Client Class
 * 
 * Provides methods for making authenticated HTTP requests to the backend.
 * Features:
 * - Automatic token handling via localStorage
 * - Standardized error handling (401, 429, network errors)
 * - JSON request/response handling
 * 
 * @class
 */
class ApiClient {
    /**
     * Make an API request with automatic token handling
     * 
     * @async
     * @param {string} endpoint - API endpoint path (e.g., '/api/users')
     * @param {Object} [options={}] - Fetch options (method, body, headers, etc.)
     * @returns {Promise<Object>} Parsed JSON response
     * @throws {Error} Authentication, rate limiting, or network errors
     */
    async request(endpoint, options = {}) {
        const token = localStorage.getItem('authToken');

        const config = {
            ...options,
            headers: {
                'Content-Type': 'application/json',
                ...(token && { 'Authorization': `Bearer ${token}` }),
                ...options.headers
            },
            credentials: 'include'
        };

        try {
            const response = await fetch(`${API_URL}${endpoint}`, config);

            // Handle authentication errors
            if (response.status === 401) {
                localStorage.removeItem('authToken');
                throw new Error('Authentication required');
            }

            // Handle rate limiting
            if (response.status === 429) {
                throw new Error('Too many requests. Please try again later.');
            }

            // Parse JSON response
            const data = await response.json();

            // Handle API errors
            if (!response.ok) {
                throw new Error(data.error || 'Request failed');
            }

            return data;
        } catch (error) {
            // Network errors
            if (error.name === 'TypeError' && error.message === 'Failed to fetch') {
                throw new Error('Unable to connect to server. Please check your connection.');
            }
            throw error;
        }
    }

    /**
     * Add a new user to the database
     * 
     * @async
     * @param {Object} userData - User data to submit
     * @param {string} userData.name - User's full name
     * @param {string} userData.email - User's email address
     * @param {string} userData.phone - User's phone number
     * @param {string} userData.companyName - Company name
     * @param {string} userData.position - Job position/title
     * @returns {Promise<Object>} Created user data
     */
    async addUser(userData) {
        return this.request('/api/users/add', {
            method: 'POST',
            body: JSON.stringify(userData)
        });
    }

    /**
     * Get all users from the database
     * 
     * @async
     * @returns {Promise<Object>} Array of user objects
     */
    async getUsers() {
        return this.request('/api/users');
    }

    /**
     * Update an existing user
     * 
     * @async
     * @param {string} id - User ID to update
     * @param {Object} userData - Updated user fields
     * @returns {Promise<Object>} Updated user data
     */
    async updateUser(id, userData) {
        return this.request(`/api/users/${id}`, {
            method: 'PUT',
            body: JSON.stringify(userData)
        });
    }

    /**
     * Delete a user from the database
     * 
     * @async
     * @param {string} id - User ID to delete
     * @returns {Promise<Object>} Deletion confirmation
     */
    async deleteUser(id) {
        return this.request(`/api/users/${id}`, {
            method: 'DELETE'
        });
    }

    /**
     * Create a new payment order
     * 
     * @async
     * @param {Object} orderData - Order details
     * @param {string} orderData.userId - User ID for the order
     * @returns {Promise<Object>} Created order with orderId
     */
    async createPaymentOrder(orderData) {
        return this.request('/api/payments/create-order', {
            method: 'POST',
            body: JSON.stringify(orderData)
        });
    }

    /**
     * Verify a completed payment
     * 
     * @async
     * @param {Object} paymentData - Payment verification data
     * @param {string} paymentData.razorpayOrderId - Razorpay order ID
     * @param {string} paymentData.razorpayPaymentId - Razorpay payment ID
     * @param {string} paymentData.razorpaySignature - Payment signature
     * @returns {Promise<Object>} Verification result
     */
    async verifyPayment(paymentData) {
        return this.request('/api/payments/verify', {
            method: 'POST',
            body: JSON.stringify(paymentData)
        });
    }

    /**
     * Store authentication token in localStorage
     * @param {string} token - JWT token to store
     */
    setToken(token) {
        localStorage.setItem('authToken', token);
    }

    /**
     * Retrieve authentication token from localStorage
     * @returns {string|null} Stored JWT token or null
     */
    getToken() {
        return localStorage.getItem('authToken');
    }

    /**
     * Remove authentication token from localStorage
     */
    clearToken() {
        localStorage.removeItem('authToken');
    }

    /**
     * Get a test token for development purposes
     * 
     * @async
     * @returns {Promise<string|null>} Test token or null in production
     * @note Only works in development mode
     */
    async getTestToken() {
        // Only for development - get test token from backend
        if (import.meta.env.MODE !== 'production') {
            const response = await fetch(`${API_URL}/api/test-token`);
            const data = await response.json();
            if (data.token) {
                this.setToken(data.token);
                return data.token;
            }
        }
        return null;
    }
}

export default new ApiClient();
