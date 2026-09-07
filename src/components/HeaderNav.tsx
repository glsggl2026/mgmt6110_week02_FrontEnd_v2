import React from 'react';
import { Layers, BookOpen, Smartphone } from 'lucide-react';

interface HeaderNavProps {
  activeScreen: 'priority' | 'directory';
  onSelectScreen: (screen: 'priority' | 'directory') => void;
}

export const HeaderNav: React.FC<HeaderNavProps> = ({
  activeScreen,
  onSelectScreen,
}) => {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-md mx-auto px-4 py-3">
        {/* Top Brand Bar */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-emerald-700 flex items-center justify-center text-white font-black text-lg shadow-sm">
              G
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-lg font-black tracking-tight text-gray-900 leading-none">
                  GrantMatch
                </span>
                <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800">
                  SG SME
                </span>
              </div>
              <p className="text-[11px] text-gray-500 font-medium">
                MGMT 6110 · Problem Set 1
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1 text-[11px] text-gray-500 font-medium bg-gray-100 px-2.5 py-1 rounded-full">
            <Smartphone className="w-3.5 h-3.5 text-gray-600" />
            <span>Mobile View</span>
          </div>
        </div>

        {/* Screen Switcher Navigation Tabs - No Page Reload */}
        <nav className="mt-3 flex rounded-xl bg-gray-100 p-1 border border-gray-200/80">
          <button
            id="nav-tab-priority"
            type="button"
            onClick={() => onSelectScreen('priority')}
            className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeScreen === 'priority'
                ? 'bg-white text-emerald-900 shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>Priority Ranking</span>
          </button>

          <button
            id="nav-tab-directory"
            type="button"
            onClick={() => onSelectScreen('directory')}
            className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeScreen === 'directory'
                ? 'bg-white text-emerald-900 shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>Official Grants List</span>
          </button>
        </nav>
      </div>
    </header>
  );
};
