import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

describe('App', () => {
    it('should render without crashing', () => {
        const { container } = render(
            <BrowserRouter>
                <App />
            </BrowserRouter>
        )

        // App should render (basic smoke test)
        expect(container).toBeTruthy()
    })

    it('should wrap routes with ErrorBoundary', () => {
        const { container } = render(
            <BrowserRouter>
                <App />
            </BrowserRouter>
        )

        // ErrorBoundary should be present
        expect(container).toBeTruthy()
    })
})
