'use client';
import { useAuth } from '@/context/AuthContext';
import ProtectedRoute from '@/components/ProtectedRoute';
import Link from 'next/link';

export default function DashboardPage() {
  const { user } = useAuth();

  return (
    <ProtectedRoute>
      <main className="flex flex-col min-h-screen bg-gradient-to-br from-purple-100 to-purple-300">
        <div className="flex-grow flex items-center justify-center p-4">
          <div className="bg-white shadow-xl rounded-3xl p-8 max-w-2xl w-full">
            {/* Header */}
            <div className="flex flex-col items-center mb-6">
              <img
                src={`https://api.dicebear.com/7.x/initials/svg?seed=${user?.name || 'User'}`}
                alt="Avatar"
                className="w-20 h-20 rounded-full mb-3 shadow"
              />
              <h1 className="text-3xl font-bold">Welcome, {user?.name}!</h1>
              <p className="text-gray-600">Last login: 5 minutes ago</p>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-purple-200 p-4 rounded-xl shadow text-center">
                <h2 className="text-xl font-semibold mb-2">Role</h2>
                <p className="text-lg">{user?.role}</p>
              </div>

              <div className="bg-purple-200 p-4 rounded-xl shadow text-center">
                <h2 className="text-xl font-semibold mb-2">Total Users</h2>
                <p className="text-lg">123</p>
              </div>

              <div className="bg-purple-200 p-4 rounded-xl shadow text-center">
                <h2 className="text-xl font-semibold mb-2">Edit Profile</h2>
                <button className="bg-purple-500 text-white px-4 py-2 rounded-lg mt-2 hover:bg-purple-600 transition">
                  Edit
                </button>
              </div>

              <div className="bg-purple-200 p-4 rounded-xl shadow text-center">
                <h2 className="text-xl font-semibold mb-2">Logout</h2>
                <button
                  onClick={() => {
                    localStorage.removeItem('token');
                    window.location.href = '/login';
                  }}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg mt-2 hover:bg-red-600 transition"
                >
                  Logout
                </button>
              </div>
            </div>

            {/* Admin Panel */}
            {user?.role === 'admin' && (
              <Link href="/admin">
                <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded-xl font-semibold transition mb-4">
                  Go to Admin Panel
                </button>
              </Link>
            )}

            {/* Notifications */}
            <div className="bg-blue-100 text-blue-800 p-3 rounded-xl shadow text-center text-sm">
              New features coming soon! Dark mode, notifications, analytics, and more.
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center text-sm text-gray-600 p-4">
          © {new Date().getFullYear()} scarly111 Dashboard. All rights reserved.
        </footer>
      </main>
    </ProtectedRoute>
  );
}
