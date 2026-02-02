/**
 * @fileoverview Root Application Component
 * @description Main app entry point with routing configuration and error boundary
 */

import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import ErrorBoundary from './components/ErrorBoundary'

/**
 * App Component
 * 
 * Root application component that provides:
 * - Error boundary wrapper for catching React errors
 * - Route definitions for all pages
 * 
 * @returns {JSX.Element} The rendered application with routing
 */
function App() {
    return (
        <ErrorBoundary>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </ErrorBoundary>
    )
}

export default App
