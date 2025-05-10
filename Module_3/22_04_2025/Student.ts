interface Student {
  id: number;
  name: string;
  age: number;
  major: string;
  gpa: number;
  enrolledCourses: string[]; 
  isActive: boolean;
  graduationDate?: Date;
  advisor?: string;
  createdAt: Date;
  updatedAt: Date;
  isDeleted: boolean;
}