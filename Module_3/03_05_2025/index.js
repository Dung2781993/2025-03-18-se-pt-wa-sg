const originalStudents = [
  {
    id: 1,
    name: "Alice Nguyen",
    age: 20,
    score: 85,
    email: "alice.nguyen@example.com",
    gender: "female",
    major: "Computer Science",
  },
  {
    id: 2,
    name: "Benjamin Carter",
    age: 22,
    score: 72,
    email: "ben.carter@example.com",
    gender: "male",
    major: "Mathematics",
  },
  {
    id: 3,
    name: "Chloe Zhang",
    age: 19,
    score: 90,
    email: "chloe.zhang@example.com",
    gender: "female",
    major: "Design",
  },
  {
    id: 4,
    name: "Daniel Li",
    age: 21,
    score: 65,
    email: "daniel.li@example.com",
    gender: "male",
    major: "Business",
  },
  {
    id: 5,
    name: "Emma Vo",
    age: 23,
    score: 78,
    email: "emma.vo@example.com",
    gender: "female",
    major: "Psychology",
  },
  {
    id: 6,
    name: "Franklin White",
    age: 20,
    score: 82,
    email: "frank.white@example.com",
    gender: "male",
    major: "Engineering",
  },
  {
    id: 7,
    name: "Grace Lin",
    age: 24,
    score: 88,
    email: "grace.lin@example.com",
    gender: "female",
    major: "Nursing",
  },
  {
    id: 8,
    name: "Henry Wang",
    age: 21,
    score: 60,
    email: "henry.wang@example.com",
    gender: "male",
    major: "Philosophy",
  },
  {
    id: 9,
    name: "Isabella Chen",
    age: 22,
    score: 95,
    email: "isabella.chen@example.com",
    gender: "female",
    major: "Biotechnology",
  },
  {
    id: 10,
    name: "Jordan Lam",
    age: 20,
    score: 70,
    email: "jordan.lam@example.com",
    gender: "non-binary",
    major: "Sociology",
  },
  {
    id: 11,
    name: "Kevin Le",
    age: 18,
    score: 55,
    email: "kevin.le@example.com",
    gender: "male",
    major: "Economics",
  },
  {
    id: 12,
    name: "Laura Smith",
    age: 25,
    score: 83,
    email: "laura.smith@example.com",
    gender: "female",
    major: "Education",
  },
  {
    id: 13,
    name: "Michael Huynh",
    age: 22,
    score: 68,
    email: "michael.huynh@example.com",
    gender: "male",
    major: "Computer Science",
  },
  {
    id: 14,
    name: "Nina Quach",
    age: 21,
    score: 91,
    email: "nina.quach@example.com",
    gender: "female",
    major: "Design",
  },
  {
    id: 15,
    name: "Olivia Zhou",
    age: 20,
    score: 74,
    email: "olivia.zhou@example.com",
    gender: "female",
    major: "Law",
  },
  {
    id: 16,
    name: "Phuong Tran",
    age: 23,
    score: 88,
    email: "phuong.tran@example.com",
    gender: "non-binary",
    major: "Political Science",
  },
  {
    id: 17,
    name: "Qi Liu",
    age: 21,
    score: 66,
    email: "qi.liu@example.com",
    gender: "male",
    major: "Chemistry",
  },
  {
    id: 18,
    name: "Rachel Gao",
    age: 22,
    score: 92,
    email: "rachel.gao@example.com",
    gender: "female",
    major: "Biomedical Science",
  },
  {
    id: 19,
    name: "Samuel Tan",
    age: 19,
    score: 61,
    email: "samuel.tan@example.com",
    gender: "male",
    major: "Architecture",
  },
  {
    id: 20,
    name: "Tracy Cooper",
    age: 24,
    score: 98,
    email: "tracy.cooper@example.com",
    gender: "female",
    major: "Data Science",
  },
];
let students = originalStudents;

// 2. Filter Utilities
function filterByScore(min = 0, max = 100) {
  return students.filter((s) => s.score >= min && s.score <= max);
}

function filterByGender(gender) {
  return students.filter((s) => s.gender === gender);
}

function filterByMajor(major) {
  return students.filter((s) => s.major === major);
}

function filterByAgeRange(minAge = 0, maxAge = 100) {
  return students.filter((s) => s.age >= minAge && s.age <= maxAge);
}

function applyFilters({ gender, major, scoreRange, ageRange }) {
  return students.filter((s) => {
    const matchGender = gender ? s.gender === gender : true;
    const matchMajor = major ? s.major === major : true;
    const matchScore = scoreRange
      ? s.score >= scoreRange.min && s.score <= scoreRange.max
      : true;
    const matchAge = ageRange
      ? s.age >= ageRange.min && s.age <= ageRange.max
      : true;
    return matchGender && matchMajor && matchScore && matchAge;
  });
}

function searchByNameOrEmail(query) {
  const q = query.toLowerCase();
  return students.filter(
    (s) => s.name.toLowerCase().includes(q) || s.email.toLowerCase().includes(q)
  );
}

function populateMajors() {
  const majors = [...new Set(students.map((s) => s.major))];
  const majorSelect = document.getElementById("majorFilter");
  majors.forEach((major) => {
    const opt = document.createElement("option");
    opt.value = major;
    opt.textContent = major;
    majorSelect.appendChild(opt);
  });
}

function renderStudents(list) {
  const container = document.getElementById("studentList");
  const template = document.getElementById("studentCardTemplate");

  container.innerHTML = ""; // Reset the container - Reset the student list

  if (list.length === 0) {
    container.innerHTML = '<div class="col">No students found.</div>';
    return;
  }

  list.forEach((student) => {
    const clone = template.content.cloneNode(true);
    clone.querySelector(".student-name").textContent = student.name;
    clone.querySelector(".student-age").textContent = student.age;
    clone.querySelector(".student-major").textContent = student.major;
    clone.querySelector(".student-score").textContent = student.score;
    container.appendChild(clone);
  });
}

function handleFilter() {
  const gender = document.getElementById("genderFilter").value;
  const major = document.getElementById("majorFilter").value;
  const minScore = parseInt(document.getElementById("minScore").value) || 0;
  const maxScore = parseInt(document.getElementById("maxScore").value) || 100;
  const minAge = parseInt(document.getElementById("minAge").value) || 0;
  const maxAge = parseInt(document.getElementById("maxAge").value) || 100;

  const filtered = applyFilters({
    gender,
    major,
    scoreRange: { min: minScore, max: maxScore },
    ageRange: { min: minAge, max: maxAge },
  }); // Return the filtered students

  renderStudents(filtered);
}

populateMajors();
renderStudents(students);
