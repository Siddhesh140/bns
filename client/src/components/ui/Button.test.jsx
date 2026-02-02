import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

describe('Button Component', () => {
    describe('Rendering', () => {
        it('should render button with children text', () => {
            render(<Button>Click Me</Button>);
            expect(screen.getByText('Click Me')).toBeInTheDocument();
        });

        it('should render primary variant by default', () => {
            const { container } = render(<Button>Primary</Button>);
            const button = container.querySelector('button');
            expect(button).toHaveClass('bg-white', 'text-dark');
        });

        it('should render secondary variant', () => {
            const { container } = render(<Button variant="secondary">Secondary</Button>);
            const button = container.querySelector('button');
            expect(button).toHaveClass('bg-transparent', 'text-white', 'border', 'border-white');
        });

        it('should apply custom className', () => {
            const { container } = render(<Button className="custom-class">Test</Button>);
            const button = container.querySelector('button');
            expect(button).toHaveClass('custom-class');
        });
    });

    describe('States', () => {
        it('should show Loading... text when loading', () => {
            render(<Button loading>Click Me</Button>);
            expect(screen.getByText('Loading...')).toBeInTheDocument();
            expect(screen.queryByText('Click Me')).not.toBeInTheDocument();
        });

        it('should be disabled when loading', () => {
            const { container } = render(<Button loading>Test</Button>);
            const button = container.querySelector('button');
            expect(button).toBeDisabled();
        });

        it('should be disabled when disabled prop is true', () => {
            const { container } = render(<Button disabled>Test</Button>);
            const button = container.querySelector('button');
            expect(button).toBeDisabled();
        });

        it('should have cursor-wait class when loading', () => {
            const { container } = render(<Button loading>Test</Button>);
            const button = container.querySelector('button');
            expect(button).toHaveClass('cursor-wait');
        });

        it('should have cursor-pointer class when not loading or disabled', () => {
            const { container } = render(<Button>Test</Button>);
            const button = container.querySelector('button');
            expect(button).toHaveClass('cursor-pointer');
        });
    });

    describe('Click Handler', () => {
        it('should call onClick when clicked', () => {
            const handleClick = vi.fn();
            render(<Button onClick={handleClick}>Click Me</Button>);

            fireEvent.click(screen.getByText('Click Me'));
            expect(handleClick).toHaveBeenCalledTimes(1);
        });

        it('should not call onClick when disabled', () => {
            const handleClick = vi.fn();
            const { container } = render(<Button onClick={handleClick} disabled>Click Me</Button>);

            const button = container.querySelector('button');
            fireEvent.click(button);
            expect(handleClick).not.toHaveBeenCalled();
        });

        it('should not call onClick when loading', () => {
            const handleClick = vi.fn();
            render(<Button onClick={handleClick} loading>Loading</Button>);

            const button = screen.getByText('Loading...');
            fireEvent.click(button);
            expect(handleClick).not.toHaveBeenCalled();
        });
    });

    describe('Variant Validation', () => {
        it('should fallback to primary for invalid variant', () => {
            const { container } = render(<Button variant="invalid">Test</Button>);
            const button = container.querySelector('button');
            expect(button).toHaveClass('bg-white', 'text-dark');
        });

        it('should accept valid primary variant', () => {
            const { container } = render(<Button variant="primary">Test</Button>);
            const button = container.querySelector('button');
            expect(button).toHaveClass('bg-white');
        });

        it('should accept valid secondary variant', () => {
            const { container } = render(<Button variant="secondary">Test</Button>);
            const button = container.querySelector('button');
            expect(button).toHaveClass('bg-transparent');
        });
    });

    describe('Accessibility', () => {
        it('should have uppercase text transformation', () => {
            const { container } = render(<Button>Test</Button>);
            const button = container.querySelector('button');
            expect(button).toHaveClass('uppercase');
        });

        it('should maintain proper styling for disabled state', () => {
            const { container } = render(<Button disabled>Disabled</Button>);
            const button = container.querySelector('button');
            expect(button).toHaveClass('disabled:opacity-50', 'disabled:cursor-not-allowed');
        });
    });
});
