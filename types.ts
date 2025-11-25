export interface TeamMember {
  id: string;
  name: string;
  role: string;
  email: string;
  phone: string;
  joinDate: string;
  status: 'Active' | 'On Leave';
}

export interface ScheduleEvent {
  id: string;
  title: string;
  date: string; // YYYY-MM-DD
  time: string;
  type: 'Mentoring' | 'Meeting' | 'Consulting';
  host: string;
  status: 'Confirmed' | 'Pending' | 'Cancelled';
}

export interface ResourceItem {
  id: string;
  title: string;
  category: 'Manual' | 'Sales' | 'Policy' | 'Form';
  date: string;
  size: string;
  author: string;
}

export interface Notice {
  id: string;
  title: string;
  date: string;
  isImportant: boolean;
}

export interface AdminLog {
  id: string;
  action: string;
  admin: string;
  timestamp: string;
  ip: string;
}