class Student {

  constructor(firstName, lastName, studentID, address, phoneNumber, email, campus) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.studentID = studentID;
    this.address = address;
    this.phoneNumber = phoneNumber;
    this.email = email;
  }
}

class Staff {
  constructor(firstName, lastName, studentID, address, phoneNumber, email, campus) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.studentID = studentID;
    this.address = address;
    this.phoneNumber = phoneNumber;
    this.email = email;
  }
}


class Librarian {} // Child

class Reseracher {}

class FinanceOfficer {}

// SQL


class BaseClass { // Parent

  constructor(firstName, lastName, studentID, address, phoneNumber, email, campus, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.studentID = studentID;
    this.address = address;
    this.phoneNumber = phoneNumber;
    this.email = email;
    this.campus = campus;
    this.dob = dob;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  // Accessor method
  get department() {
    return this._department;
  }

  get dob() {
    return this._dob;
  }

  set dob(value) {
    this._dob = value;
  }

}

class Lecturer extends BaseClass {
  constructor(publication) {
    super(firstName, lastName, studentID, address, phoneNumber, email, campus, dob);
    this.publication = publication;
    this._department = "Finance";
  }

  getCampus() {
    return this.campus;
  }

  getPublication() {
    return this.publication;
  }
}


// Inheritance =>