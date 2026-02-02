import { useState, useCallback } from 'react';
import { INITIAL_FORM_STATE, WHATSAPP_NUMBER, MESSAGE_TYPES } from './contactFormConfig';
import api from '../../utils/api';

/**
 * Custom hook for contact form logic
 * Supports both API submission and WhatsApp fallback
 */
export const useContactForm = (formType, onClose) => {
    const [formData, setFormData] = useState(INITIAL_FORM_STATE);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState(null);

    const handleChange = useCallback((e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        // Clear error when user types
        if (error) setError(null);
    }, [error]);

    const createWhatsAppMessage = useCallback(() => {
        const formTypeText = MESSAGE_TYPES[formType];
        return `*${formTypeText}*\n\n` +
            Object.entries(formData)
                .map(([key, value]) => {
                    const label = key === 'companyName' ? 'Company' :
                        key === 'phone' ? 'Phone' :
                            key.charAt(0).toUpperCase() + key.slice(1);
                    return `*${label}:* ${value}`;
                })
                .join('\n');
    }, [formData, formType]);

    const submitToBackend = async () => {
        try {
            setIsSubmitting(true);
            setError(null);

            // Submit to backend API
            await api.addUser({
                name: formData.name,
                email: formData.email,
                phone: formData.phone, // Already has +91 from user input
                companyName: formData.companyName,
                position: formData.position
            });

            // Success - close form and reset
            onClose();
            setFormData(INITIAL_FORM_STATE);

            // Optional: Show success message
            alert('Thank you! Your request has been submitted successfully.');
        } catch (err) {
            // Log in development, Sentry handles production
            if (import.meta.env.MODE === 'development') {
                console.error('API submission failed:', err);
            }
            setError(err.message || 'Failed to submit. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const submitToWhatsApp = () => {
        const message = createWhatsAppMessage();
        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, '_blank');
        onClose();
        setFormData(INITIAL_FORM_STATE);
    };

    const handleSubmit = useCallback(async (e) => {
        e.preventDefault();

        // Try API first, fallback to WhatsApp if it fails
        try {
            await submitToBackend();
        } catch (err) {
            // If API fails, ask user if they want to use WhatsApp
            if (window.confirm('Server is unavailable. Would you like to send via WhatsApp instead?')) {
                submitToWhatsApp();
            }
        }
    }, [formData, formType, onClose]);

    return {
        formData,
        handleChange,
        handleSubmit,
        isSubmitting,
        error
    };
};
