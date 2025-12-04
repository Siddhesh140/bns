import PropTypes from 'prop-types';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { useContactForm } from './useContactForm';
import { FORM_FIELDS, FORM_TITLES } from './contactFormConfig';

// Input Component
const FormInput = ({ field, value, onChange }) => (
    <div className="flex items-center px-6 py-6 w-full bg-[#242424]">
        <input
            type={field.type}
            name={field.name}
            placeholder={field.placeholder}
            value={value}
            onChange={onChange}
            required
            className="flex-1 bg-transparent border-none outline-none text-[#737373] placeholder:text-[#737373] font-inter text-2xl leading-[29px]"
        />
    </div>
);

FormInput.propTypes = {
    field: PropTypes.object.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};

// Main Component
export default function ContactForm({ isOpen, onClose, formType = 'join' }) {
    const { formData, handleChange, handleSubmit } = useContactForm(formType, onClose);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4" onClick={onClose}>
            <div className="relative w-full max-w-[842px] bg-[#191919] p-9 flex flex-col gap-8" onClick={(e) => e.stopPropagation()}>
                {/* Close Button */}
                <button onClick={onClose} className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors" aria-label="Close form">
                    <XMarkIcon className="w-8 h-8" />
                </button>

                {/* Title */}
                <h2 className="text-white uppercase font-bebas text-[64px] leading-[77px]">
                    {FORM_TITLES[formType]}
                </h2>

                {/* Form */}
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    {FORM_FIELDS.map((field) => (
                        <FormInput key={field.name} field={field} value={formData[field.name]} onChange={handleChange} />
                    ))}

                    {/* Submit Button */}
                    <div className="flex justify-end mt-4">
                        <button type="submit" className="px-6 py-5 bg-white hover:bg-gray-100 transition-colors">
                            <span className="text-[#0F0F0F] font-inter font-medium text-2xl leading-[29px]">Send Request</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

ContactForm.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    formType: PropTypes.oneOf(['join', 'call']).isRequired
};
