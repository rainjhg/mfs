import { TeamMember, ScheduleEvent, ResourceItem, Notice, AdminLog } from './types';
import { 
  Users, 
  Calendar, 
  FileText, 
  Settings, 
  LayoutDashboard,
  Shield,
  Clock,
  Briefcase
} from 'lucide-react';

export const APP_NAME = "MetLife F.S. Kwon Team";
export const TEAM_NAME = "권나경 팀";

export const COLORS = {
  primary: '#0090DA',
  secondary: '#333333',
  background: '#F5F7FA',
  success: '#10B981',
  warning: '#F59E0B',
  danger: '#EF4444',
};

export const IMAGES = {
  hero: "https://loremflickr.com/1600/900/metlife_building,skyscraper,architecture",
  team: "https://loremflickr.com/1600/900/office_desk,workspace",
  schedule: "https://loremflickr.com/1600/900/planner,calendar",
  resources: "https://loremflickr.com/1600/900/documents,archive",
};

export const NAV_ITEMS = [
  { label: '대시보드', path: '/', icon: LayoutDashboard },
  { label: '팀원 관리', path: '/team-management', icon: Users },
  { label: '일정/예약', path: '/schedule', icon: Calendar },
  { label: '자료실', path: '/resources', icon: FileText },
  { label: '관리자 설정', path: '/admin-settings', icon: Settings },
];

// Mock Data

export const MOCK_TEAM: TeamMember[] = [
  { id: '1', name: '권나경', role: 'Team Leader', email: 'nk.kwon@metlife.com', phone: '010-1234-5678', joinDate: '2018-03-01', status: 'Active' },
  { id: '2', name: '김철수', role: 'Senior Consultant', email: 'cs.kim@metlife.com', phone: '010-2345-6789', joinDate: '2019-05-15', status: 'Active' },
  { id: '3', name: '이영희', role: 'Consultant', email: 'yh.lee@metlife.com', phone: '010-3456-7890', joinDate: '2020-11-02', status: 'On Leave' },
  { id: '4', name: '박민수', role: 'Junior Consultant', email: 'ms.park@metlife.com', phone: '010-4567-8901', joinDate: '2021-08-20', status: 'Active' },
  { id: '5', name: '최지은', role: 'Consultant', email: 'je.choi@metlife.com', phone: '010-5678-9012', joinDate: '2022-01-10', status: 'Active' },
];

export const MOCK_SCHEDULE: ScheduleEvent[] = [
  { id: '1', title: '주간 팀 회의', date: '2023-10-25', time: '09:00', type: 'Meeting', host: '권나경', status: 'Confirmed' },
  { id: '2', title: '신규 상품 교육', date: '2023-10-26', time: '14:00', type: 'Meeting', host: '본사 교육팀', status: 'Confirmed' },
  { id: '3', title: '1:1 멘토링 (김철수)', date: '2023-10-27', time: '10:00', type: 'Mentoring', host: '권나경', status: 'Pending' },
  { id: '4', title: '고객 VIP 세미나', date: '2023-10-28', time: '11:00', type: 'Consulting', host: '이영희', status: 'Confirmed' },
];

export const MOCK_RESOURCES: ResourceItem[] = [
  { id: '1', title: '2023년 4분기 영업 가이드', category: 'Sales', date: '2023-10-01', size: '2.5 MB', author: '권나경' },
  { id: '2', title: '변액보험 자격시험 요약', category: 'Manual', date: '2023-09-15', size: '1.2 MB', author: '교육팀' },
  { id: '3', title: '신규 고객 상담 양식', category: 'Form', date: '2023-08-20', size: '0.5 MB', author: '김철수' },
  { id: '4', title: '10월 프로모션 안내', category: 'Policy', date: '2023-10-05', size: '3.1 MB', author: '마케팅팀' },
  { id: '5', title: '고객 관리 엑셀 템플릿', category: 'Form', date: '2023-07-11', size: '1.0 MB', author: '박민수' },
];

export const MOCK_NOTICES: Notice[] = [
  { id: '1', title: '10월 마감 일정 안내', date: '2023-10-20', isImportant: true },
  { id: '2', title: '사내 보안 시스템 점검 공지', date: '2023-10-18', isImportant: false },
  { id: '3', title: '신규 팀원 환영회 일정', date: '2023-10-15', isImportant: false },
];

export const MOCK_LOGS: AdminLog[] = [
  { id: '1', action: 'Login Success', admin: '권나경', timestamp: '2023-10-24 08:55:12', ip: '192.168.0.1' },
  { id: '2', action: 'Update Member Info', admin: '권나경', timestamp: '2023-10-24 09:10:05', ip: '192.168.0.1' },
  { id: '3', action: 'Upload Resource', admin: '김철수', timestamp: '2023-10-23 15:30:22', ip: '192.168.0.15' },
];