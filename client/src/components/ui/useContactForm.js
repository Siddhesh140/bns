import { useState, useCallback } from 'react';
import { INITIAL_FORM_STATE, WHATSAPP_NUMBER, MESSAGE_TYPES } from './contactFormConfig';

/**
 * Custom hook for contact form logic
 */
export const useContactForm = (formType, onClose) => {
    const [formData, setFormData] = useState(INITIAL_FORM_STATE);

    const handleChange = useCallback((e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    }, []);

    const createWhatsAppMessage = useCallback(() => {
        const formTypeText = MESSAGE_TYPES[formType];
        return `*${formTypeText}*\n\n` +
            Object.entries(formData)
                .map(([key, value]) => {
                    const label = key === 'companyName' ? 'Company' :
                        key === 'phoneNo' ? 'Phone' :
                            key.charAt(0).toUpperCase() + key.slice(1);
                    return `*${label}:* ${value}`;
                })
                .join('\n');
    }, [formData, formType]);

    const handleSubmit = useCallback((e) => {
        e.preventDefault();
        const message = createWhatsAppMessage();
        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, '_blank');
        onClose();
        setFormData(INITIAL_FORM_STATE);
    }, [createWhatsAppMessage, onClose]);

    return { formData, handleChange, handleSubmit };
};
