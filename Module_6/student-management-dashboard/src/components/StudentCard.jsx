export default function StudentCard({ student }) {
  return (
    <div className="bg-white rounded shadow p-4">
      <h2 className="text-xl font-semibold mb-2">{student.name}</h2>
      <p><strong>Age:</strong> {student.age}</p>
      <p><strong>Class:</strong> {student.class}</p>
      <p><strong>City:</strong> {student.address.city}</p>
      <p><strong>Street:</strong> {student.address.street}</p>
      <div className="mt-4">
        <h3 className="font-semibold">Grades</h3>
        <ul className="list-disc list-inside">
          {Object.entries(student.grades).map(([subject, score]) => (
            <li key={subject}>{subject}: {score}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
