/**
 * @fileoverview Contact Form Modal Component
 * @description Reusable modal form for collecting user contact information
 */

import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { useContactForm } from './useContactForm';
import { FORM_FIELDS, FORM_TITLES } from './contactFormConfig';

/**
 * FormInput Component
 * 
 * Individual input field for the contact form
 * 
 * @param {Object} props - Component props
 * @param {Object} props.field - Field configuration object
 * @param {string} props.value - Current input value
 * @param {Function} props.onChange - Change handler function
 * @param {boolean} [props.disabled] - Whether input is disabled
 * @returns {JSX.Element} Rendered input field
 */
const FormInput = ({ field, value, onChange, disabled }) => (
    <div className="flex items-center px-6 py-6 w-full bg-[#242424]">
        <input
            type={field.type}
            name={field.name}
            placeholder={field.placeholder}
            value={value}
            onChange={onChange}
            required
            disabled={disabled}
            className="flex-1 bg-transparent border-none outline-none text-[#737373] placeholder:text-[#737373] font-inter text-2xl leading-[29px] disabled:opacity-50"
        />
    </div>
);

FormInput.propTypes = {
    field: PropTypes.object.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    disabled: PropTypes.bool
};

/**
 * ContactForm Component
 * 
 * Modal form for collecting user information with two modes:
 * - 'join': New member registration
 * - 'call': Book a call request
 * 
 * Features:
 * - Form validation
 * - API submission with WhatsApp fallback
 * - Loading and error states
 * 
 * @param {Object} props - Component props
 * @param {boolean} props.isOpen - Controls modal visibility
 * @param {Function} props.onClose - Callback when modal is closed
 * @param {('join'|'call')} [props.formType='join'] - Type of form to display
 * @returns {JSX.Element|null} The modal form or null when closed
 * 
 * @example
 * <ContactForm isOpen={showModal} onClose={() => setShowModal(false)} formType="join" />
 */
export default function ContactForm({ isOpen, onClose, formType = 'join' }) {
    const { formData, handleChange, handleSubmit, isSubmitting, error } = useContactForm(formType, onClose);

    // Lock body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4" onClick={onClose}>
            <div className="relative w-full max-w-[842px] bg-[#191919] p-9 flex flex-col gap-8" onClick={(e) => e.stopPropagation()}>
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors"
                    aria-label="Close form"
                    disabled={isSubmitting}
                >
                    <XMarkIcon className="w-8 h-8" />
                </button>

                {/* Title */}
                <h2 className="text-white uppercase font-bebas text-heading-md">
                    {FORM_TITLES[formType]}
                </h2>

                {/* Error Message */}
                {error && (
                    <div className="bg-red-500/10 border border-red-500 text-red-500 px-4 py-3 rounded">
                        {error}
                    </div>
                )}

                {/* Form */}
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    {FORM_FIELDS.map((field) => (
                        <FormInput
                            key={field.name}
                            field={field}
                            value={formData[field.name]}
                            onChange={handleChange}
                            disabled={isSubmitting}
                        />
                    ))}

                    {/* Submit Button */}
                    <div className="flex justify-end mt-4">
                        <button
                            type="submit"
                            className="px-6 py-5 bg-white hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            disabled={isSubmitting}
                        >
                            <span className="text-[#0F0F0F] font-inter font-medium text-2xl leading-[29px]">
                                {isSubmitting ? 'Sending...' : 'Send Request'}
                            </span>
                        </button>
                    </div>
                </form>

                {/* Helper Text */}
                <p className="text-light-gray text-sm text-center">
                    Your information is secure and will only be used to contact you.
                </p>
            </div>
        </div>
    );
}

ContactForm.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    formType: PropTypes.oneOf(['join', 'call']).isRequired
};
