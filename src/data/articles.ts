import { ExplainingArticle, NewspaperEdition } from '../types';

export const indianExpressEdition: NewspaperEdition = {
  newspaperName: 'The Indian Express',
  editionDate: 'Wednesday, August 26, 2026',
  targetAudience: 'Classes 8–10 (Ages 13–16)',
  subheading: 'Daily News Decoded • Turning Headlines into Lifelong Understanding',
  articles: [
    {
      id: 'xi-jinping-brics-delhi', number: 1,
      title: 'Why Could Xi Jinping’s BRICS Visit Matter for India–China Relations?',
      category: '🌏 World & Geopolitics', newspaperPage: 'Page 1 (Front Page)',
      hook: 'Imagine two neighbours who have had a serious disagreement but still need to attend the same community meeting. Their meeting does not automatically solve the dispute, but it creates an opportunity to manage it. That is one way to understand the importance of a possible Xi Jinping visit to India.',
      whatHappened: {
        lead: 'The Indian Express reports that Chinese President Xi Jinping is likely to attend the BRICS leaders’ summit in New Delhi on September 12–13, with a Chinese advance team already arriving for security and protocol preparations.',
        who: 'Chinese President Xi Jinping and Indian officials preparing for the BRICS summit.', where: 'New Delhi, India.', when: 'The possible visit is expected in September 2026; Xi last visited India in October 2019.',
        what: 'Xi’s possible attendance would be his first India visit in seven years. The report places the visit in the context of efforts to restore India–China ties after the military standoff along the Line of Actual Control in eastern Ladakh.',
        immediateIssue: 'The two countries have to manage unresolved security concerns while also engaging through multilateral forums such as BRICS.',
      },
      whatYouNeedToKnow: [
        { conceptName: '1. What is BRICS?', explanation: 'BRICS is a grouping of major emerging economies that provides a forum for political, economic and diplomatic coordination.' },
        { conceptName: '2. What is the LAC?', explanation: 'The Line of Actual Control is the effective military boundary between Indian- and Chinese-controlled territory along their disputed border.' },
        { conceptName: '3. Why Do Summits Matter?', explanation: 'Leader-level meetings can create channels for dialogue even when countries disagree on major issues.' },
      ],
      breakItDown: { analogyTitle: 'The Difficult-Neighbours Analogy', analogyText: 'Two neighbours may disagree about a boundary while still having to cooperate on common matters. Diplomacy works similarly: disagreement does not always mean that communication stops.', chain: ['Border tensions', 'Need for dialogue', 'BRICS provides a meeting platform', 'Possible Xi visit', 'Opportunity to manage bilateral ties'], formalTermExplanation: 'Diplomatic engagement allows states to pursue communication and cooperation while continuing to protect their national interests.' },
      wordsYouNeedToKnow: [
        { term: 'Multilateral', meaning: 'Involving several countries.', example: 'BRICS is a multilateral forum.' },
        { term: 'Diplomacy', meaning: 'The practice of managing relations and negotiations between countries.', example: 'Diplomacy can keep communication open during disputes.' },
        { term: 'Geopolitics', meaning: 'The study of how geography, power and strategic interests influence international relations.', example: 'The India–China border is an important geopolitical issue.' },
      ],
      whyDoesThisMatter: { heading: 'Why does this matter to India?', points: [
        { label: 'Security', text: 'India continues to have major concerns about its disputed Himalayan border with China.' },
        { label: 'Economy', text: 'India and China are major economies whose relationship affects trade and supply chains.' },
        { label: 'Global Forums', text: 'India uses platforms such as BRICS to engage with other major powers.' },
      ] },
      biggerPicture: { chain: ['Border dispute', 'Diplomatic dialogue', 'BRICS', 'Economic interests', 'Strategic competition'], summary: 'Countries can compete and cooperate at the same time; foreign policy often requires managing both relationships simultaneously.' },
      thinkAboutThis: ['Why might India welcome dialogue with China even when border issues remain?', 'Why are multilateral organisations useful when two countries have bilateral disagreements?'],
      explainPrompt: 'Explain why a possible Xi Jinping visit to India could be important even if India–China border issues are not fully resolved.'
    },
    {
      id: 'canada-us-trade-war', number: 2,
      title: 'What Happens When a Trade War Escalates?',
      category: '💰 Economy & World Affairs', newspaperPage: 'Page 2 (The World)',
      hook: 'Imagine one shop raises the price of goods coming from another shop, so the second shop responds by raising its own prices. Soon both sides are paying more and ordinary customers can get caught in the middle. That is the basic logic behind retaliatory tariffs.',
      whatHappened: {
        lead: 'Canada announced retaliatory tariffs on about $19.94 billion worth of US goods after new US duties, while also unveiling a $5.4 billion support package for affected workers and businesses.',
        who: 'The governments of Canada and the United States, along with businesses, workers and consumers affected by tariffs.', where: 'Canada–United States trade relationship.', when: 'Announced August 25, 2026; Canadian counter-tariffs are scheduled to take effect September 8.',
        what: 'Canada’s new duties of 15%, 25% and 50% cover around 700 products. The move follows new US tariffs on Canadian imports and marks a further escalation of the trade dispute.',
        immediateIssue: 'Both countries are using tariffs to pressure the other side, while trying to protect domestic industries and workers from the economic effects.',
      },
      whatYouNeedToKnow: [
        { conceptName: '1. What is a Tariff?', explanation: 'A tariff is a tax imposed on imported goods.' },
        { conceptName: '2. What is a Retaliatory Tariff?', explanation: 'It is a tariff imposed in response to tariffs imposed by another country.' },
        { conceptName: '3. Who Can Be Affected?', explanation: 'Tariffs can affect exporters, importers, workers, businesses and consumers because imported goods can become more expensive.' },
      ],
      breakItDown: { analogyTitle: 'The Price-War Analogy', analogyText: 'If two businesses keep adding extra charges to each other’s products, the final customer may face higher prices and fewer choices. Countries can create a similar chain reaction through tariffs.', chain: ['Country A imposes tariff', 'Country B retaliates', 'Imports become more expensive', 'Businesses adjust supply chains and prices', 'Workers and consumers may be affected'], formalTermExplanation: 'A trade war occurs when countries repeatedly impose trade restrictions against one another, often through tariffs.' },
      wordsYouNeedToKnow: [
        { term: 'Import', meaning: 'A good or service bought from another country.', example: 'Canada imports many goods from the US.' },
        { term: 'Export', meaning: 'A good or service sold to another country.', example: 'Canadian producers export goods to the US.' },
        { term: 'Trade War', meaning: 'An escalating cycle of trade restrictions between countries.', example: 'Retaliatory tariffs can turn a tariff dispute into a trade war.' },
      ],
      whyDoesThisMatter: { heading: 'Why should India care?', points: [
        { label: 'Global Trade', text: 'Trade disputes between major economies can disrupt international supply chains.' },
        { label: 'Prices', text: 'Tariffs can raise the cost of imported inputs and finished goods.' },
        { label: 'Policy', text: 'Countries have to balance protecting domestic producers with keeping trade open.' },
      ] },
      biggerPicture: { chain: ['Tariff', 'Retaliation', 'Higher trade costs', 'Supply-chain changes', 'Global uncertainty'], summary: 'International trade connects economies, so a dispute between two countries can create effects far beyond their borders.' },
      thinkAboutThis: ['Why might a country impose tariffs even though tariffs can also hurt its own consumers?', 'How could a trade war affect a country that is not directly involved?'],
      explainPrompt: 'Explain how retaliatory tariffs can turn a disagreement between two countries into a wider economic problem.'
    },
    {
      id: 'niti-aayog-degrees-skilling', number: 3,
      title: 'Why Does NITI Aayog Say Many Degrees Have Weak Job Linkages?',
      category: '📚 Education, Skills & Employment', newspaperPage: 'Page 10 (Nation)',
      hook: 'A degree is like a map: having one does not automatically mean you know how to reach the destination. Education becomes more useful when what students learn connects with the skills employers actually need.',
      whatHappened: {
        lead: 'NITI Aayog has flagged a disconnect between higher education and labour-market needs, noting that only 8.25% of graduates are employed in roles aligned with their qualifications, according to the report cited by the newspaper.',
        who: 'NITI Aayog, students, graduates, employers and policymakers responsible for education and skilling.', where: 'India.', when: 'The report was released in August 2026.',
        what: 'The report argues for more specialised, job-linked programmes in areas such as green industries and electric vehicles, along with greater emphasis on apprenticeships. It also highlights high graduate unemployment and a large number of young people classified as NEET.',
        immediateIssue: 'India needs to improve the connection between education, skills and employment so that qualifications translate more effectively into productive work.',
      },
      whatYouNeedToKnow: [
        { conceptName: '1. What is Skill Mismatch?', explanation: 'Skill mismatch occurs when the skills people have do not match the skills demanded by available jobs.' },
        { conceptName: '2. What is an Apprenticeship?', explanation: 'An apprenticeship combines practical workplace learning with structured training.' },
        { conceptName: '3. What is NEET?', explanation: 'NEET means Not in Education, Employment or Training.' },
      ],
      breakItDown: { analogyTitle: 'The Sports-Team Analogy', analogyText: 'Imagine selecting players for a cricket team based only on certificates rather than whether they can perform the roles the team needs. A labour market also needs people whose skills fit actual tasks.', chain: ['Education', 'Skills acquired', 'Employer demand', 'Job matching', 'Employment and productivity'], formalTermExplanation: 'Human-capital development works best when education and training equip people with capabilities that are relevant to changing economic activity.' },
      wordsYouNeedToKnow: [
        { term: 'Employability', meaning: 'The combination of knowledge, skills and qualities that helps a person obtain and perform a job.', example: 'Practical training can improve employability.' },
        { term: 'Apprenticeship', meaning: 'A structured form of work-based learning.', example: 'Apprenticeships give students practical experience.' },
        { term: 'Human Capital', meaning: 'The knowledge, skills and capabilities people develop through education, training and experience.', example: 'Investment in education can build human capital.' },
      ],
      whyDoesThisMatter: { heading: 'Why does this matter to students?', points: [
        { label: 'Course Choice', text: 'Students need to understand not only what a qualification teaches but how it connects to future opportunities.' },
        { label: 'Skills', text: 'Communication, technical ability and practical experience can complement formal degrees.' },
        { label: 'Economy', text: 'Better matching between skills and jobs can raise productivity and reduce educated unemployment.' },
      ] },
      biggerPicture: { chain: ['Education', 'Skills', 'Jobs', 'Productivity', 'Economic growth'], summary: 'Education policy is also employment policy because the skills people acquire influence the kinds of work they can perform.' },
      thinkAboutThis: ['Why is a degree alone not necessarily enough to secure a job?', 'Why might apprenticeships help reduce the gap between classroom learning and employment?'],
      explainPrompt: 'Explain the skill mismatch problem described by NITI Aayog and why job-linked education can matter.'
    },
    {
      id: 'rbi-state-of-economy', number: 4,
      title: 'Why Does the RBI Say India’s Economy Is Resilient Despite Global Uncertainty?',
      category: '📈 Indian Economy', newspaperPage: 'Page 15 (Economy)',
      hook: 'Think of a cyclist riding through strong winds. The wind makes the journey harder, but a strong bicycle and steady pedalling can keep the rider moving. The RBI’s assessment similarly points to domestic strengths helping India withstand difficult global conditions.',
      whatHappened: {
        lead: 'An RBI State of the Economy article says India is showing resilience despite geopolitical tensions, renewed US tariffs and trade uncertainty.',
        who: 'Reserve Bank of India researchers and policymakers.', where: 'India and the global economy.', when: 'The RBI article was reported on August 25, 2026.',
        what: 'The RBI points to buoyant domestic demand, recovering manufacturing and services activity, improving monsoon conditions and a rebound in capital inflows as supports for growth. The Monetary Policy Committee had kept the repo rate at 5.25% and marginally raised its FY27 growth forecast to 6.7%.',
        immediateIssue: 'India has to maintain growth while watching inflation and external risks such as tariffs, geopolitical tensions and trade uncertainty.',
      },
      whatYouNeedToKnow: [
        { conceptName: '1. What is the Repo Rate?', explanation: 'It is the policy rate at which the RBI lends to commercial banks, influencing borrowing costs across the economy.' },
        { conceptName: '2. What is Inflation?', explanation: 'Inflation is a sustained rise in the general level of prices, which reduces the purchasing power of money.' },
        { conceptName: '3. What is Domestic Demand?', explanation: 'Domestic demand is spending by households, businesses and governments within the country.' },
      ],
      breakItDown: { analogyTitle: 'The Strong-Bicycle Analogy', analogyText: 'A strong bicycle can keep moving even when the wind is against it. In an economy, strong domestic demand and productive activity can provide support when international conditions are unfavourable.', chain: ['Global uncertainty', 'Domestic demand', 'Manufacturing and services', 'Investment and capital inflows', 'Growth resilience'], formalTermExplanation: 'Economic resilience refers to an economy’s capacity to absorb shocks and continue functioning or recover without a severe and prolonged disruption.' },
      wordsYouNeedToKnow: [
        { term: 'Monetary Policy', meaning: 'The RBI’s management of interest rates and monetary conditions to influence inflation and economic activity.', example: 'The repo rate is a major monetary-policy instrument.' },
        { term: 'Capital Inflows', meaning: 'Money entering a country for investment or other financial purposes.', example: 'A rebound in capital inflows can support investment and financial conditions.' },
        { term: 'Growth Forecast', meaning: 'An estimate of how fast the economy is expected to grow.', example: 'The RBI raised its FY27 growth forecast to 6.7%.' },
      ],
      whyDoesThisMatter: { heading: 'Why does the RBI’s assessment matter?', points: [
        { label: 'Jobs', text: 'Economic activity affects employment and household incomes.' },
        { label: 'Prices', text: 'Inflation affects what households can buy with their income.' },
        { label: 'Interest Rates', text: 'Monetary policy influences the cost of loans for households and businesses.' },
      ] },
      biggerPicture: { chain: ['Global shocks', 'Domestic demand', 'Monetary policy', 'Investment', 'Growth'], summary: 'An economy is influenced by both international conditions and its own domestic strengths.' },
      thinkAboutThis: ['Why can strong domestic demand help an economy withstand global shocks?', 'Why does the RBI have to consider both growth and inflation?'],
      explainPrompt: 'Explain the main reasons the RBI gives for India’s economic resilience and the risks that remain.'
    },
    {
      id: 'tcs-porsche-ai', number: 5,
      title: 'What Does the $1.5-Billion TCS–Porsche Deal Say About Indian IT?',
      category: '💻 Technology, AI & Business', newspaperPage: 'Page 19 (Explained)',
      hook: 'Imagine a company that once mainly repaired machines being hired to redesign the entire factory using artificial intelligence. That is the kind of shift happening as traditional IT services move toward AI, automation and business transformation.',
      whatHappened: {
        lead: 'Tata Consultancy Services has entered a strategic partnership with Porsche AG worth €1.25 billion, around $1.5 billion, to provide AI services across Porsche’s mobility value chain.',
        who: 'Tata Consultancy Services (TCS) and German sports-car maker Porsche AG.', where: 'India–Germany/global technology and automotive sectors.', when: 'Announced in August 2026.',
        what: 'TCS will establish an AI Mobility Centre of Excellence for Porsche covering manufacturing, engineering, operations and customer experience. The article compares this with other large recent deals involving Indian IT companies such as Infosys, Wipro and HCLTech.',
        immediateIssue: 'Large contracts show that global companies are still spending on AI, automation and transformation, but a large contract value does not automatically mean immediate revenue or a full IT-sector boom.',
      },
      whatYouNeedToKnow: [
        { conceptName: '1. What is Generative AI?', explanation: 'Generative AI refers to AI systems capable of producing new content or outputs such as text, images, code or other data.' },
        { conceptName: '2. What is a Centre of Excellence?', explanation: 'It is a specialised unit created to develop expertise, research, standards or innovation in a particular field.' },
        { conceptName: '3. Why Are Contract Values Misleading?', explanation: 'A multi-year contract is usually delivered and recognised over time; the headline value is not the same as immediate annual revenue.' },
      ],
      breakItDown: { analogyTitle: 'The Long-Term Project Analogy', analogyText: 'If a builder signs a ₹100-crore contract for a five-year project, the builder does not receive ₹100 crore as profit on day one. Work, costs, milestones and payments happen over time. IT contracts work similarly.', chain: ['AI demand rises', 'Global firms seek transformation', 'Indian IT firms win large contracts', 'Implementation takes time', 'Revenue and profits must be assessed over several years'], formalTermExplanation: 'The shift toward AI-enabled services can change the composition of IT spending, favouring projects that automate processes, reduce costs or transform business operations.' },
      wordsYouNeedToKnow: [
        { term: 'Inorganic Growth', meaning: 'Growth achieved through acquisitions, mergers or strategic partnerships rather than only through internal expansion.', example: 'Indian IT firms have used acquisitions and partnerships to expand AI capabilities.' },
        { term: 'Automation', meaning: 'Using technology to perform tasks with reduced human intervention.', example: 'AI can support automation in manufacturing and customer service.' },
        { term: 'Revenue Recognition', meaning: 'The accounting process of recording income when it is earned under the relevant accounting rules.', example: 'A long-term contract’s value is not necessarily recognised as revenue immediately.' },
      ],
      whyDoesThisMatter: { heading: 'Why does this matter for India?', points: [
        { label: 'IT Industry', text: 'Indian IT companies are adapting to AI-driven changes in global technology spending.' },
        { label: 'Jobs', text: 'AI can change which technical and business skills are in demand.' },
        { label: 'Exports', text: 'Technology services are an important part of India’s global economic presence.' },
      ] },
      biggerPicture: { chain: ['AI adoption', 'Corporate transformation', 'Indian IT services', 'Large global contracts', 'Changing skill demand'], summary: 'AI is not simply creating new software tools; it is changing what businesses are willing to pay technology companies to do.' },
      thinkAboutThis: ['Why does a large contract not automatically prove that an IT company has returned to a boom?', 'How might AI change the skills students need for future technology jobs?'],
      explainPrompt: 'Explain what the TCS–Porsche deal tells us about AI, Indian IT companies and the changing nature of technology spending.'
    }
  ],
};
