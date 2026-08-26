import React, { useState, useEffect } from 'react';
import { indianExpressEdition } from './data/articles';
import { ExplainingArticle } from './types';
import { ArticleHeader } from './components/ArticleHeader';
import { ArticleView } from './components/ArticleView';
import { BookOpen, ArrowLeft, ArrowRight } from 'lucide-react';

const STORAGE_EXPLANATIONS_KEY = 'learning_express_student_explanations_v2';

export default function App() {
  const [selectedArticleId, setSelectedArticleId] = useState<string | 'all'>('all');
  const [fontSize, setFontSize] = useState<'normal' | 'large'>('normal');
  const [explanations, setExplanations] = useState<Record<string, string>>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_EXPLANATIONS_KEY);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  useEffect(() => {
    try { localStorage.setItem(STORAGE_EXPLANATIONS_KEY, JSON.stringify(explanations)); } catch { /* ignore */ }
  }, [explanations]);

  const handleSaveExplanation = (articleId: string, text: string) => {
    setExplanations((prev) => ({ ...prev, [articleId]: text }));
  };

  const displayedArticles: ExplainingArticle[] = selectedArticleId === 'all'
    ? indianExpressEdition.articles
    : indianExpressEdition.articles.filter((a) => a.id === selectedArticleId);

  const currentArticleIndex = indianExpressEdition.articles.findIndex((a) => a.id === selectedArticleId);

  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      document.documentElement.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      document.body.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      document.getElementById('top-anchor')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };
    scrollToTop();
    const timer = setTimeout(scrollToTop, 60);
    return () => clearTimeout(timer);
  }, [selectedArticleId]);

  const handlePrevious = () => {
    if (currentArticleIndex > 0) setSelectedArticleId(indianExpressEdition.articles[currentArticleIndex - 1].id);
  };
  const handleNext = () => {
    if (currentArticleIndex < indianExpressEdition.articles.length - 1) setSelectedArticleId(indianExpressEdition.articles[currentArticleIndex + 1].id);
  };

  return (
    <div id="top-anchor" className={`min-h-screen bg-[#FBF9F5] text-[#24211D] flex flex-col justify-between selection:bg-[#E2D4B7] selection:text-[#1F1C18] ${fontSize === 'large' ? 'text-lg' : 'text-base'}`}>
      <ArticleHeader
        newspaperName={indianExpressEdition.newspaperName}
        editionDate={indianExpressEdition.editionDate}
        targetAudience={indianExpressEdition.targetAudience}
        subheading={indianExpressEdition.subheading}
        articles={indianExpressEdition.articles}
        selectedArticleId={selectedArticleId}
        onSelectArticle={(id) => setSelectedArticleId(id)}
        fontSize={fontSize}
        onToggleFontSize={() => setFontSize(fontSize === 'normal' ? 'large' : 'normal')}
      />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-8 w-full flex-1">
        <div className="bg-[#FAF7F0] border-2 border-[#24211D] rounded-xl p-5 mb-8 shadow-xs">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#6E614E] uppercase tracking-wider mb-1">
            <BookOpen className="w-4 h-4 text-amber-700" />
            <span>HOW TO USE TODAY'S ISSUE</span>
          </div>
          <p className="font-serif-news text-sm sm:text-base text-[#382F22] leading-relaxed">
            Today’s <em>Indian Express</em> has been carefully curated into five essential stories spanning geopolitics, global trade, education and employment, the Indian economy, and AI-driven technology. Each story gives you the background knowledge you need first, then connects the headline to everyday ideas so that you understand the news rather than simply memorise it.
          </p>
        </div>

        <div className="space-y-12">
          {displayedArticles.map((article) => (
            <ArticleView key={article.id} article={article} userExplanation={explanations[article.id] || ''} onSaveExplanation={handleSaveExplanation} />
          ))}
        </div>

        {selectedArticleId !== 'all' && (
          <div className="flex items-center justify-between gap-4 border-t-2 border-[#24211D] pt-6 mb-8">
            <button id="btn-prev-article" disabled={currentArticleIndex <= 0} onClick={handlePrevious} className={`flex items-center gap-2 px-4 py-2 rounded-lg font-bold text-xs sm:text-sm transition-all cursor-pointer ${currentArticleIndex > 0 ? 'bg-[#24211D] text-white hover:bg-[#3E382E]' : 'bg-neutral-200 text-neutral-400 cursor-not-allowed'}`}>
              <ArrowLeft className="w-4 h-4" /><span>Previous Story</span>
            </button>
            <button id="btn-view-all-stories" onClick={() => setSelectedArticleId('all')} className="text-xs sm:text-sm font-bold text-neutral-700 hover:text-black underline cursor-pointer">View All Stories</button>
            <button id="btn-next-article" disabled={currentArticleIndex >= indianExpressEdition.articles.length - 1} onClick={handleNext} className={`flex items-center gap-2 px-4 py-2 rounded-lg font-bold text-xs sm:text-sm transition-all cursor-pointer ${currentArticleIndex < indianExpressEdition.articles.length - 1 ? 'bg-[#24211D] text-white hover:bg-[#3E382E]' : 'bg-neutral-200 text-neutral-400 cursor-not-allowed'}`}>
              <span>Next Story</span><ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </main>

      <footer className="border-t-4 border-[#24211D] bg-[#EFEAD8] py-8 text-center text-xs text-[#52493A] mt-10">
        <div className="max-w-4xl mx-auto px-4 space-y-3">
          <p className="font-serif-news text-base font-bold text-[#1F1C18]">THE LEARNING EXPRESS • Clean Editorial Reading Edition</p>
          <p className="max-w-xl mx-auto leading-relaxed">Primary factual source: <em>The Indian Express</em>, Wednesday, August 26, 2026, Delhi edition. Designed for students in Classes 8–10 to build foundational background knowledge, news literacy, and critical thinking.</p>
          <div className="newspaper-rule-double my-3" />
          <p className="text-[11px] font-mono text-[#6E614E]">"Understand the news. Connect the dots. Learn without fear."</p>
        </div>
      </footer>
    </div>
  );
}
