'use client';
import Link from 'next/link';

export default function RegisterPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6">Kayıt Ol</h1>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="İsim"
            className="border p-2 rounded"
          />
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
          <button className="bg-green-500 text-white py-2 rounded hover:bg-green-600">
            Kayıt Ol
          </button>
        </form>
        <p className="mt-4 text-sm">
          Zaten hesabın var mı?{' '}
          <Link href="/login" className="text-green-500 hover:underline">
            Giriş Yap
          </Link>
        </p>
      </div>
    </div>
  );
}
