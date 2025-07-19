// src/components/Dashboard.jsx
import { useEffect, useState } from 'react';
import FilterBar from './FilterBar';
import StudentTable from './StudentTable';
import StudentCard from './StudentCard';
import Loading from './common/Loading';
import axios from 'axios';
import DoctorTable from './DoctorTable';
import FilterDoctorSpecialtyBar from './FilterDoctorSpecialtyBar';

export default function Dashboard() {
  const [students, setStudents] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [doctorSepecialtyOptions, setDoctorSepecialtyOptions] = useState([]);
  const [filteredSpecialty, setFilteredSpecialty] = useState('All');
  const [filteredClass, setFilteredClass] = useState('All');
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('');
  const [viewType, setViewType] = useState('table');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [formData, setFormData] = useState({ name: '', specialty: '', email: '', phone: '' });
  const [formUpdatedData, setformUpdatedData] = useState({ name: '', specialty: '', email: '', phone: '' });

  useEffect(() => {
    fetchStudentData();
    // fetchDoctorData();
    // fetchDoctorTypeSpecialty();
  }, []);

  const fetchStudentData = async () => {
    try {
      setLoading(true);
      const response = await axios.get('https://mocki.io/v1/088a8c05-fd3e-47f2-a09c-7d1495b1015e');
      if (response.status == 200 && response.data) {
        setStudents(response.data);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      setError(error);
      console.error('Error fetching data from API:', error);
    }
  };

  const fetchDoctorData = async (specialty) => {
    try {
      setLoading(true);
      let endpoint = 'http://localhost:8000/api/clinic/doctors';
      if (specialty && specialty !== 'All') {
        endpoint += `?specialty=${encodeURIComponent(specialty)}`;
      }

      const response = await axios.get(endpoint);
      if (response.status == 200 && response.data) {
        setDoctors(response.data);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      setError(error);
      console.error('Error fetching doctor data from API:', error);
    }
  };

  const fetchDoctorTypeSpecialty = async () => {
    try {
      setLoading(true);
      const response = await axios.get('http://localhost:8000/api/clinic/doctors-type-specialty');
      if (response.status == 200 && response.data) {
        setDoctorSepecialtyOptions(response.data);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      setError(error);
      console.error('Error fetching doctor data from API:', error);
    }
  };

  const specialties = ['All', ...doctorSepecialtyOptions];
  const classes = ['All', ...new Set(students.map(s => s.class))];

  const filteredStudents = students
    .filter(s => filteredClass === 'All' || s.class === filteredClass)
    .filter(s => s.name.toLowerCase().includes(searchQuery.toLowerCase()));

  const sortedStudents = [...filteredStudents]
    .sort((a, b) => {
      if (sortBy === 'age') return a.age - b.age;
      if (sortBy === 'math') return b.grades.math - a.grades.math;
      if (sortBy === 'science') return b.grades.science - a.grades.science;
      return 0;
    });

  const handleDelete = (id) => {
    setStudents(prev => prev.filter(student => student.id !== id));
    if (selectedStudent?.id === id) setSelectedStudent(null);
  };

  const selectFilteredSpecialty = (specialty) => {
    fetchDoctorData(specialty);
    setFilteredSpecialty(specialty);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    // Client validation should be done here (data sanitation)

    try {
      // Using axios to post the new doctor data
      setLoading(true);
      const response = await axios.post('http://localhost:8000/api/clinic/doctors', formData);
      console.log('Response from server:', response);
      if (response && response.status === 201) {
        console.log('Doctor added successfully:', response.data);
        setFormData({ name: '', specialty: '', email: '', phone: '' }); // Reset form
        setLoading(false);
      }
    } catch (error) {
      console.error('Error adding doctor:', error);
      setError(error);
      setLoading(false);
    }
  };

  const handleFormUpdate = async (e) => {
    e.preventDefault(); 
    console.log(formUpdatedData);
    const id = 64; 
    try {
      // Using axios to post the new doctor data
      setLoading(true);
      const response = await axios.put(`http://localhost:8000/api/clinic/doctor/${id}`, formUpdatedData);
      console.log('Response from server:', response);
      if (response && response.status === 200) {
        console.log('Doctor updated successfully:', response.data);
        setFormData({ name: '', specialty: '', email: '', phone: '' }); // Reset form
        setLoading(false);
      }
    } catch (error) {
      console.error('Error updating doctor:', error);
      setError(error);
      setLoading(false);
    }
  }

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <div className="text-center text-red-500">Error fetching data: {error.message}</div>;
  }

  return (
    <div className="flex flex-col md:flex-row gap-4">
      <div className="flex-1">
        <div className="grid gap-4">
          <div className="bg-white rounded shadow p-4">
            <input
              type="text"
              placeholder="Search by name"
              className="w-full p-2 border rounded mb-4"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />

            <select
              className="mb-4 p-2 border rounded"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="">Sort By</option>
              <option value="age">Age</option>
              <option value="math">Math Grade</option>
              <option value="science">Science Grade</option>
            </select>
            <FilterBar
              selectedClass={filteredClass}
              availableClasses={classes}
              onChangeClass={setFilteredClass}
            />

            <button
              className="mt-2 mb-2 p-2 bg-blue-600 text-white font-semibold rounded shadow hover:bg-blue-500"
              onClick={() => setViewType(viewType === 'table' ? 'card' : 'table')}
            >
              Switch to {viewType === 'table' ? 'Card' : 'Table'} View
            </button>
          </div>

          <div className="bg-white p-4 rounded shadow">
            {viewType === 'table' ? (
              <StudentTable
                students={sortedStudents}
                onSelectStudent={setSelectedStudent}
                onDeleteStudent={handleDelete}
              />
            ) : (
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {sortedStudents.map(student => (
                  <StudentCard key={student.id} student={student} />
                ))}
              </div>
            )}
          </div>

          {viewType === 'table' && selectedStudent && (
            <div className="bg-white p-4 rounded shadow">
              <StudentCard student={selectedStudent} />
            </div>
          )}

          <div className="bg-white rounded shadow p-4">
            <FilterDoctorSpecialtyBar
              selectedSpecialty={filteredSpecialty}
              availableSpecialties={specialties}
              onChangeSpecialty={selectFilteredSpecialty}
            />
          </div>

          <div className="bg-white p-4 rounded shadow">
            <DoctorTable doctors={doctors} />
          </div>

          <div className="bg-white p-6 rounded shadow">
            <h2 className="text-base font-semibold text-gray-900 mb-4">Submit New Doctor</h2>
            <form onSubmit={handleFormSubmit} className="grid grid-cols-1 gap-y-6 sm:grid-cols-6 sm:gap-x-6">
              <div className="sm:col-span-3">
                <label className="block text-sm font-medium text-gray-700">Doctor Name</label>
                <input
                  type="text"
                  placeholder="Enter name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  required
                />
              </div>
              <div className="sm:col-span-3">
                <label className="block text-sm font-medium text-gray-700">Specialty</label>
                <input
                  type="text"
                  placeholder="Enter specialty"
                  value={formData.specialty}
                  onChange={(e) => setFormData({ ...formData, specialty: e.target.value })}
                  className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  required
                />
              </div>
              <div className="sm:col-span-3">
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  placeholder="Enter email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  required
                />
              </div>
              <div className="sm:col-span-3">
                <label className="block text-sm font-medium text-gray-700">Phone (include country code)</label>
                <input
                  type="tel"
                  placeholder="e.g. +61 400 000 000"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  required
                />
              </div>
              <div className="sm:col-span-6">
                <button
                  type="submit"
                  className="mt-4 inline-flex justify-center rounded-md border border-transparent bg-green-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>

          {/* Doctor Update */}
          <div className="bg-white p-6 rounded shadow">
            <h2 className="text-base font-semibold text-gray-900 mb-4">Update Doctor Details</h2>
            <form onSubmit={handleFormUpdate} className="grid grid-cols-1 gap-y-6 sm:grid-cols-6 sm:gap-x-6">
              <div className="sm:col-span-3">
                <label className="block text-sm font-medium text-gray-700">Doctor Name</label>
                <input
                  type="text"
                  placeholder="Enter name"
                  value={formUpdatedData.name}
                  onChange={(e) => setformUpdatedData({ ...formUpdatedData, name: e.target.value })}
                  className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  required
                />
              </div>
              <div className="sm:col-span-3">
                <label className="block text-sm font-medium text-gray-700">Specialty</label>
                <input
                  type="text"
                  placeholder="Enter specialty"
                  value={formUpdatedData.specialty}
                  onChange={(e) => setformUpdatedData({ ...formUpdatedData, specialty: e.target.value })}
                  className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  required
                />
              </div>
              <div className="sm:col-span-3">
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  placeholder="Enter email"
                  value={formUpdatedData.email}
                  onChange={(e) => setformUpdatedData({ ...formUpdatedData, email: e.target.value })}
                  className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  required
                />
              </div>
              <div className="sm:col-span-3">
                <label className="block text-sm font-medium text-gray-700">Phone (include country code)</label>
                <input
                  type="tel"
                  placeholder="e.g. +61 400 000 000"
                  value={formUpdatedData.phone}
                  onChange={(e) => setformUpdatedData({ ...formUpdatedData, phone: e.target.value })}
                  className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  required
                />
              </div>
              <div className="sm:col-span-6">
                <button
                  type="submit"
                  className="mt-4 inline-flex justify-center rounded-md border border-transparent bg-green-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="md:w-1/3">
        {selectedStudent && <StudentCard student={selectedStudent} />}
      </div>
    </div>
  );
}
