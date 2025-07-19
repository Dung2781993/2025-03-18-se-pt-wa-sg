export default function DoctorTable({ doctors }) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white shadow rounded">
        <thead className="bg-gray-100">
          <tr>
            <th className="text-left p-2">Name</th>
            <th className="text-left p-2">Specialty</th>
          </tr>
        </thead>
        <tbody>
          {doctors.map(doctor => (
            <tr
              key={doctor.id}
            >
              <td className="p-2">{doctor.name}</td>
              <td className="p-2">{doctor.specialty}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
