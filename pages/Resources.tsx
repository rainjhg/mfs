import React, { useState } from 'react';
import { Search, Upload, FileText, Download, Trash2, Folder, Clock, MoreVertical } from 'lucide-react';
import { MOCK_RESOURCES, IMAGES } from '../constants';

const Resources: React.FC = () => {
  const [activeTab, setActiveTab] = useState('All');

  const categories = ['All', 'Manual', 'Sales', 'Policy', 'Form'];
  
  const filteredResources = activeTab === 'All' 
    ? MOCK_RESOURCES 
    : MOCK_RESOURCES.filter(r => r.category === activeTab);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="relative rounded-xl overflow-hidden h-40 bg-gray-900 text-white shadow-md">
         <img src={IMAGES.resources} alt="Resources Archive" className="w-full h-full object-cover opacity-40" />
         <div className="absolute inset-0 flex flex-col justify-center px-8">
            <h1 className="text-3xl font-bold mb-2">자료실</h1>
            <p className="text-gray-200">업무 매뉴얼, 영업 자료, 양식을 안전하게 보관하고 공유합니다.</p>
         </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Sidebar Categories */}
        <div className="w-full md:w-64 flex-shrink-0 space-y-6">
          <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
            <button className="w-full mb-4 bg-[#0090DA] hover:bg-blue-600 text-white font-medium py-2.5 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors">
              <Upload size={18} /> 자료 업로드
            </button>
            <div className="space-y-1">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium flex items-center justify-between transition-colors
                    ${activeTab === cat ? 'bg-blue-50 text-[#0090DA]' : 'text-gray-600 hover:bg-gray-50'}
                  `}
                >
                  <span className="flex items-center gap-2">
                    <Folder size={16} className={activeTab === cat ? 'text-[#0090DA]' : 'text-gray-400'} />
                    {cat === 'All' ? '전체 자료' : cat}
                  </span>
                  <span className="text-xs bg-gray-100 px-2 py-0.5 rounded-full text-gray-500">
                    {cat === 'All' ? MOCK_RESOURCES.length : MOCK_RESOURCES.filter(r => r.category === cat).length}
                  </span>
                </button>
              ))}
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-blue-50 to-white p-5 rounded-xl border border-blue-100">
            <h4 className="font-bold text-[#0090DA] mb-2">Notice</h4>
            <p className="text-sm text-gray-600 mb-3">10월 영업 규정집이 업데이트 되었습니다. 필독 부탁드립니다.</p>
            <button className="text-xs font-semibold underline text-gray-500 hover:text-[#0090DA]">자세히 보기</button>
          </div>
        </div>

        {/* Main List */}
        <div className="flex-1 bg-white rounded-xl shadow-sm border border-gray-200 flex flex-col min-h-[500px]">
          <div className="p-4 border-b border-gray-200 flex flex-col sm:flex-row justify-between items-center gap-4">
            <h2 className="text-lg font-bold text-gray-900">
              {activeTab === 'All' ? '전체 자료 목록' : `${activeTab} 자료 목록`}
            </h2>
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
              <input 
                type="text" 
                placeholder="자료명 검색..." 
                className="w-full pl-9 pr-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0090DA] focus:border-transparent"
              />
            </div>
          </div>

          <div className="flex-1 overflow-auto">
            <table className="w-full text-left border-collapse">
              <thead className="bg-gray-50 sticky top-0 z-10">
                <tr>
                  <th className="py-3 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider w-1/2">파일명</th>
                  <th className="py-3 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider hidden sm:table-cell">작성자</th>
                  <th className="py-3 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider hidden md:table-cell">등록일</th>
                  <th className="py-3 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider hidden sm:table-cell">크기</th>
                  <th className="py-3 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider text-right">관리</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filteredResources.map((resource) => (
                  <tr key={resource.id} className="hover:bg-gray-50 transition-colors group">
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-blue-50 text-[#0090DA] rounded-lg">
                          <FileText size={20} />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900 group-hover:text-[#0090DA] transition-colors">{resource.title}</p>
                          <p className="text-xs text-gray-500 sm:hidden">{resource.author} • {resource.date}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-600 hidden sm:table-cell">{resource.author}</td>
                    <td className="py-4 px-6 text-sm text-gray-500 hidden md:table-cell">{resource.date}</td>
                    <td className="py-4 px-6 text-sm text-gray-500 hidden sm:table-cell">{resource.size}</td>
                    <td className="py-4 px-6 text-right">
                      <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="p-2 text-gray-400 hover:text-[#0090DA] hover:bg-blue-50 rounded transition-colors" title="다운로드">
                          <Download size={18} />
                        </button>
                        <button className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded transition-colors" title="삭제">
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {filteredResources.length === 0 && (
              <div className="flex flex-col items-center justify-center h-64 text-gray-400">
                <Folder size={48} className="mb-2 opacity-20" />
                <p>등록된 자료가 없습니다.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;