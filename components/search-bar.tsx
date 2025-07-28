"use client";

import type React from "react";

import { Search, X } from "lucide-react";
import { useState } from "react";

export function SearchBar() {
  const [query, setQuery] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", query);
  };

  return (
    <div className="relative max-w-md mx-auto">
      <form onSubmit={handleSearch} className="relative">
        <div
          className={`flex items-center bg-white dark:bg-slate-800 rounded-full border-2 border-slate-200 dark:border-slate-700 transition-all duration-300 ${
            isExpanded ? "shadow-lg" : "shadow-md"
          }`}
        >
          <Search className="w-5 h-5 text-slate-400 ml-4" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setIsExpanded(true)}
            onBlur={() => setIsExpanded(false)}
            placeholder="Search articles..."
            className="flex-1 px-4 py-3 bg-transparent focus:outline-none text-slate-900 dark:text-slate-100 placeholder-slate-500"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
