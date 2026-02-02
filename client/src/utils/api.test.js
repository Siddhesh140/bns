import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import api from './api';

// Mock fetch globally
global.fetch = vi.fn();

describe('API Client', () => {
    beforeEach(() => {
        vi.clearAllMocks();
        localStorage.clear();
    });

    afterEach(() => {
        localStorage.clear();
    });

    describe('Auth Token Management', () => {
        it('should include auth token in request headers when available', async () => {
            localStorage.setItem('authToken', 'test-token-123');

            global.fetch.mockResolvedValueOnce({
                ok: true,
                json: async () => ({ success: true })
            });

            await api.request('/api/test');

            expect(global.fetch).toHaveBeenCalledWith(
                expect.any(String),
                expect.objectContaining({
                    headers: expect.objectContaining({
                        'Authorization': 'Bearer test-token-123'
                    })
                })
            );
        });

        it('should make request without auth token when not available', async () => {
            global.fetch.mockResolvedValueOnce({
                ok: true,
                json: async () => ({ success: true })
            });

            await api.request('/api/test');

            const headers = global.fetch.mock.calls[0][1].headers;
            expect(headers.Authorization).toBeUndefined();
        });

        it('should remove token from storage on 401 error', async () => {
            localStorage.setItem('authToken', 'invalid-token');

            global.fetch.mockResolvedValueOnce({
                status: 401,
                ok: false,
                json: async () => ({ error: 'Unauthorized' })
            });

            try {
                await api.request('/api/test');
            } catch (error) {
                expect(localStorage.getItem('authToken')).toBeNull();
            }
        });
    });

    describe('Error Handling', () => {
        it('should throw authentication error on 401', async () => {
            global.fetch.mockResolvedValueOnce({
                status: 401,
                ok: false,
                json: async () => ({ error: 'Unauthorized' })
            });

            await expect(api.request('/api/test'))
                .rejects
                .toThrow('Authentication required');
        });

        it('should throw rate limit error on 429', async () => {
            global.fetch.mockResolvedValueOnce({
                status: 429,
                ok: false,
                json: async () => ({ error: 'Too many requests' })
            });

            await expect(api.request('/api/test'))
                .rejects
                .toThrow('Too many requests. Please try again later.');
        });

        it('should throw error with message from response', async () => {
            global.fetch.mockResolvedValueOnce({
                ok: false,
                status: 400,
                json: async () => ({ error: 'Invalid input' })
            });

            await expect(api.request('/api/test'))
                .rejects
                .toThrow('Invalid input');
        });

        it('should throw generic error when no error message in response', async () => {
            global.fetch.mockResolvedValueOnce({
                ok: false,
                status: 500,
                json: async () => ({})
            });

            await expect(api.request('/api/test'))
                .rejects
                .toThrow('Request failed');
        });

        it('should handle network errors', async () => {
            global.fetch.mockRejectedValueOnce(new TypeError('Failed to fetch'));

            await expect(api.request('/api/test'))
                .rejects
                .toThrow('Unable to connect to server');
        });
    });

    describe('User Endpoints', () => {
        it('should call POST /api/users/add with user data', async () => {
            const userData = {
                name: 'John Doe',
                email: 'john@example.com',
                phone: '+919876543210',
                companyName: 'Tech Corp',
                position: 'Manager'
            };

            global.fetch.mockResolvedValueOnce({
                ok: true,
                json: async () => ({ success: true, user: userData })
            });

            await api.addUser(userData);

            expect(global.fetch).toHaveBeenCalledWith(
                expect.stringContaining('/api/users/add'),
                expect.objectContaining({
                    method: 'POST',
                    body: JSON.stringify(userData)
                })
            );
        });

        it('should call GET /api/users', async () => {
            global.fetch.mockResolvedValueOnce({
                ok: true,
                json: async () => ({ users: [] })
            });

            await api.getUsers();

            expect(global.fetch).toHaveBeenCalledWith(
                expect.stringContaining('/api/users'),
                expect.any(Object)
            );
        });

        it('should call PUT /api/users/:id with updated data', async () => {
            const userId = '123';
            const updateData = { name: 'Jane Doe' };

            global.fetch.mockResolvedValueOnce({
                ok: true,
                json: async () => ({ success: true })
            });

            await api.updateUser(userId, updateData);

            expect(global.fetch).toHaveBeenCalledWith(
                expect.stringContaining(`/api/users/${userId}`),
                expect.objectContaining({
                    method: 'PUT',
                    body: JSON.stringify(updateData)
                })
            );
        });

        it('should call DELETE /api/users/:id', async () => {
            const userId = '123';

            global.fetch.mockResolvedValueOnce({
                ok: true,
                json: async () => ({ success: true })
            });

            await api.deleteUser(userId);

            expect(global.fetch).toHaveBeenCalledWith(
                expect.stringContaining(`/api/users/${userId}`),
                expect.objectContaining({
                    method: 'DELETE'
                })
            );
        });
    });

    describe('Payment Endpoints', () => {
        it('should call POST /api/payments/create-order', async () => {
            const orderData = { userId: '123' };

            global.fetch.mockResolvedValueOnce({
                ok: true,
                json: async () => ({ orderId: 'order_123' })
            });

            await api.createPaymentOrder(orderData);

            expect(global.fetch).toHaveBeenCalledWith(
                expect.stringContaining('/api/payments/create-order'),
                expect.objectContaining({
                    method: 'POST',
                    body: JSON.stringify(orderData)
                })
            );
        });

        it('should call POST /api/payments/verify', async () => {
            const paymentData = {
                razorpayOrderId: 'order_123',
                razorpayPaymentId: 'pay_123',
                razorpaySignature: 'sig_123'
            };

            global.fetch.mockResolvedValueOnce({
                ok: true,
                json: async () => ({ success: true })
            });

            await api.verifyPayment(paymentData);

            expect(global.fetch).toHaveBeenCalledWith(
                expect.stringContaining('/api/payments/verify'),
                expect.objectContaining({
                    method: 'POST',
                    body: JSON.stringify(paymentData)
                })
            );
        });
    });

    describe('Token Helpers', () => {
        it('should set token in localStorage', () => {
            api.setToken('new-token');
            expect(localStorage.getItem('authToken')).toBe('new-token');
        });

        it('should get token from localStorage', () => {
            localStorage.setItem('authToken', 'stored-token');
            expect(api.getToken()).toBe('stored-token');
        });

        it('should clear token from localStorage', () => {
            localStorage.setItem('authToken', 'token-to-clear');
            api.clearToken();
            expect(localStorage.getItem('authToken')).toBeNull();
        });
    });

    describe('Request Configuration', () => {
        it('should include credentials in requests', async () => {
            global.fetch.mockResolvedValueOnce({
                ok: true,
                json: async () => ({ success: true })
            });

            await api.request('/api/test');

            expect(global.fetch).toHaveBeenCalledWith(
                expect.any(String),
                expect.objectContaining({
                    credentials: 'include'
                })
            );
        });

        it('should set Content-Type header to application/json', async () => {
            global.fetch.mockResolvedValueOnce({
                ok: true,
                json: async () => ({ success: true })
            });

            await api.request('/api/test');

            expect(global.fetch).toHaveBeenCalledWith(
                expect.any(String),
                expect.objectContaining({
                    headers: expect.objectContaining({
                        'Content-Type': 'application/json'
                    })
                })
            );
        });
    });
});
