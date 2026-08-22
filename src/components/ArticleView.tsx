import React, { useState } from 'react';
import { ExplainingArticle } from '../types';
import {
  Flame,
  Newspaper,
  Brain,
  Puzzle,
  Key,
  Globe,
  Link,
  HelpCircle,
  PenTool,
  ArrowRight,
  CheckCircle2,
  Volume2,
  VolumeX,
} from 'lucide-react';

interface ArticleViewProps {
  article: ExplainingArticle;
  userExplanation: string;
  onSaveExplanation: (articleId: string, text: string) => void;
}

export const ArticleView: React.FC<ArticleViewProps> = ({
  article,
  userExplanation,
  onSaveExplanation,
}) => {
  const [draftText, setDraftText] = useState(userExplanation || '');
  const [isSaved, setIsSaved] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);

  const handleSave = () => {
    onSaveExplanation(article.id, draftText);
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 2500);
  };

  const handleToggleSpeech = () => {
    if (!('speechSynthesis' in window)) return;

    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }

    const narration = `${article.title}. The Hook: ${article.hook}. What Happened: ${article.whatHappened.lead} ${article.whatHappened.immediateIssue}`;
    const utterance = new SpeechSynthesisUtterance(narration);
    utterance.rate = 0.95;
    utterance.pitch = 1.0;

    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    setIsSpeaking(true);
    window.speechSynthesis.speak(utterance);
  };

  return (
    <article
      id={`article-${article.id}`}
      className="bg-white border-2 border-[#24211D] rounded-2xl shadow-sm overflow-hidden mb-12"
    >
      {/* Article Top Banner */}
      <div className="bg-[#24211D] text-[#FAF7F0] px-6 py-4 flex flex-wrap items-center justify-between gap-3 border-b border-[#3D3528]">
        <div className="flex items-center gap-2.5">
          <span className="bg-amber-500 text-black text-xs font-mono font-bold px-2.5 py-0.5 rounded">
            ARTICLE {article.number}
          </span>
          <span className="text-xs font-medium text-amber-200">{article.category}</span>
        </div>

        <div className="flex items-center gap-3 text-xs text-neutral-300">
          <span className="font-mono text-[11px] bg-white/10 px-2 py-0.5 rounded">
            Source: {article.newspaperPage}
          </span>
          <button
            id={`btn-speech-${article.id}`}
            onClick={handleToggleSpeech}
            className="flex items-center gap-1.5 hover:text-amber-300 transition-colors cursor-pointer text-xs font-semibold"
            title="Listen to summary"
          >
            {isSpeaking ? (
              <>
                <VolumeX className="w-4 h-4 text-amber-400 animate-pulse" />
                <span className="text-amber-300">Stop Voice</span>
              </>
            ) : (
              <>
                <Volume2 className="w-4 h-4" />
                <span>Listen</span>
              </>
            )}
          </button>
        </div>
      </div>

      <div className="p-6 sm:p-10 space-y-10">
        {/* ========================================================
            # 📰 [Simple, interesting title]
            ======================================================== */}
        <header className="space-y-3 border-b-2 border-[#E5DEC9] pb-6">
          <h1 className="font-serif-news text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1F1C18] leading-tight">
            📰 {article.title}
          </h1>
          <p className="text-xs text-[#6B5F4C] font-mono">
            Edition: The Indian Express • Decoded for Classes 8–10
          </p>
        </header>

        {/* ========================================================
            ## 🔥 THE HOOK
            ======================================================== */}
        <section className="bg-[#FFF9EE] border-l-4 border-amber-600 p-5 sm:p-6 rounded-r-xl space-y-2">
          <div className="flex items-center gap-2 text-amber-900 font-bold text-sm tracking-wide uppercase">
            <Flame className="w-4 h-4 text-amber-600" />
            <span>🔥 The Hook</span>
          </div>
          <p className="font-serif-news text-base sm:text-lg text-[#3A2D1B] leading-relaxed italic">
            "{article.hook}"
          </p>
        </section>

        {/* ========================================================
            ## 📰 WHAT HAPPENED?
            ======================================================== */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 text-[#1F1C18] font-bold text-base border-b border-[#E5DEC9] pb-2">
            <Newspaper className="w-5 h-5 text-blue-800" />
            <h2 className="font-serif-news text-xl font-bold">📰 What Happened?</h2>
          </div>

          <p className="text-sm sm:text-base text-[#2E2820] font-medium leading-relaxed bg-[#F7F4EC] p-4 rounded-xl border border-[#E0D7C2]">
            {article.whatHappened.lead}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
            <div className="bg-[#FAFAF7] p-3.5 rounded-lg border border-[#E5DEC9]">
              <span className="font-bold text-[#1F1C18] block mb-1">👥 Who is involved?</span>
              <span className="text-[#4A4135] leading-snug">{article.whatHappened.who}</span>
            </div>

            <div className="bg-[#FAFAF7] p-3.5 rounded-lg border border-[#E5DEC9]">
              <span className="font-bold text-[#1F1C18] block mb-1">📍 Where did it happen?</span>
              <span className="text-[#4A4135] leading-snug">{article.whatHappened.where}</span>
            </div>

            <div className="bg-[#FAFAF7] p-3.5 rounded-lg border border-[#E5DEC9]">
              <span className="font-bold text-[#1F1C18] block mb-1">🗓️ When did it happen?</span>
              <span className="text-[#4A4135] leading-snug">{article.whatHappened.when}</span>
            </div>

            <div className="bg-[#FAFAF7] p-3.5 rounded-lg border border-[#E5DEC9]">
              <span className="font-bold text-[#1F1C18] block mb-1">📋 What is the core event?</span>
              <span className="text-[#4A4135] leading-snug">{article.whatHappened.what}</span>
            </div>
          </div>

          <div className="bg-[#FFF5F5] border border-rose-200 p-4 rounded-xl text-xs sm:text-sm text-rose-950">
            <span className="font-bold block mb-1">⚠️ The Immediate Issue:</span>
            <p className="leading-relaxed">{article.whatHappened.immediateIssue}</p>
          </div>
        </section>

        {/* ========================================================
            ## 🧠 BUT FIRST, WHAT DO YOU NEED TO KNOW?
            ======================================================== */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 text-[#1F1C18] font-bold text-base border-b border-[#E5DEC9] pb-2">
            <Brain className="w-5 h-5 text-purple-700" />
            <h2 className="font-serif-news text-xl font-bold">
              🧠 But First, What Do You Need to Know?
            </h2>
          </div>

          <div className="space-y-3">
            {article.whatYouNeedToKnow.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#F8F5FF] border border-purple-200/80 rounded-xl p-4 sm:p-5 space-y-1.5"
              >
                <h3 className="font-bold text-sm sm:text-base text-purple-950">
                  {item.conceptName}
                </h3>
                <p className="text-xs sm:text-sm text-[#3E344B] leading-relaxed">
                  {item.explanation}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================
            ## 🧩 LET'S BREAK IT DOWN
            ======================================================== */}
        <section className="space-y-5">
          <div className="flex items-center gap-2 text-[#1F1C18] font-bold text-base border-b border-[#E5DEC9] pb-2">
            <Puzzle className="w-5 h-5 text-emerald-700" />
            <h2 className="font-serif-news text-xl font-bold">🧩 Let's Break It Down</h2>
          </div>

          {/* Analogy Box */}
          <div className="bg-[#F3F9F5] border border-emerald-300 rounded-xl p-5 space-y-2">
            <span className="text-xs font-bold font-mono uppercase tracking-wider text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">
              💡 Friendly Real-Life Analogy: {article.breakItDown.analogyTitle}
            </span>
            <p className="text-xs sm:text-sm text-[#234232] leading-relaxed">
              {article.breakItDown.analogyText}
            </p>
          </div>

          {/* Cause and effect chain */}
          <div className="bg-[#FAF7F0] border-2 border-[#D8CEB8] rounded-xl p-5 space-y-3">
            <h3 className="font-bold text-xs sm:text-sm text-[#1F1C18] uppercase tracking-wide font-mono">
              ⛓️ The Step-by-Step Chain of Events:
            </h3>

            <div className="space-y-2">
              {article.breakItDown.chain.map((step, sIdx) => (
                <div key={sIdx} className="flex items-start gap-3 text-xs sm:text-sm">
                  <span className="font-mono font-bold bg-[#E4DAC2] text-[#423826] w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5 text-xs">
                    {sIdx + 1}
                  </span>
                  <p className="text-[#362E21] leading-relaxed pt-0.5">{step}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Formal Term Announcement */}
          <div className="bg-[#EBF3FF] border-l-4 border-blue-600 p-4 rounded-r-lg text-xs sm:text-sm text-[#1A3358] leading-relaxed">
            <span className="font-bold block mb-1">📖 The Formal Concept:</span>
            {article.breakItDown.formalTermExplanation}
          </div>
        </section>

        {/* ========================================================
            ## 🔑 WORDS YOU NEED TO KNOW
            ======================================================== */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 text-[#1F1C18] font-bold text-base border-b border-[#E5DEC9] pb-2">
            <Key className="w-5 h-5 text-amber-700" />
            <h2 className="font-serif-news text-xl font-bold">🔑 Words You Need to Know</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {article.wordsYouNeedToKnow.map((word, wIdx) => (
              <div
                key={wIdx}
                className="bg-[#FAF8F5] border border-[#DDD3BE] rounded-xl p-4 flex flex-col justify-between space-y-2 shadow-2xs"
              >
                <div>
                  <span className="font-bold text-sm text-[#1F1C18] block border-b border-[#E5DEC9] pb-1 mb-1.5">
                    {word.term}
                  </span>
                  <p className="text-xs text-[#443B2E] leading-relaxed mb-2">
                    {word.meaning}
                  </p>
                </div>

                <div className="bg-white p-2 rounded text-[11px] text-[#615440] italic border border-[#E8E0CE]">
                  📌 <strong className="font-semibold not-italic">Example:</strong> "{word.example}"
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================
            ## 🌍 WHY DOES THIS MATTER?
            ======================================================== */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 text-[#1F1C18] font-bold text-base border-b border-[#E5DEC9] pb-2">
            <Globe className="w-5 h-5 text-teal-700" />
            <h2 className="font-serif-news text-xl font-bold">🌍 Why Does This Matter?</h2>
          </div>

          <p className="text-xs sm:text-sm font-semibold text-[#544837]">
            {article.whyDoesThisMatter.heading}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {article.whyDoesThisMatter.points.map((pt, pIdx) => (
              <div
                key={pIdx}
                className="bg-white border border-[#DDD4C1] rounded-xl p-4.5 space-y-2 shadow-2xs"
              >
                <span className="font-bold text-xs sm:text-sm text-[#1F1C18] block text-teal-900 border-b border-neutral-100 pb-1">
                  {pt.label}
                </span>
                <p className="text-xs text-[#3E3426] leading-relaxed">{pt.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================
            ## 🔗 THE BIGGER PICTURE
            ======================================================== */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 text-[#1F1C18] font-bold text-base border-b border-[#E5DEC9] pb-2">
            <Link className="w-5 h-5 text-indigo-700" />
            <h2 className="font-serif-news text-xl font-bold">🔗 The Bigger Picture</h2>
          </div>

          <div className="bg-[#F5F4FA] border border-indigo-200 rounded-xl p-5 space-y-4">
            <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-mono font-semibold">
              {article.biggerPicture.chain.map((item, cIdx) => (
                <React.Fragment key={cIdx}>
                  <span className="bg-white border border-indigo-200 text-indigo-950 px-3 py-1.5 rounded-lg shadow-2xs">
                    {item}
                  </span>
                  {cIdx < article.biggerPicture.chain.length - 1 && (
                    <ArrowRight className="w-4 h-4 text-indigo-500 shrink-0" />
                  )}
                </React.Fragment>
              ))}
            </div>

            <p className="text-xs sm:text-sm text-[#37324A] leading-relaxed border-t border-indigo-100 pt-3">
              {article.biggerPicture.summary}
            </p>
          </div>
        </section>

        {/* ========================================================
            ## 🤔 THINK ABOUT THIS
            ======================================================== */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 text-[#1F1C18] font-bold text-base border-b border-[#E5DEC9] pb-2">
            <HelpCircle className="w-5 h-5 text-amber-700" />
            <h2 className="font-serif-news text-xl font-bold">🤔 Think About This</h2>
          </div>

          <div className="space-y-3">
            {article.thinkAboutThis.map((q, qIdx) => (
              <div
                key={qIdx}
                className="bg-[#FEFAF2] border border-[#E8DCBF] rounded-xl p-4 sm:p-5 flex items-start gap-3"
              >
                <span className="bg-amber-200 text-amber-900 font-bold w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-xs mt-0.5">
                  ?
                </span>
                <p className="text-xs sm:text-sm font-serif-news text-[#3B301F] leading-relaxed font-semibold">
                  "{q}"
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================
            ## ✍️ EXPLAIN IT IN YOUR OWN WORDS
            ======================================================== */}
        <section className="bg-gradient-to-b from-[#FAF7F0] to-[#F2EADB] border-2 border-[#24211D] rounded-2xl p-6 sm:p-8 space-y-4">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div className="flex items-center gap-2 text-[#1F1C18] font-bold text-base">
              <PenTool className="w-5 h-5 text-amber-700" />
              <h2 className="font-serif-news text-xl font-bold">
                ✍️ Explain It in Your Own Words
              </h2>
            </div>
            <span className="text-xs text-[#6B5F4C] font-mono">Active Comprehension Check</span>
          </div>

          <p className="text-xs sm:text-sm text-[#382F22] leading-relaxed italic bg-white/70 p-3.5 rounded-lg border border-[#DDD3BE]">
            "{article.explainPrompt}"
          </p>

          <div className="space-y-2">
            <textarea
              id={`textarea-explain-${article.id}`}
              value={draftText}
              onChange={(e) => setDraftText(e.target.value)}
              rows={4}
              placeholder="Type your explanation here as if talking to a friend who missed the news..."
              className="w-full bg-white border border-[#CCC1A9] rounded-xl p-3.5 text-xs sm:text-sm text-[#1F1C18] placeholder:text-neutral-400 focus:ring-2 focus:ring-amber-600 focus:outline-none leading-relaxed"
            />

            <div className="flex items-center justify-between text-xs">
              <span className="text-[#6E614E] font-mono">
                {draftText.trim() ? draftText.trim().split(/\s+/).length : 0} words written
              </span>

              <button
                id={`btn-save-explain-${article.id}`}
                onClick={handleSave}
                className="bg-[#24211D] hover:bg-[#3E382E] text-white px-5 py-2 rounded-lg font-bold transition-all flex items-center gap-1.5 cursor-pointer shadow-xs"
              >
                {isSaved ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Saved!</span>
                  </>
                ) : (
                  <span>Save My Explanation</span>
                )}
              </button>
            </div>
          </div>
        </section>
      </div>
    </article>
  );
};
