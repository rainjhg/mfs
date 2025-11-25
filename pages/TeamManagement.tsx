import React, { useState } from 'react';
import { Search, Plus, MoreHorizontal, Mail, Phone, Calendar } from 'lucide-react';
import { MOCK_TEAM, IMAGES } from '../constants';
import { SectionHeader } from '../components/Widgets';
import { TeamMember } from '../types';

const TeamManagement: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [members] = useState<TeamMember[]>(MOCK_TEAM);

  const filteredMembers = members.filter(member => 
    member.name.includes(searchTerm) || 
    member.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header with Background */}
      <div className="relative rounded-xl overflow-hidden h-48 bg-gray-900 text-white shadow-md">
         <img src={IMAGES.team} alt="Team Workspace" className="w-full h-full object-cover opacity-40" />
         <div className="absolute inset-0 flex flex-col justify-center px-8">
            <h1 className="text-3xl font-bold mb-2">팀원 관리</h1>
            <p className="text-gray-200">팀원 명단을 조회하고 상세 정보를 관리합니다.</p>
         </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
        <div className="relative w-full sm:w-96">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input 
            type="text" 
            placeholder="이름 또는 직책 검색..." 
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0090DA] focus:border-transparent"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-2 bg-[#0090DA] text-white font-medium rounded-lg hover:bg-blue-600 transition-colors shadow-sm">
          <Plus size={18} />
          팀원 추가
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredMembers.map((member) => (
          <div key={member.id} className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col">
            <div className="flex justify-between items-start mb-4">
              <div className={`px-2 py-1 rounded text-xs font-semibold ${
                member.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'
              }`}>
                {member.status === 'Active' ? '재직중' : '휴직'}
              </div>
              <button className="text-gray-400 hover:text-gray-600">
                <MoreHorizontal size={20} />
              </button>
            </div>
            
            <div className="flex flex-col items-center text-center mb-6">
              <div className="w-20 h-20 rounded-full bg-gray-100 mb-4 flex items-center justify-center text-2xl font-bold text-gray-400">
                {member.name.slice(0, 1)}
              </div>
              <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
              <p className="text-[#0090DA] font-medium text-sm">{member.role}</p>
            </div>

            <div className="space-y-3 mt-auto">
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <Mail size={16} className="text-gray-400" />
                <span className="truncate">{member.email}</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <Phone size={16} className="text-gray-400" />
                <span>{member.phone}</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <Calendar size={16} className="text-gray-400" />
                <span>입사: {member.joinDate}</span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-100 flex gap-2">
              <button className="flex-1 py-2 text-sm text-gray-600 font-medium hover:bg-gray-50 rounded-lg transition-colors border border-gray-200">
                프로필
              </button>
              <button className="flex-1 py-2 text-sm text-[#0090DA] font-medium hover:bg-blue-50 rounded-lg transition-colors border border-[#0090DA]">
                메시지
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamManagement;