import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Calendar, FileText, ArrowRight, TrendingUp, AlertCircle, Clock } from 'lucide-react';
import { MOCK_NOTICES, MOCK_SCHEDULE, IMAGES } from '../constants';
import { StatCard } from '../components/Widgets';

const MainPage: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div 
        className="relative rounded-2xl overflow-hidden text-white shadow-lg min-h-[280px] flex items-center"
      >
        <div className="absolute inset-0 z-0">
          <img src={IMAGES.hero} alt="Office" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0090DA]/90 to-[#0090DA]/40 mix-blend-multiply" />
          <div className="absolute inset-0 bg-black/20" />
        </div>
        
        <div className="relative z-10 p-8 md:p-12 max-w-2xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
            효율적인 성공을 위한<br/>권나경 팀 통합 매니지먼트
          </h1>
          <p className="text-lg text-blue-50 mb-8 opacity-90">
            팀원 관리, 일정 조율, 자료 공유를 한곳에서.<br/>
            체계적인 시스템으로 업무 효율을 극대화하세요.
          </p>
          <div className="flex gap-4">
            <Link to="/schedule" className="px-6 py-3 bg-white text-[#0090DA] font-semibold rounded-lg hover:bg-gray-50 transition-colors shadow-lg">
              일정 확인하기
            </Link>
            <Link to="/resources" className="px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">
              자료실 바로가기
            </Link>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          title="총 팀원" 
          value="12명" 
          trend="+2명 (이번 달)" 
          icon={Users} 
          colorClass="bg-blue-500 text-blue-600"
        />
        <StatCard 
          title="이번 주 일정" 
          value="8건" 
          trend="예정된 미팅" 
          icon={Calendar} 
          colorClass="bg-green-500 text-green-600"
        />
        <StatCard 
          title="신규 자료" 
          value="24건" 
          trend="지난 7일간 업데이트" 
          icon={FileText} 
          colorClass="bg-purple-500 text-purple-600"
        />
        <StatCard 
          title="목표 달성률" 
          value="85%" 
          trend="전월 대비 12% 상승" 
          icon={TrendingUp} 
          colorClass="bg-orange-500 text-orange-600"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Notice Board */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
              <AlertCircle size={20} className="text-[#0090DA]" />
              공지사항 & 알림
            </h3>
            <button className="text-sm text-gray-500 hover:text-[#0090DA]">전체보기</button>
          </div>
          <div className="space-y-4">
            {MOCK_NOTICES.map((notice) => (
              <div key={notice.id} className="flex items-start gap-4 p-4 rounded-lg bg-gray-50 border border-gray-100 hover:bg-gray-100 transition-colors cursor-pointer">
                <div className={`w-2 h-2 mt-2 rounded-full ${notice.isImportant ? 'bg-red-500' : 'bg-gray-400'}`} />
                <div className="flex-1">
                  <p className="font-medium text-gray-900">{notice.title}</p>
                  <p className="text-sm text-gray-500 mt-1">{notice.date}</p>
                </div>
                <ArrowRight size={16} className="text-gray-400 mt-1" />
              </div>
            ))}
          </div>
        </div>

        {/* Quick Schedule */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
              <Clock size={20} className="text-[#0090DA]" />
              오늘의 일정
            </h3>
            <Link to="/schedule" className="text-sm text-[#0090DA] font-medium hover:underline">캘린더로 이동</Link>
          </div>
          <div className="space-y-6 relative">
             {/* Simple timeline line */}
            <div className="absolute left-[19px] top-2 bottom-2 w-0.5 bg-gray-100" />
            
            {MOCK_SCHEDULE.slice(0, 3).map((event) => (
              <div key={event.id} className="relative flex items-start gap-4">
                <div className="relative z-10 flex-shrink-0 w-10 h-10 rounded-full bg-blue-50 border-2 border-white shadow-sm flex items-center justify-center text-[#0090DA] font-bold text-xs">
                  {event.time.split(':')[0]}
                </div>
                <div className="flex-1 pb-2">
                  <div className="bg-white p-3 rounded-lg border border-gray-200 shadow-sm hover:border-[#0090DA] transition-colors">
                    <p className="font-semibold text-gray-900 text-sm">{event.title}</p>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded">{event.type}</span>
                      <span className="text-xs text-gray-400">{event.host}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {MOCK_SCHEDULE.length === 0 && (
              <p className="text-center text-gray-500 py-4">오늘 예정된 일정이 없습니다.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;