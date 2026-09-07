import React from 'react';
import { CheckCircle2 } from 'lucide-react';

interface BannerProps {
  isSaved: boolean;
}

export const Banner: React.FC<BannerProps> = ({ isSaved }) => {
  return (
    <div
      id="status-banner"
      className="sticky top-0 z-30 bg-emerald-700 text-white shadow-md transition-all duration-300 px-4 py-3.5"
    >
      <div className="max-w-md mx-auto flex items-center justify-center gap-2.5">
        {isSaved && (
          <CheckCircle2
            id="banner-icon-saved"
            className="w-6 h-6 text-emerald-200 shrink-0"
          />
        )}
        <span
          id="banner-text"
          className="text-base sm:text-lg font-semibold tracking-wide text-center leading-snug"
        >
          {isSaved ? (
            'Priority Saved'
          ) : (
            <>
              <span>First sort priority using arrows in cards</span>
              <br />
              <span>then click Save Priority</span>
            </>
          )}
        </span>
      </div>
    </div>
  );
};
