export default function FilterBar({ selectedClass, availableClasses, onChangeClass }) {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">Filter by Class:</label>
      <select
        className="w-full p-2 border rounded shadow"
        value={selectedClass}
        onChange={e => onChangeClass(e.target.value)}
      >
        {availableClasses.map(c => (
          <option key={c} value={c}>{c}</option>
        ))}
      </select>
    </div>
  );
}
