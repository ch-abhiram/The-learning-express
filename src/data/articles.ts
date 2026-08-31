import { NewspaperEdition } from '../types';

export const indianExpressEdition: NewspaperEdition = {
  newspaperName: 'The Indian Express',
  editionDate: 'Monday, August 31, 2026',
  targetAudience: 'Classes 8–10 (Ages 13–16)',
  subheading: 'Daily News Decoded • Turning Headlines into Lifelong Understanding',
  articles: [
    {
      id: 'nepal-disaster-dna-rescue', number: 1,
      title: 'Why Is Nepal’s Flood Disaster Still a Major Concern for India?',
      category: '🌏 World & Geopolitics', newspaperPage: 'Pages 1 & 8 (Front Page / Nation)',
      hook: 'Imagine a mountain valley where roads, homes and bridges disappear under water, mud and debris. Even after the rain stops, rescuers may not know where missing people are. That is why disaster response can continue for days.',
      whatHappened: {
        lead: 'The newspaper reports that families are still searching for missing relatives after the Nepal disaster, while Indian authorities continue rescue, identification and relief efforts.',
        who: 'Indian tourists and pilgrims, Nepali communities, rescue teams, forensic teams and government authorities.', where: 'Nepal, particularly areas affected by severe flooding and debris flows, with consequences also reaching parts of India.', when: 'Reported in The Indian Express on August 31, 2026.',
        what: 'Page 8 reports that 403 Indians crossed into Nepal from China and that a forensic team from India began DNA testing to identify remains. The page also reports that the Ministry of External Affairs shared a list of 149 Indians rescued on Sunday. The front page describes families continuing to search for missing relatives.',
        immediateIssue: 'The immediate priorities are finding survivors, identifying the dead, rescuing stranded people and providing relief while affected areas remain difficult to access.',
      },
      whatYouNeedToKnow: [
        { conceptName: '1. What is Disaster Management?', explanation: 'Disaster management includes preparedness, response, rescue, relief, recovery and measures to reduce future disaster risk.' },
        { conceptName: '2. Why Is DNA Testing Used?', explanation: 'DNA can help identify human remains when visual identification is difficult, allowing authorities to establish identity and inform families.' },
        { conceptName: '3. Why Can a Disaster Cross Borders?', explanation: 'Rivers, weather systems, roads and people do not follow political boundaries, so a disaster in one country can affect a neighbouring country.' },
      ],
      breakItDown: { analogyTitle: 'The Connected-Valley Analogy', analogyText: 'Think of several villages connected by the same river and road network. A major landslide or flood in one place can block transport, change river flows and affect people much farther away.', chain: ['Extreme rainfall / sudden water surge', 'Flooding and debris', 'People missing or stranded', 'Rescue and identification', 'Relief and cross-border cooperation'], formalTermExplanation: 'Disaster risk reduction aims to prevent new disaster risks, reduce existing risks and manage residual risks so that communities are better prepared for hazards.' },
      wordsYouNeedToKnow: [
        { term: 'Forensic', meaning: 'Relating to scientific methods used to investigate events and establish facts, especially for legal or identification purposes.', example: 'Forensic teams can use DNA testing to identify remains.' },
        { term: 'Evacuation', meaning: 'Moving people from a dangerous area to a safer place.', example: 'Authorities may order evacuation when floodwaters threaten settlements.' },
        { term: 'Relief', meaning: 'Immediate assistance provided to people affected by a disaster.', example: 'Relief can include food, shelter, medicine and transport.' },
      ],
      whyDoesThisMatter: { heading: 'Why does this matter to India?', points: [
        { label: 'Citizens', text: 'Indian tourists and pilgrims can be caught in disasters abroad.' },
        { label: 'Disaster Management', text: 'The story shows why rescue, early warning, forensic identification and emergency coordination matter.' },
        { label: 'Neighbourhood', text: 'India and Nepal need practical cooperation because people and river systems connect the two countries.' },
      ] },
      biggerPicture: { chain: ['Natural hazard', 'Disaster', 'Humanitarian emergency', 'Scientific identification', 'Relief and regional cooperation'], summary: 'Modern disaster response combines field rescue with technology, administration and cooperation between countries.' },
      thinkAboutThis: ['Why can identifying victims be an important part of disaster relief?', 'How can geography make neighbouring countries dependent on each other during disasters?'],
      explainPrompt: 'Explain how the Nepal disaster shows the importance of disaster management, forensic science and India–Nepal cooperation.'
    },
    {
      id: 'sco-modi-putin-xi', number: 2,
      title: 'Why Is Modi’s SCO Meeting Important for India?',
      category: '🗺️ India & International Relations', newspaperPage: 'Page 1 (Front Page)',
      hook: 'Imagine several neighbouring teams meeting to discuss common problems such as security, transport and trade. They may disagree on some issues but still need a forum where they can talk. The Shanghai Cooperation Organisation works partly in this way.',
      whatHappened: {
        lead: 'The front page reports that Prime Minister Narendra Modi is attending the Shanghai Cooperation Organisation summit in Bishkek and is expected to meet Russian President Vladimir Putin and Chinese President Xi Jinping.',
        who: 'Prime Minister Narendra Modi and leaders of SCO member states, including Russia and China.', where: 'Bishkek, Kyrgyzstan.', when: 'Reported August 30–31, 2026; the two-day SCO summit is taking place on August 31 and September 1.',
        what: 'The report says the summit is taking place amid shifting geopolitics and conflicts in Ukraine and West Asia. Modi said India wants to advance its vision for the region around security, connectivity and opportunity, while opposing terrorism, separatism and extremism.',
        immediateIssue: 'India is using a multilateral forum to engage with major powers and Central Asian countries while pursuing its own regional interests.',
      },
      whatYouNeedToKnow: [
        { conceptName: '1. What is the SCO?', explanation: 'The Shanghai Cooperation Organisation is a Eurasian regional organisation whose members cooperate on areas including security, connectivity and economic and regional issues.' },
        { conceptName: '2. What is Multilateral Diplomacy?', explanation: 'Multilateral diplomacy involves several countries discussing common issues through a shared forum or organisation.' },
        { conceptName: '3. What Are Security, Connectivity and Opportunity?', explanation: 'Security concerns peace and threats such as terrorism; connectivity concerns transport and communication links; opportunity includes economic and developmental cooperation.' },
      ],
      breakItDown: { analogyTitle: 'The Common-Forum Analogy', analogyText: 'A school may have several clubs with different interests. A common student council gives them a place to discuss shared problems and coordinate activities. International organisations can play a similar role among countries.', chain: ['Countries have shared interests', 'Leaders meet in a common forum', 'They discuss security and cooperation', 'Countries pursue national interests', 'Regional relationships develop'], formalTermExplanation: 'Multilateral institutions provide structured forums in which several states can communicate, negotiate and cooperate on regional or global issues.' },
      wordsYouNeedToKnow: [
        { term: 'Multilateral', meaning: 'Involving several countries or parties.', example: 'The SCO is a multilateral regional organisation.' },
        { term: 'Connectivity', meaning: 'Transport, communication and other links that facilitate movement and exchange.', example: 'Improving connectivity can make trade and travel easier.' },
        { term: 'Geopolitics', meaning: 'The study of how geography, power and strategic interests influence relations between countries.', example: 'The war in Ukraine has affected wider Eurasian geopolitics.' },
      ],
      whyDoesThisMatter: { heading: 'Why does this matter to India?', points: [
        { label: 'Security', text: 'India has an interest in regional stability and combating terrorism and extremism.' },
        { label: 'Central Asia', text: 'The SCO gives India a platform for engagement with Central Asian states.' },
        { label: 'Major Powers', text: 'The forum brings India into contact with countries such as Russia and China.' },
      ] },
      biggerPicture: { chain: ['Regional organisation', 'Multilateral diplomacy', 'Security cooperation', 'Connectivity', 'Strategic engagement'], summary: 'Foreign policy is not conducted only through one-to-one meetings; regional organisations give countries another way to manage shared interests.' },
      thinkAboutThis: ['Why might India participate in a forum even when member countries disagree on some issues?', 'How can connectivity become a foreign-policy issue?'],
      explainPrompt: 'Explain why India’s participation in the SCO can be useful for security, connectivity and relations with major Eurasian powers.'
    },
    {
      id: 'india-uzbekistan-uranium', number: 3,
      title: 'Why Is India Discussing Long-Term Uranium Supply with Uzbekistan?',
      category: '⚡ Energy & Strategic Affairs', newspaperPage: 'Page 1 (Front Page)',
      hook: 'Think of electricity generation as a system that needs a reliable supply of fuel. If a country wants more nuclear power, it also needs dependable access to nuclear fuel. That makes fuel supply part of energy security.',
      whatHappened: {
        lead: 'The front page reports that Delhi and Tashkent are discussing long-term uranium supply to India while also working to upgrade bilateral relations.',
        who: 'The governments of India and Uzbekistan and officials involved in energy and diplomatic cooperation.', where: 'India–Uzbekistan relations.', when: 'Reported August 31, 2026 after Prime Minister Narendra Modi’s visit to Uzbekistan.',
        what: 'The newspaper highlights discussions on long-term uranium supply to India alongside efforts to upgrade relations between Delhi and Tashkent. The wider visit also involved cooperation and engagement with Central Asia.',
        immediateIssue: 'India is looking at reliable nuclear-fuel arrangements while deepening its strategic and economic relationship with a Central Asian country.',
      },
      whatYouNeedToKnow: [
        { conceptName: '1. What is Uranium?', explanation: 'Uranium is a naturally occurring element whose isotopes can be used as fuel in nuclear reactors.' },
        { conceptName: '2. What is Nuclear Energy?', explanation: 'Nuclear energy is released from reactions involving atomic nuclei and can be used to generate electricity in nuclear power plants.' },
        { conceptName: '3. What is Energy Security?', explanation: 'Energy security means having reliable and affordable access to the energy needed by a country, including protection against supply disruptions.' },
      ],
      breakItDown: { analogyTitle: 'The Fuel-Supply Analogy', analogyText: 'A bus company cannot operate a large fleet reliably without dependable fuel supplies. A country expanding nuclear electricity generation similarly needs dependable access to suitable nuclear fuel.', chain: ['Electricity demand', 'Nuclear power generation', 'Need for nuclear fuel', 'Long-term supply arrangements', 'Greater energy security'], formalTermExplanation: 'Energy security involves maintaining reliable access to energy while managing geopolitical, economic and supply-chain risks.' },
      wordsYouNeedToKnow: [
        { term: 'Uranium', meaning: 'A naturally occurring chemical element used as fuel in nuclear reactors.', example: 'Uranium can be processed into fuel for nuclear power reactors.' },
        { term: 'Nuclear Reactor', meaning: 'A facility in which a controlled nuclear reaction is used to release energy.', example: 'A nuclear reactor can produce heat that is ultimately used to generate electricity.' },
        { term: 'Energy Security', meaning: 'Reliable access to sufficient and affordable energy.', example: 'Diversifying energy suppliers can strengthen energy security.' },
      ],
      whyDoesThisMatter: { heading: 'Why does this matter to India?', points: [
        { label: 'Electricity', text: 'Reliable fuel supplies are important if nuclear power is to contribute steadily to electricity generation.' },
        { label: 'Foreign Policy', text: 'Energy partnerships can strengthen India’s relationships with resource-producing countries.' },
        { label: 'Strategic Autonomy', text: 'A diverse set of energy relationships can reduce dependence on a single external source.' },
      ] },
      biggerPicture: { chain: ['Energy demand', 'Fuel supply', 'Energy security', 'Foreign partnerships', 'Strategic interests'], summary: 'Energy policy and foreign policy are closely connected because countries depend on international supply chains for many forms of energy.' },
      thinkAboutThis: ['Why would a country prefer a long-term fuel arrangement instead of relying only on short-term purchases?', 'How can energy needs influence foreign policy?'],
      explainPrompt: 'Explain how long-term uranium supply can connect nuclear energy, energy security and India’s relations with Central Asia.'
    },
    {
      id: 'india-gdp-q1-2026', number: 4,
      title: 'Why Is India’s Strong Q1 GDP Growth Significant?',
      category: '📈 Economy & Development', newspaperPage: 'Page 13 (Economy)',
      hook: 'Imagine an economy as a giant machine powered by households, businesses, investment and government activity. If several parts become stronger at the same time, total output can grow faster than expected.',
      whatHappened: {
        lead: 'The Economy page reports that economists expect India’s April–June GDP growth to be well above the RBI’s 7% forecast, following the best first-quarter performance in more than 10 years for loan growth.',
        who: 'Indian households and businesses, banks, the Reserve Bank of India, policymakers and investors.', where: 'India.', when: 'Reported August 30, 2026 for the upcoming April–June GDP figures.',
        what: 'The article says economists expect Q1 GDP growth to be around 8.7%, above the RBI’s 7% forecast. It also highlights strong bank credit growth and discusses inflation and the wider performance of the economy.',
        immediateIssue: 'Policymakers and markets are assessing whether strong growth can continue while inflation, credit conditions and other economic risks are managed.',
      },
      whatYouNeedToKnow: [
        { conceptName: '1. What is GDP?', explanation: 'Gross Domestic Product is the value of final goods and services produced within a country during a specified period.' },
        { conceptName: '2. What is GDP Growth?', explanation: 'GDP growth measures how much economic output has increased or decreased compared with an earlier period.' },
        { conceptName: '3. What is Bank Credit Growth?', explanation: 'It measures the increase in loans and other credit provided by banks. Rising credit can support consumption and investment, although excessive borrowing can also create risks.' },
      ],
      breakItDown: { analogyTitle: 'The Economic-Engine Analogy', analogyText: 'An economy has several engines: consumption, investment, government activity and exports. Stronger activity in these areas can increase total production and GDP.', chain: ['Consumption / investment / credit', 'Business activity', 'Production of goods and services', 'Higher economic output', 'GDP growth'], formalTermExplanation: 'Economic growth refers to an increase in the production of goods and services in an economy over time, commonly measured through changes in real GDP.' },
      wordsYouNeedToKnow: [
        { term: 'GDP', meaning: 'Gross Domestic Product, the value of final goods and services produced within a country during a period.', example: 'GDP is commonly used to measure the size and growth of an economy.' },
        { term: 'Inflation', meaning: 'A sustained increase in the general price level of goods and services.', example: 'Policymakers watch inflation while trying to support economic growth.' },
        { term: 'Credit', meaning: 'Money or purchasing power provided by a lender with an obligation to repay it later.', example: 'Bank credit can help businesses finance investment.' },
      ],
      whyDoesThisMatter: { heading: 'Why does this matter?', points: [
        { label: 'Jobs & Income', text: 'Stronger economic activity can create demand for workers and businesses.' },
        { label: 'Monetary Policy', text: 'Growth and inflation influence how the RBI thinks about economic conditions.' },
        { label: 'Living Standards', text: 'Sustained growth can expand opportunities, although GDP growth alone does not show how income is distributed.' },
      ] },
      biggerPicture: { chain: ['Consumption & investment', 'Production', 'GDP growth', 'Inflation & credit conditions', 'Policy decisions'], summary: 'Economic growth has to be considered together with inflation, credit, employment and the sustainability of demand.' },
      thinkAboutThis: ['Why is a GDP number alone not enough to judge people’s well-being?', 'Why might strong credit growth support the economy but also create risks?'],
      explainPrompt: 'Explain what a stronger-than-expected GDP growth rate tells us about the Indian economy and why policymakers also watch inflation and credit.'
    },
    {
      id: 'cybersecurity-financial-sector', number: 5,
      title: 'Why Are RBI and SEBI Tightening Cybersecurity Rules for Finance?',
      category: '💻 Economy, Technology & Regulation', newspaperPage: 'Page 13 (Economy)',
      hook: 'Imagine a bank as a digital building containing money and sensitive information. A cyberattack can be like someone trying to break into that building through its computer systems. Financial regulators therefore need rules for prevention, detection and reporting.',
      whatHappened: {
        lead: 'The Economy page reports that the RBI and SEBI are strengthening cyber resilience and incident reporting as threats to India’s financial sector become more sophisticated.',
        who: 'The Reserve Bank of India, Securities and Exchange Board of India, banks, financial institutions, market intermediaries and cybersecurity teams.', where: 'India’s banking and financial sector.', when: 'Reported August 30, 2026.',
        what: 'The article discusses stronger cybersecurity frameworks, incident reporting and safeguards for financial institutions. It notes that cyber threats are becoming more sophisticated and that regulators are increasing expectations around preparedness and reporting.',
        immediateIssue: 'Financial institutions need to detect cyber incidents quickly, report them properly and strengthen systems before attacks cause wider disruption.',
      },
      whatYouNeedToKnow: [
        { conceptName: '1. What is Cybersecurity?', explanation: 'Cybersecurity means protecting computers, networks, systems and data from unauthorised access, disruption or damage.' },
        { conceptName: '2. What is Cyber Resilience?', explanation: 'Cyber resilience is the ability of an organisation to prepare for, withstand, respond to and recover from cyber incidents.' },
        { conceptName: '3. Why Do Regulators Matter?', explanation: 'Financial regulators set rules and supervise institutions so that risks to customers, markets and the wider financial system are controlled.' },
      ],
      breakItDown: { analogyTitle: 'The Digital-Bank Analogy', analogyText: 'A physical bank has locks, alarms and security guards. A digital financial institution needs technical controls, monitoring, incident response and backup systems. Regulators set minimum expectations for those protections.', chain: ['Digital financial systems', 'Cyber threat', 'Detection and safeguards', 'Incident reporting', 'Recovery and stronger resilience'], formalTermExplanation: 'Financial-sector cyber resilience is the capacity of financial institutions to continue important operations and recover when cyber incidents occur.' },
      wordsYouNeedToKnow: [
        { term: 'Cybersecurity', meaning: 'Protection of digital systems, networks and information from cyber threats.', example: 'Banks invest in cybersecurity to protect customer accounts and financial systems.' },
        { term: 'Cyber Resilience', meaning: 'The ability to prepare for, withstand, respond to and recover from cyber incidents.', example: 'Strong cyber resilience helps a bank continue operating after an attack.' },
        { term: 'Regulator', meaning: 'An authority that creates and enforces rules for a sector or activity.', example: 'The RBI and SEBI regulate different parts of India’s financial system.' },
      ],
      whyDoesThisMatter: { heading: 'Why does this matter to India?', points: [
        { label: 'Digital Economy', text: 'More financial activity happens online, increasing the importance of secure digital systems.' },
        { label: 'Consumer Protection', text: 'Cybersecurity helps protect people’s money and sensitive financial information.' },
        { label: 'Financial Stability', text: 'A major cyber incident affecting financial institutions could spread beyond one organisation, making sector-wide resilience important.' },
      ] },
      biggerPicture: { chain: ['Digitalisation', 'New cyber risks', 'Regulation', 'Incident response', 'Financial resilience'], summary: 'As finance becomes more digital, cybersecurity becomes part of financial stability and not merely an IT problem.' },
      thinkAboutThis: ['Why might a cyberattack on one financial institution create risks for others?', 'Why should regulators require institutions to report cyber incidents?'],
      explainPrompt: 'Explain why cybersecurity has become a financial-regulation issue rather than only a technology issue.'
    }
  ],
};
