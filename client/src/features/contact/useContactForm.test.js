import { describe, it, expect, vi, beforeEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useContactForm } from './useContactForm';
import api from '../../utils/api';

// Mock the API module
vi.mock('../../utils/api', () => ({
    default: {
        addUser: vi.fn()
    }
}));

// Mock window methods
const mockAlert = vi.fn();
const mockConfirm = vi.fn();
const mockWindowOpen = vi.fn();

beforeEach(() => {
    global.alert = mockAlert;
    global.confirm = mockConfirm;
    global.open = mockWindowOpen;
    vi.clearAllMocks();
});

describe('useContactForm', () => {
    const mockOnClose = vi.fn();
    const formType = 'join';

    describe('Form State Management', () => {
        it('should initialize with empty form data', () => {
            const { result } = renderHook(() => useContactForm(formType, mockOnClose));

            expect(result.current.formData).toEqual({
                name: '',
                companyName: '',
                position: '',
                email: '',
                phone: ''
            });
            expect(result.current.isSubmitting).toBe(false);
            expect(result.current.error).toBe(null);
        });

        it('should update form data on handleChange', () => {
            const { result } = renderHook(() => useContactForm(formType, mockOnClose));

            act(() => {
                result.current.handleChange({
                    target: { name: 'name', value: 'John Doe' }
                });
            });

            expect(result.current.formData.name).toBe('John Doe');
        });

        it('should clear error when user types', () => {
            const { result } = renderHook(() => useContactForm(formType, mockOnClose));

            // Set an error
            act(() => {
                result.current.handleChange({ target: { name: 'name', value: 'Test' } });
            });

            // Error should be cleared on next change
            act(() => {
                result.current.handleChange({ target: { name: 'email', value: 'test@test.com' } });
            });

            expect(result.current.error).toBe(null);
        });
    });

    describe('Form Submission - Success', () => {
        it('should submit to backend API successfully', async () => {
            api.addUser.mockResolvedValueOnce({ success: true });

            const { result } = renderHook(() => useContactForm(formType, mockOnClose));

            // Fill form
            act(() => {
                result.current.handleChange({ target: { name: 'name', value: 'John Doe' } });
                result.current.handleChange({ target: { name: 'email', value: 'john@example.com' } });
                result.current.handleChange({ target: { name: 'phone', value: '+919876543210' } });
                result.current.handleChange({ target: { name: 'companyName', value: 'Tech Corp' } });
                result.current.handleChange({ target: { name: 'position', value: 'Manager' } });
            });

            // Submit
            await act(async () => {
                await result.current.handleSubmit({ preventDefault: vi.fn() });
            });

            expect(api.addUser).toHaveBeenCalledWith({
                name: 'John Doe',
                email: 'john@example.com',
                phone: '+919876543210',
                companyName: 'Tech Corp',
                position: 'Manager'
            });
            expect(mockOnClose).toHaveBeenCalled();
            expect(mockAlert).toHaveBeenCalledWith('Thank you! Your request has been submitted successfully.');
        });

        it('should reset form data after successful submission', async () => {
            api.addUser.mockResolvedValueOnce({ success: true });

            const { result } = renderHook(() => useContactForm(formType, mockOnClose));

            act(() => {
                result.current.handleChange({ target: { name: 'name', value: 'John Doe' } });
            });

            await act(async () => {
                await result.current.handleSubmit({ preventDefault: vi.fn() });
            });

            expect(result.current.formData.name).toBe('');
        });
    });

    describe('Form Submission - API Error', () => {
        it('should set error message on API failure', async () => {
            api.addUser.mockRejectedValueOnce(new Error('Network error'));

            const { result } = renderHook(() => useContactForm(formType, mockOnClose));

            await act(async () => {
                await result.current.handleSubmit({ preventDefault: vi.fn() });
            });

            expect(result.current.error).toBe('Network error');
            expect(mockOnClose).not.toHaveBeenCalled();
        });

        it('should use default error message if none provided', async () => {
            api.addUser.mockRejectedValueOnce(new Error());

            const { result } = renderHook(() => useContactForm(formType, mockOnClose));

            await act(async () => {
                await result.current.handleSubmit({ preventDefault: vi.fn() });
            });

            expect(result.current.error).toBe('Failed to submit. Please try again.');
        });

        it('should set isSubmitting to false after error', async () => {
            api.addUser.mockRejectedValueOnce(new Error('API error'));

            const { result } = renderHook(() => useContactForm(formType, mockOnClose));

            await act(async () => {
                await result.current.handleSubmit({ preventDefault: vi.fn() });
            });

            expect(result.current.isSubmitting).toBe(false);
        });
    });

    describe('WhatsApp Fallback', () => {
        it('should handle API failure gracefully', async () => {
            api.addUser.mockRejectedValueOnce(new Error('Server unavailable'));

            const { result } = renderHook(() => useContactForm(formType, mockOnClose));

            act(() => {
                result.current.handleChange({ target: { name: 'name', value: 'John' } });
                result.current.handleChange({ target: { name: 'email', value: 'john@test.com' } });
                result.current.handleChange({ target: { name: 'phone', value: '1234567890' } });
                result.current.handleChange({ target: { name: 'companyName', value: 'Corp' } });
                result.current.handleChange({ target: { name: 'position', value: 'Dev' } });
            });

            await act(async () => {
                await result.current.handleSubmit({ preventDefault: vi.fn() });
            });

            // Should show error instead of closing
            expect(result.current.error).toBeTruthy();
            expect(mockOnClose).not.toHaveBeenCalled();
        });
    });
});
