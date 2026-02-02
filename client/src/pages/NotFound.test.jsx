import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NotFound from './NotFound';

// Helper to render with router
const renderWithRouter = (component) => {
    return render(
        <BrowserRouter>
            {component}
        </BrowserRouter>
    );
};

describe('NotFound Page', () => {
    describe('Content', () => {
        it('should render 404 heading', () => {
            renderWithRouter(<NotFound />);
            expect(screen.getByText('404')).toBeInTheDocument();
        });

        it('should render "Page Not Found" message', () => {
            renderWithRouter(<NotFound />);
            expect(screen.getByText('Page Not Found')).toBeInTheDocument();
        });

        it('should render "Back to Home" link', () => {
            renderWithRouter(<NotFound />);
            expect(screen.getByText('Back to Home')).toBeInTheDocument();
        });
    });

    describe('Layout', () => {
        it('should have dark background', () => {
            const { container } = renderWithRouter(<NotFound />);
            const mainDiv = container.querySelector('.bg-dark');
            expect(mainDiv).toBeInTheDocument();
        });

        it('should center content', () => {
            const { container } = renderWithRouter(<NotFound />);
            const mainDiv = container.querySelector('.min-h-screen');
            expect(mainDiv).toHaveClass('flex', 'items-center', 'justify-center');
        });
    });

    describe('Navigation', () => {
        it('should have link to homepage', () => {
            renderWithRouter(<NotFound />);
            const link = screen.getByText('Back to Home');
            expect(link).toHaveAttribute('href', '/');
        });
    });

    describe('Icon', () => {
        it('should render SVG icon', () => {
            const { container } = renderWithRouter(<NotFound />);
            const svg = container.querySelector('svg');
            expect(svg).toBeInTheDocument();
        });
    });
});
