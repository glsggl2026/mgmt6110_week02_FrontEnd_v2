import React, { useState } from 'react';
import { OFFICIAL_GRANTS } from '../data/grantData';
import { Building2, Search, ExternalLink, ShieldCheck } from 'lucide-react';

export const GrantsDirectoryScreen: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredGrants = OFFICIAL_GRANTS.filter(
    (g) =>
      g.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      g.shortName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      g.agency.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div id="screen-directory" className="flex flex-col min-h-full px-4 py-4 max-w-md mx-auto w-full">
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-1">
          <ShieldCheck className="w-5 h-5 text-emerald-700" />
          <h1 className="text-xl font-bold text-gray-900">
            Official SG Grants Directory
          </h1>
        </div>
        <p className="text-sm text-gray-600 leading-snug">
          Authorized list of Singapore Government support schemes for local enterprises and SMEs.
        </p>
      </div>

      {/* Search Bar */}
      <div className="relative mb-4">
        <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
        <input
          id="input-grant-search"
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search by grant name or acronym..."
          className="w-full pl-9 pr-4 py-2.5 bg-white border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
        />
      </div>

      {/* List of 9 Official Grants */}
      <div className="space-y-3 pb-8">
        {filteredGrants.map((grant, idx) => (
          <div
            key={grant.shortName}
            id={`official-grant-${idx}`}
            className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:border-emerald-300 transition-all"
          >
            <div className="flex items-start justify-between gap-2 mb-1.5">
              <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-extrabold bg-emerald-100 text-emerald-800 border border-emerald-200">
                {grant.shortName}
              </span>
              <span className="text-[11px] text-gray-500 font-medium text-right">
                {grant.agency}
              </span>
            </div>
            <h2 className="text-base font-bold text-gray-900 leading-tight mb-1">
              {grant.fullName}
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              {grant.description}
            </p>
          </div>
        ))}

        {filteredGrants.length === 0 && (
          <div className="text-center py-8 text-gray-500 text-sm">
            No grants found matching &ldquo;{searchQuery}&rdquo;.
          </div>
        )}
      </div>
    </div>
  );
};
