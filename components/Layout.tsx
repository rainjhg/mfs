import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { NAV_ITEMS, APP_NAME, TEAM_NAME, COLORS } from '../constants';
import { Menu, X, Bell, User, LogOut } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="min-h-screen bg-[#F5F7FA] flex flex-col md:flex-row">
      {/* Mobile Header */}
      <div className="md:hidden bg-white border-b p-4 flex justify-between items-center sticky top-0 z-50">
        <div className="font-bold text-[#0090DA] text-lg">{TEAM_NAME}</div>
        <button onClick={toggleSidebar} className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
          {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar */}
      <aside 
        className={`
          fixed md:sticky top-0 h-screen w-64 bg-white border-r border-gray-200 z-40 transform transition-transform duration-300 ease-in-out
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
          md:translate-x-0 flex flex-col
        `}
      >
        <div className="p-6 border-b border-gray-100 flex flex-col gap-1">
          <h1 className="text-2xl font-bold text-[#0090DA]">MetLife</h1>
          <p className="text-sm text-gray-500 font-medium">{TEAM_NAME} 인트라넷</p>
        </div>

        <nav className="flex-1 overflow-y-auto py-6 px-3">
          <ul className="space-y-2">
            {NAV_ITEMS.map((item) => {
              const isActive = location.pathname === item.path;
              const Icon = item.icon;
              return (
                <li key={item.path}>
                  <button
                    onClick={() => {
                      navigate(item.path);
                      setIsSidebarOpen(false);
                    }}
                    className={`
                      w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors
                      ${isActive 
                        ? 'bg-[#0090DA] text-white shadow-md' 
                        : 'text-gray-600 hover:bg-gray-50 hover:text-[#0090DA]'}
                    `}
                  >
                    <Icon size={20} />
                    {item.label}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="p-4 border-t border-gray-100">
          <div className="flex items-center gap-3 px-4 py-3 text-gray-600">
            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
              <User size={16} />
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold text-gray-900">권나경 팀장</p>
              <p className="text-xs text-gray-500">Administrator</p>
            </div>
          </div>
          <button className="w-full flex items-center justify-center gap-2 mt-2 px-4 py-2 text-xs font-medium text-red-500 hover:bg-red-50 rounded-lg transition-colors">
            <LogOut size={14} /> 로그아웃
          </button>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/20 z-30 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Top bar (Desktop) */}
        <header className="hidden md:flex bg-white h-16 border-b border-gray-200 items-center justify-between px-8 sticky top-0 z-30">
          <h2 className="text-lg font-semibold text-gray-800">
            {NAV_ITEMS.find(item => item.path === location.pathname)?.label || '페이지'}
          </h2>
          <div className="flex items-center gap-4">
            <button className="p-2 text-gray-400 hover:text-[#0090DA] transition-colors relative">
              <Bell size={20} />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
            </button>
            <div className="text-sm text-gray-500">
              {new Date().toLocaleDateString('ko-KR', { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' })}
            </div>
          </div>
        </header>

        <div className="flex-1 overflow-auto p-4 md:p-8 relative">
          {children}
        </div>
      </main>
    </div>
  );
};