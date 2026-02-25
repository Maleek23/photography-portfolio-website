"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="min-h-screen bg-background light:bg-white flex items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="text-primary text-[4rem] font-[700] leading-none mb-4">Oops</h1>
        <h2 className="text-white light:text-gray-900 text-[1.5rem] font-[600] uppercase mb-4">
          Something went wrong
        </h2>
        <p className="text-customGrayAlt light:text-gray-600 text-[1rem] mb-8 leading-relaxed">
          An unexpected error occurred. Please try again.
        </p>
        <button
          onClick={() => reset()}
          className="bg-primary hover:bg-primary/90 text-white font-[600] px-8 py-4 uppercase text-[0.875rem] transition-all hover:scale-105"
        >
          Try Again
        </button>
      </div>
    </main>
  );
}
