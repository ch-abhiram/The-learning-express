import React from 'react';
import { Printer } from 'lucide-react';
import { ExplainingArticle } from '../types';

interface ArticleHeaderProps {
  newspaperName: string;
  editionDate: string;
  targetAudience: string;
  subheading: string;
  articles: ExplainingArticle[];
  selectedArticleId: string | 'all';
  onSelectArticle: (id: string | 'all') => void;
  fontSize: 'normal' | 'large';
  onToggleFontSize: () => void;
}

export const ArticleHeader: React.FC<ArticleHeaderProps> = ({
  newspaperName,
  editionDate,
  targetAudience,
  subheading,
  articles,
  selectedArticleId,
  onSelectArticle,
  fontSize,
  onToggleFontSize,
}) => {
  return (
    <header className="border-b-4 border-[#24211D] bg-[#FAF7F0] pt-6 pb-4">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-4">
        {/* Newspaper Masthead */}
        <div className="text-center space-y-2 py-2">
          <div className="flex items-center justify-center gap-2">
            <span className="h-0.5 w-12 bg-[#24211D] hidden sm:inline-block"></span>
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#6E614E] font-bold">
              AN EDUCATIONAL NEWSPAPER-LEARNING INITIATIVE
            </span>
            <span className="h-0.5 w-12 bg-[#24211D] hidden sm:inline-block"></span>
          </div>

          <h1 className="font-serif-news text-3xl sm:text-5xl font-black text-[#1A1815] tracking-tight">
            THE LEARNING EXPRESS
          </h1>

          <p className="text-xs sm:text-sm text-[#4E4435] max-w-2xl mx-auto italic font-serif-news">
            "{subheading}"
          </p>
        </div>

        {/* Newspaper Divider Lines */}
        <div className="newspaper-rule-double" />

        {/* Navigation & Controls Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
          {/* Article Tabs */}
          <nav aria-label="Article navigation" className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            <button
              id="btn-tab-all-articles"
              onClick={() => onSelectArticle('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                selectedArticleId === 'all'
                  ? 'bg-[#24211D] text-white shadow-xs'
                  : 'bg-[#EFE9DA] hover:bg-[#E2D9C5] text-[#3D3528]'
              }`}
            >
              Today's Selected Stories
            </button>

            {articles.map((art) => {
              const isSelected = selectedArticleId === art.id;
              return (
                <button
                  key={art.id}
                  id={`btn-tab-article-${art.id}`}
                  onClick={() => onSelectArticle(art.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer truncate max-w-[170px] sm:max-w-none ${
                    isSelected
                      ? 'bg-[#24211D] text-white shadow-xs'
                      : 'bg-[#EFE9DA] hover:bg-[#E2D9C5] text-[#3D3528]'
                  }`}
                  title={art.title}
                >
                  #{art.number} {art.category.split(' ')[1] || 'News'}
                </button>
              );
            })}
          </nav>

          {/* Readability & Print Options */}
          <div className="flex items-center gap-2">
            <button
              id="btn-toggle-font-size"
              onClick={onToggleFontSize}
              className="bg-[#EFE9DA] hover:bg-[#E2D9C5] text-[#3D3528] px-2.5 py-1.5 rounded-lg text-xs font-mono font-bold transition-colors cursor-pointer"
              title="Toggle Text Size"
            >
              {fontSize === 'normal' ? 'Text: Normal' : 'Text: Larger A+'}
            </button>

            <button
              id="btn-print-newspaper"
              onClick={() => window.print()}
              className="bg-[#EFE9DA] hover:bg-[#E2D9C5] text-[#3D3528] p-1.5 rounded-lg text-xs transition-colors cursor-pointer"
              title="Print Reading Material"
            >
              <Printer className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
