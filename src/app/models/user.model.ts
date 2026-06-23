export interface User {
  username: string;
  fullName: string;
  email: string;
  phone: string;
  role: 'Admin' | 'Teacher' | 'Student';
  gender: 'Male' | 'Female' | 'Other';
  status: 'Active' | 'Inactive' | 'Deleted';
  initials: string;
}
