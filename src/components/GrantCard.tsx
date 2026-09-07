import React from 'react';
import { ChevronUp, ChevronDown, AlertCircle, CheckCircle2, AlertTriangle, Building2, Sparkles } from 'lucide-react';
import { GrantItem } from '../types';

interface GrantCardProps {
  item: GrantItem;
  index: number;
  total: number;
  onMoveUp: (index: number) => void;
  onMoveDown: (index: number) => void;
}

export const GrantCard: React.FC<GrantCardProps> = ({
  item,
  index,
  total,
  onMoveUp,
  onMoveDown,
}) => {
  const isFirst = index === 0;
  const isLast = index === total - 1;

  // Colour shade logic based on requirements: green=high, amber=medium, red=low
  const getShadeConfig = (level: GrantItem['matchLevel']) => {
    switch (level) {
      case 'high':
        return {
          cardBg: 'bg-emerald-50/90 border-emerald-300 shadow-emerald-100',
          badgeBg: 'bg-emerald-600 text-white',
          badgeBorder: 'border-emerald-700',
          titleColor: 'text-emerald-950',
          grantTagBg: 'bg-emerald-100 text-emerald-900 border-emerald-200',
          gapBoxBg: 'bg-white/90 border-emerald-200 text-emerald-950',
          gapIcon: <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />,
          levelLabel: 'High Match',
        };
      case 'medium':
        return {
          cardBg: 'bg-amber-50/90 border-amber-300 shadow-amber-100',
          badgeBg: 'bg-amber-600 text-white',
          badgeBorder: 'border-amber-700',
          titleColor: 'text-amber-950',
          grantTagBg: 'bg-amber-100 text-amber-900 border-amber-200',
          gapBoxBg: 'bg-white/90 border-amber-200 text-amber-950',
          gapIcon: <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />,
          levelLabel: 'Medium Match',
        };
      case 'low':
      default:
        return {
          cardBg: 'bg-rose-50/90 border-rose-300 shadow-rose-100',
          badgeBg: 'bg-rose-600 text-white',
          badgeBorder: 'border-rose-700',
          titleColor: 'text-rose-950',
          grantTagBg: 'bg-rose-100 text-rose-900 border-rose-200',
          gapBoxBg: 'bg-white/90 border-rose-200 text-rose-950',
          gapIcon: <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />,
          levelLabel: 'Low Match',
        };
    }
  };

  const shade = getShadeConfig(item.matchLevel);

  return (
    <article
      id={`grant-card-${item.id}`}
      className={`rounded-2xl border-2 p-5 transition-all duration-200 shadow-md ${shade.cardBg}`}
    >
      {/* Upper Center: Large Up & Down Priority Sorting Arrows */}
      <div className="flex flex-col items-center justify-center mb-3 pb-3 border-b border-black/10">
        <span className="text-xs uppercase tracking-widest font-extrabold text-gray-500 mb-1.5">
          Priority #{index + 1}
        </span>
        <div
          id={`sorting-controls-${item.id}`}
          className="flex items-center gap-3 bg-white/90 px-4 py-1.5 rounded-full shadow-inner border border-gray-200"
        >
          <button
            id={`btn-up-${item.id}`}
            type="button"
            disabled={isFirst}
            onClick={() => onMoveUp(index)}
            aria-label={`Move ${item.projectTitle} up in priority`}
            className={`flex items-center justify-center w-12 h-12 rounded-full border transition-all cursor-pointer ${
              isFirst
                ? 'bg-gray-100 text-gray-300 border-gray-200 cursor-not-allowed'
                : 'bg-white text-gray-800 hover:bg-emerald-100 hover:text-emerald-800 active:scale-95 border-gray-300 shadow-sm'
            }`}
          >
            <ChevronUp className="w-8 h-8 stroke-[2.5]" />
          </button>

          <span className="text-xs font-semibold text-gray-600 px-1 select-none">
            Sort
          </span>

          <button
            id={`btn-down-${item.id}`}
            type="button"
            disabled={isLast}
            onClick={() => onMoveDown(index)}
            aria-label={`Move ${item.projectTitle} down in priority`}
            className={`flex items-center justify-center w-12 h-12 rounded-full border transition-all cursor-pointer ${
              isLast
                ? 'bg-gray-100 text-gray-300 border-gray-200 cursor-not-allowed'
                : 'bg-white text-gray-800 hover:bg-emerald-100 hover:text-emerald-800 active:scale-95 border-gray-300 shadow-sm'
            }`}
          >
            <ChevronDown className="w-8 h-8 stroke-[2.5]" />
          </button>
        </div>
      </div>

      {/* Header Info: Matched Grant & Match % Badge */}
      <div className="flex items-start justify-between gap-2 mb-3">
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-gray-600 mb-1">
            <Building2 className="w-3.5 h-3.5 text-gray-500" />
            <span>Matched Government Grant</span>
          </div>
          <h2
            id={`grant-name-${item.id}`}
            className="text-lg sm:text-xl font-bold leading-tight text-gray-900"
          >
            {item.matchedGrantName}
          </h2>
        </div>

        {/* Match % Badge with Color Shade */}
        <div
          id={`match-badge-${item.id}`}
          className={`shrink-0 flex flex-col items-center px-3 py-1.5 rounded-xl font-extrabold shadow-sm border ${shade.badgeBg} ${shade.badgeBorder}`}
        >
          <span className="text-xl sm:text-2xl leading-none">{item.matchScore}%</span>
          <span className="text-[10px] tracking-wider uppercase opacity-90 mt-0.5">
            {shade.levelLabel}
          </span>
        </div>
      </div>

      {/* Project Description (Invented) */}
      <div className="mb-4">
        <h3 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">
          Applicant Project Description
        </h3>
        <h4 className="text-base font-semibold text-gray-900 mb-1">
          {item.projectTitle}
        </h4>
        <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
          {item.projectDescription}
        </p>
      </div>

      {/* Gaps to fill as suggested by AI */}
      <div
        id={`gaps-box-${item.id}`}
        className={`rounded-xl border p-3.5 text-sm sm:text-base ${shade.gapBoxBg}`}
      >
        <div className="flex items-center gap-1.5 font-bold mb-1.5 text-gray-900">
          <Sparkles className="w-4 h-4 text-amber-500 shrink-0" />
          <span className="text-xs sm:text-sm uppercase tracking-wide">
            Gaps to Fill (Suggested by AI)
          </span>
        </div>
        <div className="flex items-start gap-2.5">
          {shade.gapIcon}
          <p className="text-sm sm:text-base text-gray-800 leading-relaxed">
            {item.gapsToFill}
          </p>
        </div>
      </div>

      {/* Funding Scope Indicator */}
      <div className="mt-3 pt-2.5 border-t border-black/5 flex items-center justify-between text-xs text-gray-600 font-medium">
        <span>Funding Potential:</span>
        <span className="font-semibold text-gray-800">{item.estimatedFunding}</span>
      </div>
    </article>
  );
};
