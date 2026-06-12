import Link from 'next/link';

export default function NotFound() {
    return (
        <main className="relative flex min-h-[70vh] items-center justify-center overflow-hidden bg-gradient-to-br from-[#eef6e8] via-[#e8f1df] to-[#dce8cf] px-6">

            {/* Background Blobs */}
            <div className="absolute -top-32 -left-20 h-80 w-80 rounded-full bg-green-200/30 blur-3xl"></div>
            <div className="absolute -bottom-32 -right-20 h-80 w-80 rounded-full bg-green-300/20 blur-3xl"></div>

            <div className="relative w-full max-w-xl rounded-3xl bg-white/70 p-10 text-center shadow-lg backdrop-blur-sm">

                <div className="mb-6 text-7xl">🍴</div>

                <span className="mb-4 inline-block rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-800">
                    404 Error
                </span>

                <h1 className="mt-4 mb-4 text-4xl font-bold text-green-950">
                    Page Not Found
                </h1>

                <p className="mb-8 text-lg leading-relaxed text-gray-600">
                    Looks like this recipe has gone missing.
                    The page you're looking for doesn't exist or may have been moved.
                </p>

                <div className="flex flex-col justify-center gap-4 sm:flex-row">
                    <Link
                        href="/"
                        className="rounded-full bg-green-800 px-8 py-4 font-medium text-white transition hover:bg-green-900"
                    >
                        Back to Home
                    </Link>

                    <Link
                        href="/meals"
                        className="rounded-full border border-green-800 px-8 py-4 font-medium text-green-900 transition hover:bg-white/50"
                    >
                        Browse Meals
                    </Link>
                </div>

            </div>
        </main>
    );
}