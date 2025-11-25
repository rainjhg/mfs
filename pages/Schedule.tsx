import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Plus, Filter, CheckCircle, Clock, XCircle } from 'lucide-react';
import { MOCK_SCHEDULE, IMAGES } from '../constants';
import { ScheduleEvent } from '../types';

const daysOfWeek = ['일', '월', '화', '수', '목', '금', '토'];

const Schedule: React.FC = () => {
  const [currentDate] = useState(new Date(2023, 9, 25)); // Mock date Oct 25 2023
  
  // Simple calendar grid generation mock
  const renderCalendarDays = () => {
    const days = [];
    // Previous month padding
    for (let i = 0; i < 0; i++) {
        days.push(<div key={`prev-${i}`} className="h-32 bg-gray-50 border-b border-r border-gray-100 p-2 text-gray-300"></div>);
    }
    // Days 1-31
    for (let i = 1; i <= 31; i++) {
      const isToday = i === 25;
      const dateStr = `2023-10-${i.toString().padStart(2, '0')}`;
      const dayEvents = MOCK_SCHEDULE.filter(e => e.date === dateStr);

      days.push(
        <div key={i} className={`h-24 md:h-32 border-b border-r border-gray-100 p-2 hover:bg-gray-50 transition-colors group relative ${isToday ? 'bg-blue-50/30' : 'bg-white'}`}>
          <div className="flex justify-between items-start">
            <span className={`text-sm font-medium w-7 h-7 flex items-center justify-center rounded-full ${isToday ? 'bg-[#0090DA] text-white' : 'text-gray-700'}`}>
              {i}
            </span>
            <button className="opacity-0 group-hover:opacity-100 p-1 hover:bg-gray-200 rounded text-gray-500">
              <Plus size={14} />
            </button>
          </div>
          <div className="mt-1 space-y-1 overflow-y-auto max-h-[calc(100%-2rem)]">
            {dayEvents.map(event => (
              <div 
                key={event.id} 
                className={`text-xs p-1.5 rounded truncate border-l-2 cursor-pointer
                  ${event.type === 'Mentoring' ? 'bg-purple-50 border-purple-500 text-purple-700' : 
                    event.type === 'Meeting' ? 'bg-blue-50 border-blue-500 text-blue-700' : 
                    'bg-orange-50 border-orange-500 text-orange-700'}
                `}
              >
                {event.time} {event.title}
              </div>
            ))}
          </div>
        </div>
      );
    }
    return days;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="relative rounded-xl overflow-hidden h-40 bg-gray-900 text-white shadow-md">
         <img src={IMAGES.schedule} alt="Schedule" className="w-full h-full object-cover opacity-40" />
         <div className="absolute inset-0 flex flex-col justify-center px-8">
            <h1 className="text-3xl font-bold mb-2">일정/예약</h1>
            <p className="text-gray-200">컨설팅 및 멘토링 일정을 조율하고 관리합니다.</p>
         </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Main Calendar Area */}
        <div className="lg:col-span-3 bg-white rounded-xl shadow-sm border border-gray-200 flex flex-col">
          <div className="p-4 flex items-center justify-between border-b border-gray-200">
            <div className="flex items-center gap-4">
              <h2 className="text-xl font-bold text-gray-800">2023년 10월</h2>
              <div className="flex bg-gray-100 rounded-lg p-1">
                <button className="p-1 hover:bg-white rounded shadow-sm transition-all"><ChevronLeft size={18} className="text-gray-600" /></button>
                <button className="p-1 hover:bg-white rounded shadow-sm transition-all"><ChevronRight size={18} className="text-gray-600" /></button>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-gray-600 hover:bg-gray-100 rounded-lg">
                <Filter size={16} /> 필터
              </button>
              <button className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium bg-[#0090DA] text-white rounded-lg hover:bg-blue-600 shadow-sm">
                <Plus size={16} /> 일정 추가
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-7 border-b border-gray-200">
            {daysOfWeek.map(day => (
              <div key={day} className="py-2 text-center text-sm font-medium text-gray-500 border-r border-gray-100 last:border-r-0">
                {day}
              </div>
            ))}
          </div>
          
          <div className="grid grid-cols-7 auto-rows-fr">
            {renderCalendarDays()}
          </div>
        </div>

        {/* Sidebar: Requests & Legend */}
        <div className="space-y-6">
          <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200">
            <h3 className="font-bold text-gray-900 mb-4">예약 요청 현황</h3>
            <div className="space-y-4">
              <div className="p-3 bg-gray-50 rounded-lg border border-gray-100">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-xs font-semibold bg-purple-100 text-purple-700 px-2 py-0.5 rounded">Mentoring</span>
                  <span className="text-xs text-gray-500">10분 전</span>
                </div>
                <p className="font-medium text-gray-900 text-sm">김철수 - 신입 교육 멘토링</p>
                <p className="text-xs text-gray-500 mt-1">10월 27일 14:00 - 15:00</p>
                <div className="flex gap-2 mt-3">
                  <button className="flex-1 py-1 bg-white border border-gray-300 rounded text-xs font-medium hover:bg-gray-50 text-gray-700">반려</button>
                  <button className="flex-1 py-1 bg-[#0090DA] text-white rounded text-xs font-medium hover:bg-blue-600">승인</button>
                </div>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg border border-gray-100 opacity-60">
                 <p className="text-center text-xs text-gray-500 py-2">더 이상의 대기 요청이 없습니다.</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200">
            <h3 className="font-bold text-gray-900 mb-4">일정 범주</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm">
                <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                <span className="text-gray-600">팀 회의 (Meeting)</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                <span className="text-gray-600">멘토링 (Mentoring)</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                <span className="text-gray-600">고객 상담 (Consulting)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;