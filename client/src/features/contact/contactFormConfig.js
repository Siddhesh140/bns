/**
 * @fileoverview Contact Form Configuration
 * @description Centralized configuration for contact form fields, titles, and constants
 */

/**
 * WhatsApp number for fallback form submission
 * @constant {string}
 */
export const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER || '919876543210';

/**
 * Form title text based on form type
 * @constant {Object.<string, string>}
 */
export const FORM_TITLES = {
    join: 'Join Now',
    call: 'Book A Call'
};

/**
 * WhatsApp message type labels
 * @constant {Object.<string, string>}
 */
export const MESSAGE_TYPES = {
    join: 'New Member Request',
    call: 'Call Request'
};

/**
 * @typedef {Object} FormField
 * @property {string} name - Field name/key
 * @property {string} type - HTML input type
 * @property {string} placeholder - Input placeholder text
 */

/**
 * Form field configurations
 * @constant {FormField[]}
 */
export const FORM_FIELDS = [
    { name: 'name', type: 'text', placeholder: 'Name' },
    { name: 'companyName', type: 'text', placeholder: 'Company Name' },
    { name: 'position', type: 'text', placeholder: 'Position' },
    { name: 'email', type: 'email', placeholder: 'Email' },
    { name: 'phone', type: 'tel', placeholder: 'Phone (+91XXXXXXXXXX)' }
];

/**
 * Initial form state with empty values
 * @constant {Object.<string, string>}
 */
export const INITIAL_FORM_STATE = {
    name: '',
    companyName: '',
    position: '',
    email: '',
    phone: ''
};
