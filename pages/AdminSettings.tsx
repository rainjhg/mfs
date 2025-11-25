import React, { useState } from 'react';
import { Shield, Key, Activity, Save, Users, Lock, AlertTriangle } from 'lucide-react';
import { MOCK_LOGS } from '../constants';
import { SectionHeader } from '../components/Widgets';

const AdminSettings: React.FC = () => {
  const [allowGuest, setAllowGuest] = useState(false);
  const [maintenanceMode, setMaintenanceMode] = useState(false);

  return (
    <div className="space-y-8 max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">관리자 설정</h1>
        <p className="text-gray-500 mt-1">시스템 권한, 보안 설정 및 감사 로그를 확인합니다.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* System Controls */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <SectionHeader 
            title="시스템 제어" 
            description="전체 시스템의 접근 권한 및 상태를 관리합니다."
            action={<Shield className="text-[#0090DA]" />}
          />
          
          <div className="space-y-6 mt-6">
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <h4 className="font-semibold text-gray-900">게스트 접근 허용</h4>
                <p className="text-xs text-gray-500 mt-1">외부 인원이 일부 공개 자료에 접근할 수 있습니다.</p>
              </div>
              <button 
                onClick={() => setAllowGuest(!allowGuest)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${allowGuest ? 'bg-[#0090DA]' : 'bg-gray-300'}`}
              >
                <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${allowGuest ? 'translate-x-6' : 'translate-x-1'}`} />
              </button>
            </div>

            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <h4 className="font-semibold text-gray-900">유지보수 모드</h4>
                <p className="text-xs text-gray-500 mt-1">활성화 시 관리자를 제외한 모든 접속이 차단됩니다.</p>
              </div>
              <button 
                onClick={() => setMaintenanceMode(!maintenanceMode)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${maintenanceMode ? 'bg-red-500' : 'bg-gray-300'}`}
              >
                <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${maintenanceMode ? 'translate-x-6' : 'translate-x-1'}`} />
              </button>
            </div>
            
            <div className="pt-4 border-t border-gray-100 flex justify-end">
              <button className="flex items-center gap-2 px-4 py-2 bg-[#0090DA] text-white text-sm font-medium rounded-lg hover:bg-blue-600 transition-colors">
                <Save size={16} /> 설정 저장
              </button>
            </div>
          </div>
        </div>

        {/* Admin Accounts */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
           <SectionHeader 
            title="관리자 계정" 
            description="현재 등록된 최고 관리자 목록입니다."
            action={<Key className="text-orange-500" />}
          />
          <div className="mt-6 space-y-4">
            {['권나경 (Master)', '김철수 (Manager)'].map((admin, idx) => (
              <div key={idx} className="flex items-center justify-between p-3 border border-gray-100 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-orange-50 text-orange-500 rounded-full">
                    <UserIcon />
                  </div>
                  <span className="font-medium text-gray-800">{admin}</span>
                </div>
                <button className="text-xs text-gray-400 hover:text-red-500 font-medium">권한 해제</button>
              </div>
            ))}
            <button className="w-full py-2 border border-dashed border-gray-300 text-gray-500 rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-colors text-sm font-medium">
              + 관리자 추가
            </button>
          </div>
        </div>
      </div>

      {/* Security Logs */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <SectionHeader 
          title="보안 감사 로그" 
          description="최근 24시간 동안의 주요 시스템 활동입니다."
          action={<Activity className="text-gray-400" />}
        />
        
        <div className="overflow-x-auto mt-4">
          <table className="w-full text-left">
            <thead className="bg-gray-50 border-b border-gray-100">
              <tr>
                <th className="py-3 px-4 text-xs font-semibold text-gray-500 uppercase">시간</th>
                <th className="py-3 px-4 text-xs font-semibold text-gray-500 uppercase">관리자</th>
                <th className="py-3 px-4 text-xs font-semibold text-gray-500 uppercase">활동 내역</th>
                <th className="py-3 px-4 text-xs font-semibold text-gray-500 uppercase">IP 주소</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {MOCK_LOGS.map((log) => (
                <tr key={log.id} className="text-sm">
                  <td className="py-3 px-4 text-gray-500 font-mono text-xs">{log.timestamp}</td>
                  <td className="py-3 px-4 font-medium text-gray-900">{log.admin}</td>
                  <td className="py-3 px-4 text-gray-600">
                    <span className="inline-flex items-center gap-2">
                       {log.action.includes('Login') ? <Lock size={12} className="text-green-500"/> : <AlertTriangle size={12} className="text-blue-500"/>}
                       {log.action}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-gray-400 font-mono text-xs">{log.ip}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const UserIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </svg>
);

export default AdminSettings;