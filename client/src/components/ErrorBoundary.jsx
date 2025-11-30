import { Component } from 'react';

/**
 * ErrorBoundary Component
 * 
 * Catches JavaScript errors anywhere in the child component tree,
 * logs those errors, and displays a fallback UI instead of crashing the whole app.
 * 
 * @example
 * <ErrorBoundary>
 *   <App />
 * </ErrorBoundary>
 */
class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
            error: null,
            errorInfo: null
        };
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        // Log error details to console (in production, send to error tracking service)
        console.error('ErrorBoundary caught an error:', error, errorInfo);

        // Store error details in state
        this.setState({
            error: error,
            errorInfo: errorInfo
        });

        // TODO: Send error to error tracking service (e.g., Sentry, LogRocket)
        // logErrorToService(error, errorInfo);
    }

    handleReload = () => {
        window.location.reload();
    };

    render() {
        if (this.state.hasError) {
            // Fallback UI when error occurs
            return (
                <div className="min-h-screen flex items-center justify-center bg-[#0F0F0F] p-5">
                    <div className="max-w-md w-full text-center">
                        {/* Error Icon */}
                        <div className="mb-6">
                            <svg
                                className="mx-auto h-16 w-16 text-red-500"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                                />
                            </svg>
                        </div>

                        {/* Error Message */}
                        <h1
                            className="text-white text-3xl md:text-4xl mb-4 uppercase"
                            style={{ fontFamily: 'var(--font-bebas-neue)', fontWeight: 400 }}
                        >
                            Oops! Something Went Wrong
                        </h1>

                        <p
                            className="text-[#ADADAD] text-base md:text-lg mb-8"
                            style={{ fontFamily: 'var(--font-inter)', fontWeight: 400 }}
                        >
                            We encountered an unexpected error. Don't worry, your data is safe.
                            Please try reloading the page.
                        </p>

                        {/* Reload Button */}
                        <button
                            onClick={this.handleReload}
                            className="bg-[#3B82F6] hover:bg-[#2563EB] text-white font-semibold px-8 py-4 rounded transition-colors duration-300"
                            style={{ fontFamily: 'var(--font-inter)' }}
                        >
                            Reload Page
                        </button>

                        {/* Error Details (only in development) */}
                        {process.env.NODE_ENV === 'development' && this.state.error && (
                            <details className="mt-8 text-left">
                                <summary className="text-[#ADADAD] cursor-pointer hover:text-white transition-colors">
                                    Error Details (Development Only)
                                </summary>
                                <div className="mt-4 p-4 bg-[#1A1A1A] rounded text-red-400 text-sm overflow-auto">
                                    <p className="font-bold mb-2">{this.state.error.toString()}</p>
                                    <pre className="text-xs whitespace-pre-wrap">
                                        {this.state.errorInfo?.componentStack}
                                    </pre>
                                </div>
                            </details>
                        )}
                    </div>
                </div>
            );
        }

        // No error, render children normally
        return this.props.children;
    }
}

export default ErrorBoundary;
