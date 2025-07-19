export default function FilterDoctorSpecialtyBar({ selectedSpecialty, availableSpecialties, onChangeSpecialty }) {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">Filter by Specialty:</label>
      <select
        className="w-full p-2 border rounded shadow"
        value={selectedSpecialty}
        onChange={e => onChangeSpecialty(e.target.value)}
      >
        {availableSpecialties.map((value, index) => (
          <option key={index} value={value}>
            {value}
          </option>
        ))}
      </select>
    </div>
  );
}
