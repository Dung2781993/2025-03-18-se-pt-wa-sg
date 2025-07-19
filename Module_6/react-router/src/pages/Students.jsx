import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Students() {
  const [students, setStudents] = useState([]);
  
  useEffect(() => {
    axios
      .get('https://mocki.io/v1/2c0e1482-97c6-4e3d-9445-bc9d17e4ab95')
      .then((res) => setStudents(res.data))
      .catch((err) => console.error('Error fetching students:', err));
  }, []);

  return (
    <div className="p-6 text-gray-800">
      <h2 className="text-xl font-semibold mb-4">Student List</h2>
      <ul className="space-y-2">
        {students.map((s) => (
          <li key={s.id} className="border p-2 rounded hover:bg-gray-50">
            <Link to={`/students/${s.id}`} className="hover:underline">
              {s.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
