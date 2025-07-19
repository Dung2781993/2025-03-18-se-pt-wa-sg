import { TrashIcon } from '@heroicons/react/20/solid';

export default function StudentTable({ students, onSelectStudent, onDeleteStudent }) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white shadow rounded">
        <thead className="bg-gray-100">
          <tr>
            <th className="text-left p-2">Name</th>
            <th className="text-left p-2">Age</th>
            <th className="text-left p-2">Class</th>
            <th className="text-left p-2">City</th>
            <th className="text-left p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {students.map(student => (
            <tr
              key={student.id}
              className="hover:bg-gray-50 cursor-pointer"
              onClick={() => onSelectStudent(student)}
            >
              <td className="p-2">{student.name}</td>
              <td className="p-2">{student.age}</td>
              <td className="p-2">{student.class}</td>
              <td className="p-2">{student.address.city}</td>
              <td className="p-2">
                <button
                  type="button"
                  className="inline-flex items-center gap-x-1.5 rounded-md bg-red-600 px-2.5 py-1.5 text-sm font-semiboldshadow-sm text-white hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                  onClick={(e) => {
                    e.stopPropagation();
                    onDeleteStudent(student.id);
                  }}
                >
                  <TrashIcon className="h-5 w-5" aria-hidden="true" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
