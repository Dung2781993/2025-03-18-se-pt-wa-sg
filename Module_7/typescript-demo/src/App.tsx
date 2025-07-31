
import { useQuery } from '@tanstack/react-query';
import { getUsers } from './api/getUsers';
import Loading from './components/Loading.tsx'


function App() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['users'],
    queryFn: getUsers,
  });
  console.log(data);

  if (isLoading) return <Loading />
  if (error instanceof Error) return <p>Error: {error.message}</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">👥 User List</h1>
      <ul className="space-y-2">
        {data?.map(user => (
          <li key={user.id} className="border p-2 rounded">
            <p><strong>{user.name}</strong></p>
            <p className="text-gray-500">{user.email}</p>
            <p className="text-gray-500">{user.address.city}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
