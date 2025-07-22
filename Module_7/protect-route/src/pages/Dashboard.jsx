import { useAuth } from '../hooks/useAuth';

export default function Dashboard() {
  const { logout } = useAuth();

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Welcome to your dashboard!</h2>
      <button className="mt-4 bg-red-500 text-white px-4 py-2" onClick={logout}>
        Logout
      </button>
    </div>
  );
}
