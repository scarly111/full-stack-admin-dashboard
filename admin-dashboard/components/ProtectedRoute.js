'use client';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function ProtectedRoute({ children, adminOnly = false }) {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading) {
      if (!user) {
        console.log('No user, redirecting to login');
        router.push('/login');
      } else if (adminOnly && user.role !== 'admin') {
        console.log('Not admin, redirecting to dashboard');
        router.push('/dashboard');
      }
    }
  }, [user, loading, router, adminOnly]);

  if (loading) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  return <>{children}</>;
}
