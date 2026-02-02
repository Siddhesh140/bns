import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import ContactForm from './ContactForm'

describe('ContactForm', () => {
    it('should not render when closed', () => {
        const { container } = render(
            <ContactForm isOpen={false} onClose={() => { }} formType="join" />
        )

        expect(container.firstChild).toBeNull()
    })

    it('should render when open', () => {
        render(
            <ContactForm isOpen={true} onClose={() => { }} formType="join" />
        )

        expect(screen.getByText(/join now/i)).toBeInTheDocument()
    })

    it('should call onClose when clicking close button', () => {
        const onClose = vi.fn()

        render(
            <ContactForm isOpen={true} onClose={onClose} formType="join" />
        )

        const closeButton = screen.getByLabelText(/close form/i)
        fireEvent.click(closeButton)

        expect(onClose).toHaveBeenCalled()
    })

    it('should have submit button', () => {
        render(
            <ContactForm isOpen={true} onClose={() => { }} formType="join" />
        )

        const submitButton = screen.getByText(/send request/i)
        expect(submitButton).toBeInTheDocument()
    })
})
