import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Loading from '../components/Loading';

export default function StudentDetail() {
  const { id } = useParams();
  const [student, setStudent] = useState(null);

  useEffect(() => {
    fetch('https://mocki.io/v1/2c0e1482-97c6-4e3d-9445-bc9d17e4ab95')
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((s) => s.id.toString() === id);
        setStudent(found);
      });
  }, [id]);

  if (!student) return <Loading />;

  return (
    <div className="p-6 text-gray-800"> {/* Set text color */}
      <h2 className="text-xl font-bold mb-2">{student.name}</h2>
      <p>Email: {student.email}</p>
      <p>Course: {student.course}</p>
    </div>
  );
}
