export interface ArticleWord {
  term: string;
  meaning: string;
  example: string;
}

export interface ExplainingArticle {
  id: string;
  number: number;
  title: string;
  category: string;
  newspaperPage: string;
  hook: string;
  whatHappened: {
    lead: string;
    who: string;
    where: string;
    when: string;
    what: string;
    immediateIssue: string;
  };
  whatYouNeedToKnow: {
    conceptName: string;
    explanation: string;
  }[];
  breakItDown: {
    analogyTitle: string;
    analogyText: string;
    chain: string[];
    formalTermExplanation: string;
  };
  wordsYouNeedToKnow: ArticleWord[];
  whyDoesThisMatter: {
    heading: string;
    points: { label: string; text: string }[];
  };
  biggerPicture: {
    chain: string[];
    summary: string;
  };
  thinkAboutThis: string[];
  explainPrompt: string;
}

export interface NewspaperEdition {
  newspaperName: string;
  editionDate: string;
  targetAudience: string;
  subheading: string;
  articles: ExplainingArticle[];
}
