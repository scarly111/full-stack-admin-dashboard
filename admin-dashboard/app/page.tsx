'use client';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
      <div className="bg-white shadow-lg rounded-2xl p-10 text-center max-w-md w-full">
        <h1 className="text-3xl font-bold mb-4">🚀 Admin Dashboard</h1>
        <p className="text-gray-600 mb-8">
          A modern, minimal panel for user and admin management.
        </p>
        <div className="flex flex-col gap-3">
          <Link href="/login">
            <button className="w-full py-2 rounded-xl bg-blue-500 hover:bg-blue-600 text-white transition">
              Login
            </button>
          </Link>
          <Link href="/register">
            <button className="w-full py-2 rounded-xl bg-green-500 hover:bg-green-600 text-white transition">
              Register
            </button>
          </Link>
          <Link href="/dashboard">
            <button className="w-full py-2 rounded-xl bg-purple-500 hover:bg-purple-600 text-white transition">
              Dashboard
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
