'use client';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center">
        <h1 className="text-3xl font-bold mb-4">🚀 Admin Dashboard Projesi</h1>
        <p className="text-gray-600 mb-6">
          Hoş geldin! Burada kullanıcı ve admin panellerini yönetebilir, giriş yapabilir ve projeyi keşfedebilirsin.
        </p>

        <div className="flex flex-col gap-4">
          <Link href="/login">
            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-xl">
              Giriş Yap
            </button>
          </Link>
          <Link href="/register">
            <button className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-xl">
              Kayıt Ol
            </button>
          </Link>
          <Link href="/dashboard">
            <button className="w-full bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 rounded-xl">
              Dashboard'a Git
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
