/**
 * @fileoverview 404 Not Found Page
 * @description Displays a user-friendly error page when a route is not found
 */

/**
 * NotFound Component
 * 
 * Renders a 404 error page with:
 * - Sad face icon
 * - "404" heading
 * - "Page Not Found" message
 * - "Back to Home" button
 * 
 * @returns {JSX.Element} The rendered 404 page
 */
export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-dark p-5">
            <div className="max-w-md w-full text-center">
                {/* 404 Icon */}
                <div className="mb-6">
                    <svg
                        className="mx-auto h-24 w-24 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                </div>

                {/* Error Message */}
                <h1
                    className="text-white text-5xl md:text-6xl mb-4 uppercase"
                    style={{ fontFamily: 'var(--font-bebas-neue)', fontWeight: 400 }}
                >
                    404
                </h1>

                <p
                    className="text-light-gray text-xl md:text-2xl mb-8"
                    style={{ fontFamily: 'var(--font-inter)', fontWeight: 400 }}
                >
                    Page Not Found
                </p>

                {/* Back to Home Button */}
                <a
                    href="/"
                    className="inline-block bg-white hover:bg-gray-100 text-dark font-semibold px-8 py-4 transition-colors duration-300 uppercase tracking-wider"
                    style={{ fontFamily: 'var(--font-inter)' }}
                >
                    Back to Home
                </a>
            </div>
        </div>
    );
}
