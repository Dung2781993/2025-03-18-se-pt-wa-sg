export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <form className="w-full max-w-md space-y-4 bg-white p-6 rounded shadow">
        <h2 className="text-xl font-bold text-center">Login</h2>
        <input
          className="w-full p-2 border rounded"
          type="text"
          placeholder="Username"
        />
        <input
          className="w-full p-2 border rounded"
          type="password"
          placeholder="Password"
        />
        <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded">
          Login
        </button>
      </form>
    </div>
  );
}
