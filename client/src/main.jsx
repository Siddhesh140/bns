import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import * as Sentry from "@sentry/react"
import App from './App.jsx'
import './styles/globals.css'

// Initialize Sentry for error tracking
if (import.meta.env.VITE_SENTRY_DSN) {
    Sentry.init({
        dsn: import.meta.env.VITE_SENTRY_DSN,
        environment: import.meta.env.MODE,
        integrations: [
            Sentry.browserTracingIntegration(),
            Sentry.replayIntegration()
        ],
        // Performance Monitoring
        tracesSampleRate: import.meta.env.MODE === 'production' ? 0.1 : 1.0,
        // Session Replay
        replaysSessionSampleRate: 0.1,
        replaysOnErrorSampleRate: 1.0,
        // Only send errors in production
        beforeSend(event) {
            if (import.meta.env.MODE === 'development') {
                console.error('[Sentry]', event);
                return null; // Don't send to Sentry in dev
            }
            return event;
        }
    });
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>,
)
