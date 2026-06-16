'use client';

import Link from 'next/link';

interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorPageProps) {
    return (
        <main className="relative flex min-h-[70vh] items-center justify-center overflow-hidden bg-linear-to-br from-[#eef6e8] via-[#e8f1df] to-[#dce8cf] px-6">

            {/* Background Blobs */}
            <div className="absolute -top-32 -left-20 h-80 w-80 rounded-full bg-green-200/30 blur-3xl"></div>
            <div className="absolute -bottom-32 -right-20 h-80 w-80 rounded-full bg-green-300/20 blur-3xl"></div>

            <div className="relative w-full max-w-xl rounded-3xl bg-white/70 p-10 text-center shadow-lg backdrop-blur-sm">
                <div className="mb-6 text-6xl">🍽️</div>

                <h1 className="mb-4 text-4xl font-bold text-green-950">
                    Something Went Wrong
                </h1>

                <p className="mb-8 text-lg text-gray-600">
                    We couldn't load the meal information right now.
                    Please try again in a moment.
                </p>

                <div className="flex flex-col justify-center gap-4 sm:flex-row">
                    <button
                        onClick={() => reset()}
                        className="rounded-full bg-green-800 px-8 py-4 font-medium text-white transition hover:bg-green-900"
                    >
                        Try Again
                    </button>

                    <Link
                        href="/"
                        className="rounded-full border border-green-800 px-8 py-4 font-medium text-green-900 transition hover:bg-white/50"
                    >
                        Back to Home
                    </Link>
                </div>

                {process.env.NODE_ENV === 'development' && error?.message && (
                    <p className="mt-8 rounded-xl bg-red-50 p-4 text-sm text-red-600">
                        {error.message}
                    </p>
                )}
            </div>
        </main>
    );
}