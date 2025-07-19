import ProtectedRoute from '@/components/ProtectedRoute';

export default function DashboardPage() {
  return (
    <ProtectedRoute>
      <div>
        <h1>Dashboard</h1>
        <p>Hoşgeldin! Giriş yaptın 🎉</p>
      </div>
    </ProtectedRoute>
  );
}
