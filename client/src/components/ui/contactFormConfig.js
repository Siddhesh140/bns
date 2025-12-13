// Form field configuration
export const FORM_FIELDS = [
    { name: 'name', placeholder: 'Name', type: 'text' },
    { name: 'companyName', placeholder: 'Company Name', type: 'text' },
    { name: 'email', placeholder: 'Email', type: 'email' },
    { name: 'phoneNo', placeholder: 'Phone No.', type: 'tel' }
];

export const INITIAL_FORM_STATE = {
    name: '',
    companyName: '',
    email: '',
    phoneNo: ''
};

export const WHATSAPP_NUMBER = '919579662005';

export const FORM_TITLES = {
    join: 'Join Now',
    call: 'Book a Call'
};

export const MESSAGE_TYPES = {
    join: 'Join Community Request',
    call: 'Book a Call Request'
};
