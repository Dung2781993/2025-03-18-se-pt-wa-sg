import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-indigo-600 p-4 text-white flex gap-4">
      <Link to="/">Home</Link>
      <Link to="/students">Students</Link>
      <Link to="/courses">Courses</Link>
      <Link to="/login">Login</Link>
    </nav>
  );
}