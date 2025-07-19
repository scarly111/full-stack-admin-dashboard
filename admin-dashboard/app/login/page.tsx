'use client';
import Link from 'next/link';

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6">Giriş Yap</h1>
        <form className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            className="border p-2 rounded"
          />
          <input
            type="password"
            placeholder="Şifre"
            className="border p-2 rounded"
          />
          <button className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
            Giriş Yap
          </button>
        </form>
        <p className="mt-4 text-sm">
          Hesabın yok mu?{' '}
          <Link href="/register" className="text-blue-500 hover:underline">
            Kayıt Ol
          </Link>
        </p>
      </div>
    </div>
  );
}
