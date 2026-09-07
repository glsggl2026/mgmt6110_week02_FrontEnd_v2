import React from 'react';
import { Banner } from './Banner';
import { GrantCard } from './GrantCard';
import { GrantItem } from '../types';
import { Check, RotateCcw } from 'lucide-react';

interface PriorityScreenProps {
  items: GrantItem[];
  isSaved: boolean;
  onMoveUp: (index: number) => void;
  onMoveDown: (index: number) => void;
  onSave: () => void;
  onReset: () => void;
}

export const PriorityScreen: React.FC<PriorityScreenProps> = ({
  items,
  isSaved,
  onMoveUp,
  onMoveDown,
  onSave,
  onReset,
}) => {
  return (
    <div id="screen-priority" className="flex flex-col min-h-full">
      {/* Required Green Banner on Top of Screen */}
      <Banner isSaved={isSaved} />

      {/* Screen Subtitle & Instructions */}
      <div className="px-4 pt-4 pb-2 max-w-md mx-auto w-full">
        <div className="flex items-center justify-between gap-2 mb-1">
          <h1 className="text-xl font-bold text-gray-900">
            SME Grant Priority Evaluator
          </h1>
          <button
            id="btn-reset-order"
            type="button"
            onClick={onReset}
            className="flex items-center gap-1 text-xs font-semibold text-gray-500 hover:text-gray-800 active:scale-95 transition-all p-1 cursor-pointer"
            title="Reset to default order"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset</span>
          </button>
        </div>
        <p className="text-sm text-gray-600 leading-snug">
          Compare match scores and gaps to fill. Re-sort priority using the upper arrows on each card, then click Save.
        </p>
      </div>

      {/* 3 Project Descriptions as Cards */}
      <div className="px-4 py-3 max-w-md mx-auto w-full space-y-4 flex-1">
        {items.map((item, index) => (
          <GrantCard
            key={item.id}
            item={item}
            index={index}
            total={items.length}
            onMoveUp={onMoveUp}
            onMoveDown={onMoveDown}
          />
        ))}
      </div>

      {/* Primary Sticky Save Action at Bottom for Phone View */}
      <div className="sticky bottom-0 bg-white/95 backdrop-blur-md border-t border-gray-200 px-4 py-3 mt-auto shadow-lg z-20">
        <div className="max-w-md mx-auto flex items-center gap-3">
          <button
            id="btn-save-bottom"
            type="button"
            onClick={onSave}
            className={`w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl text-base font-bold transition-all shadow-md active:scale-[0.98] cursor-pointer ${
              isSaved
                ? 'bg-emerald-600 text-white hover:bg-emerald-700'
                : 'bg-emerald-600 text-white hover:bg-emerald-700'
            }`}
          >
            <Check className="w-5 h-5 stroke-[2.5]" />
            <span>{isSaved ? 'Priority Saved' : 'Save Priority'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
