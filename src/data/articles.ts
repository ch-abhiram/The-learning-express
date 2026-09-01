import { NewspaperEdition } from '../types';

export const indianExpressEdition: NewspaperEdition = {
  newspaperName: 'The Indian Express',
  editionDate: 'Tuesday, September 1, 2026',
  targetAudience: 'Classes 8–10 (Ages 13–16)',
  subheading: 'Daily News Decoded • Turning Headlines into Lifelong Understanding',
  articles: [
    {
      id: 'nepal-rescue-equipment-sept1', number: 1,
      title: 'Why Is the Nepal Flood Rescue Operation Struggling?',
      category: '🌏 World & Geopolitics', newspaperPage: 'Page 2 (The World)',
      hook: 'Imagine trying to rescue people from a collapsed building with only basic tools. Even highly trained rescuers can be slowed down when they lack specialised equipment. That is one of the problems facing rescue teams in Nepal.',
      whatHappened: {
        lead: 'The Indian Express reports that rescue teams in Nepal are struggling with shortages of specialised equipment as they search for survivors and recover bodies after devastating flash floods.',
        who: 'Nepal Army, Nepal Police, Armed Police Force, local authorities and people affected by the disaster.', where: 'Nepal, particularly the Bhotekoshi River corridor and areas near the Nepal–Tibet border.', when: 'Reported on September 1, 2026; the disaster began after an event near the Nepal–Tibet border on August 26.',
        what: 'The newspaper reports a death toll of 939 and more than 4,000 people still missing. Officials cited shortages of thermal cameras, life-detection devices, specialised cutting tools, body bags, ropes and advanced helicopters. The floods damaged homes, roads, bridges and hydropower projects.',
        immediateIssue: 'Rescuers need equipment suited to dangerous terrain so they can locate survivors, reach inaccessible areas and safely recover victims.',
      },
      whatYouNeedToKnow: [
        { conceptName: '1. What is a Flash Flood?', explanation: 'A flash flood develops very quickly, often giving people little time to move to safety.' },
        { conceptName: '2. What is Disaster Management?', explanation: 'Disaster management covers preparedness, response, rescue, relief, recovery and efforts to reduce future disaster risk.' },
        { conceptName: '3. Why Does Rescue Equipment Matter?', explanation: 'Specialised tools can help rescuers detect trapped people, remove obstacles and operate safely in difficult terrain.' },
      ],
      breakItDown: { analogyTitle: 'The Emergency Toolkit Analogy', analogyText: 'A doctor needs the right instruments for an operation. Similarly, rescue teams need the right technology and equipment for different disaster conditions.', chain: ['Natural hazard', 'Flood / debris', 'People trapped or missing', 'Specialised rescue equipment', 'Search, rescue and recovery'], formalTermExplanation: 'Disaster response is the phase in which authorities and emergency services take immediate action to save lives, reduce suffering and limit damage after a disaster.' },
      wordsYouNeedToKnow: [
        { term: 'Flash Flood', meaning: 'A rapidly developing flood that can occur with little warning.', example: 'Flash floods can make roads and river crossings suddenly dangerous.' },
        { term: 'Thermal Camera', meaning: 'A camera that detects heat differences and can help locate people in some rescue situations.', example: 'A thermal camera may help rescuers search an area where visibility is poor.' },
        { term: 'Hydropower', meaning: 'Electricity generated using the energy of moving or falling water.', example: 'Flood damage to hydropower projects can affect electricity infrastructure.' },
      ],
      whyDoesThisMatter: { heading: 'Why does this matter to India?', points: [
        { label: 'Neighbourhood', text: 'India and Nepal share close geographical and human links, so major disasters in Nepal can have regional consequences.' },
        { label: 'Disaster Preparedness', text: 'The story shows why investing in rescue technology before disasters happen is important.' },
        { label: 'Infrastructure', text: 'Damage to roads, bridges and hydropower projects can affect recovery long after floodwaters recede.' },
      ] },
      biggerPicture: { chain: ['Hazard', 'Disaster', 'Emergency response', 'Rescue technology', 'Recovery'], summary: 'Effective disaster management depends not only on people and plans but also on appropriate equipment and resilient infrastructure.' },
      thinkAboutThis: ['Why is it better to prepare rescue equipment before a disaster rather than only after one happens?', 'How can damage to infrastructure make disaster recovery harder?'],
      explainPrompt: 'Explain how shortages of specialised rescue equipment can affect disaster response during a major flood.'
    },
    {
      id: 'indus-waters-hague-order-sept1', number: 2,
      title: 'Why Has India Rejected the Hague Court Order on the Indus Waters Treaty?',
      category: '🏛️ Polity & International Relations', newspaperPage: 'Page 3 (Front Page / Politics)',
      hook: 'Imagine two neighbouring families sharing a water tank. They may have an agreement about how much water each can use. If a dispute arises, the meaning of their agreement and who has authority to decide the dispute become important.',
      whatHappened: {
        lead: 'The front page reports that India has rejected an order from the Hague court concerning the Indus Waters Treaty, bringing attention to treaty interpretation, international dispute settlement and India–Pakistan water relations.',
        who: 'Government of India, Pakistan and the international arbitral mechanism at The Hague.', where: 'The dispute concerns the Indus river system shared by India and Pakistan and proceedings at The Hague.', when: 'Reported September 1, 2026.',
        what: 'The newspaper headline states that India rejected the Hague court’s order on the Indus Waters Treaty. The issue concerns how disputes under the treaty are handled and the competing positions of India and Pakistan.',
        immediateIssue: 'The immediate question is how the treaty and the relevant dispute-settlement process should be interpreted and applied.',
      },
      whatYouNeedToKnow: [
        { conceptName: '1. What is the Indus Waters Treaty?', explanation: 'It is a 1960 agreement between India and Pakistan concerning the use and management of waters of the Indus river system.' },
        { conceptName: '2. What is Arbitration?', explanation: 'Arbitration is a method of resolving a dispute in which an agreed or legally recognised tribunal considers the issue and gives a decision or award.' },
        { conceptName: '3. Why Are River Treaties Important?', explanation: 'Shared rivers cross political borders, so countries need arrangements to manage water use and reduce conflict.' },
      ],
      breakItDown: { analogyTitle: 'The Shared-Tank Analogy', analogyText: 'If two households depend on the same water tank, both need agreed rules about access and use. A river treaty performs a similar function at the international level, although the real arrangements are much more complex.', chain: ['Shared river', 'International treaty', 'Different national interests', 'Dispute', 'Negotiation / legal mechanism'], formalTermExplanation: 'Transboundary water governance refers to cooperation and rules for managing water resources that cross international boundaries.' },
      wordsYouNeedToKnow: [
        { term: 'Treaty', meaning: 'A formal international agreement between states.', example: 'The Indus Waters Treaty is an agreement between India and Pakistan.' },
        { term: 'Arbitration', meaning: 'A process in which a tribunal or arbitrator resolves a dispute.', example: 'States may use arbitration when an agreement provides for it.' },
        { term: 'Transboundary', meaning: 'Crossing or involving an international boundary.', example: 'The Indus is a transboundary river system.' },
      ],
      whyDoesThisMatter: { heading: 'Why does this matter to India?', points: [
        { label: 'Water Security', text: 'River waters are important for agriculture, drinking water, electricity and ecosystems.' },
        { label: 'Foreign Policy', text: 'Water management can become part of relations between neighbouring countries.' },
        { label: 'International Law', text: 'The dispute raises questions about treaties and international mechanisms for resolving disagreements.' },
      ] },
      biggerPicture: { chain: ['Shared natural resource', 'Treaty', 'Competing interests', 'Dispute settlement', 'Regional relations'], summary: 'Water diplomacy shows how geography, natural resources, international agreements and foreign policy can intersect.' },
      thinkAboutThis: ['Why do countries sharing a river need rules even when they are not in conflict?', 'What problems could arise if a shared river had no agreed framework?'],
      explainPrompt: 'Explain why the Indus Waters Treaty is important for both water management and India–Pakistan relations.'
    },
    {
      id: 'india-gdp-7-8-q1-sept1', number: 3,
      title: 'How Did Manufacturing and Services Push India’s GDP Growth to 7.8%?',
      category: '📈 Economy & Development', newspaperPage: 'Page 3 (Front Page)',
      hook: 'Think of the economy as a machine with many engines. If factories and services both speed up, the country can produce much more even when there are problems elsewhere in the world.',
      whatHappened: {
        lead: 'The Indian Express reports that India’s economy grew 7.8% year-on-year in the April–June quarter, driven by strong manufacturing and services growth.',
        who: 'Indian businesses, manufacturers, service providers, households, policymakers and the Ministry of Statistics and Programme Implementation.', where: 'India.', when: 'Data released and reported on August 31, 2026 in the September 1 edition.',
        what: 'GDP grew 7.8% year-on-year in Q1. Manufacturing grew 9.2%, compared with 8.3% in the same quarter a year earlier, while the tertiary or services sector grew 10%, compared with 8% a year earlier. The newspaper notes that growth came despite West Asia-related disruptions and high energy prices.',
        immediateIssue: 'The strong growth figure has raised questions about how durable the momentum is and how inflation and energy-price pressures may affect the economy.',
      },
      whatYouNeedToKnow: [
        { conceptName: '1. What is GDP?', explanation: 'Gross Domestic Product is the value of final goods and services produced within a country during a particular period.' },
        { conceptName: '2. What is the Manufacturing Sector?', explanation: 'Manufacturing converts raw materials and components into finished or semi-finished goods, usually in factories.' },
        { conceptName: '3. What is the Tertiary Sector?', explanation: 'The tertiary sector consists mainly of services such as finance, transport, communications, trade, education and healthcare.' },
      ],
      breakItDown: { analogyTitle: 'The Three-Engine Economy Analogy', analogyText: 'Imagine three engines pulling a train: agriculture, industry and services. If industry and services become stronger, the whole train can move faster, even if another part faces difficulties.', chain: ['Manufacturing + services', 'Higher production', 'Higher value of output', 'GDP growth', 'Effects on jobs, incomes and policy'], formalTermExplanation: 'Real GDP growth measures the increase in the volume of economic production after accounting for price changes, allowing comparison of actual output over time.' },
      wordsYouNeedToKnow: [
        { term: 'GDP Growth', meaning: 'The percentage change in a country’s economic output over a period.', example: 'India recorded 7.8% year-on-year GDP growth in the reported quarter.' },
        { term: 'Manufacturing', meaning: 'The production of goods by processing or transforming materials and components.', example: 'Manufacturing growth can increase industrial output and demand for inputs.' },
        { term: 'Tertiary Sector', meaning: 'The services sector of an economy.', example: 'Banking, transport and information technology are examples of services.' },
      ],
      whyDoesThisMatter: { heading: 'Why does this matter?', points: [
        { label: 'Economic Health', text: 'GDP growth gives an important indicator of how much economic activity is taking place.' },
        { label: 'Policy', text: 'Growth, inflation and energy prices influence monetary and fiscal policy decisions.' },
        { label: 'Jobs', text: 'Strong activity in manufacturing and services can create demand for labour and supporting businesses.' },
      ] },
      biggerPicture: { chain: ['Sectoral activity', 'Production', 'GDP', 'Inflation / energy pressures', 'Economic policy'], summary: 'A high growth rate is useful news, but economists also examine which sectors are driving it and whether the momentum can continue.' },
      thinkAboutThis: ['Why is it useful to know which sectors are driving GDP growth?', 'Can GDP grow strongly while some people or regions still face economic difficulties?'],
      explainPrompt: 'Explain how manufacturing and services contributed to India’s 7.8% Q1 GDP growth and why inflation still matters.'
    },
    {
      id: 'delhi-sir-electoral-rolls-sept1', number: 4,
      title: 'Why Were One-Third of Delhi’s Voters Dropped from the Draft Electoral Roll?',
      category: '🗳️ Polity & Democracy', newspaperPage: 'Page 3 (Front Page) & Page 5 (The City)',
      hook: 'Imagine a school updating its student register. If many names disappear, the school must check whether those students left, were entered twice or were removed by mistake. Electoral-roll revision involves a similar verification challenge, but with much greater democratic importance.',
      whatHappened: {
        lead: 'The newspaper reports that around one-third of Delhi’s voters were left out of the draft electoral roll published as part of the Election Commission’s Special Intensive Revision (SIR).',
        who: 'Election Commission authorities, Delhi’s electoral administration and registered voters.', where: 'Delhi.', when: 'Draft electoral roll published August 31, 2026 and reported September 1.',
        what: 'The paper reports that around 47.56 lakh of 1.45 crore voters were dropped from Delhi’s existing electoral roll at the draft stage — about 33%. The front page also reports that the SIR process has produced more than 13 crore deletions across 30 States/UTs so far, with Delhi showing the highest percentage among the listed areas.',
        immediateIssue: 'The draft roll has to be checked through the claims-and-objections process so that eligible voters can seek inclusion and incorrect entries can be addressed before the final roll.',
      },
      whatYouNeedToKnow: [
        { conceptName: '1. What is an Electoral Roll?', explanation: 'An electoral roll is the official list of people registered to vote in a particular constituency or area.' },
        { conceptName: '2. What is Special Intensive Revision (SIR)?', explanation: 'It is a detailed process for revising electoral rolls, including verification and updating of voter information.' },
        { conceptName: '3. Why Does a Draft Roll Matter?', explanation: 'A draft is not necessarily the final list. It provides an opportunity for eligible people to check their details and raise claims or objections.' },
      ],
      breakItDown: { analogyTitle: 'The Class Register Analogy', analogyText: 'Before a school finalises its annual register, it may check who has joined, left, moved or been entered incorrectly. Electoral authorities similarly update voter lists so the final roll is as accurate as possible.', chain: ['Existing voter roll', 'Verification / revision', 'Draft roll', 'Claims and objections', 'Final electoral roll'], formalTermExplanation: 'An electoral roll revision is an administrative process used to add eligible voters, remove ineligible or duplicate entries and correct voter information.' },
      wordsYouNeedToKnow: [
        { term: 'Electoral Roll', meaning: 'The official list of registered voters.', example: 'A voter generally needs to be included in the electoral roll to vote in an election.' },
        { term: 'Revision', meaning: 'A process of reviewing and updating an existing list or record.', example: 'The Election Commission conducts revisions of electoral rolls.' },
        { term: 'Claims and Objections', meaning: 'Requests to add or correct names and objections to entries in a draft electoral roll.', example: 'A person whose eligible name is missing can submit a claim during the prescribed process.' },
      ],
      whyDoesThisMatter: { heading: 'Why does this matter to democracy?', points: [
        { label: 'Right to Vote', text: 'Accurate electoral rolls help eligible citizens exercise their democratic right to vote.' },
        { label: 'Election Integrity', text: 'The voter list needs to be accurate, transparent and regularly updated.' },
        { label: 'Citizen Participation', text: 'Voters should check draft rolls and use the claims-and-objections process when necessary.' },
      ] },
      biggerPicture: { chain: ['Citizens', 'Electoral roll', 'Revision', 'Verification', 'Credible elections'], summary: 'The accuracy of voter lists is a basic administrative foundation for free and fair elections.' },
      thinkAboutThis: ['Why should electoral rolls be updated regularly?', 'Why is it important to distinguish between a draft electoral roll and a final electoral roll?'],
      explainPrompt: 'Explain why electoral-roll revision is important for democracy and what the draft-roll stage allows citizens to do.'
    },
    {
      id: 'modi-iran-dialogue-navigation-trade-sept1', number: 5,
      title: 'Why Did Modi Stress Dialogue, Freedom of Navigation and Trade with Iran?',
      category: '🗺️ India & International Relations', newspaperPage: 'Page 3 (Front Page)',
      hook: 'Imagine a busy highway connecting several cities. If fighting blocks the road, everyone using it can suffer — not just the countries where the fighting happens. Sea routes work in a similar way for international trade.',
      whatHappened: {
        lead: 'The newspaper reports that Prime Minister Narendra Modi met Iranian President Masoud Pezeshkian at the SCO summit in Bishkek and stressed dialogue and diplomacy amid continuing tensions in West Asia.',
        who: 'Prime Minister Narendra Modi and Iranian President Masoud Pezeshkian.', where: 'Bishkek, Kyrgyzstan, on the sidelines of the Shanghai Cooperation Organisation summit.', when: 'Reported September 1, 2026 after the leaders met on August 31.',
        what: 'Modi expressed concern over escalating tensions in West Asia and reiterated that issues should be resolved through dialogue and diplomacy. The report says the discussion also involved freedom of navigation and trade. The meeting took place against a backdrop of fresh US–Iran attacks after a fragile ceasefire.',
        immediateIssue: 'India is seeking stability in a region important for energy supplies, trade routes and the safety of international shipping while maintaining diplomatic engagement with Iran and other parties.',
      },
      whatYouNeedToKnow: [
        { conceptName: '1. What is Freedom of Navigation?', explanation: 'Freedom of navigation refers broadly to the ability of ships to travel through lawful international sea routes without unlawful interference.' },
        { conceptName: '2. Why Is the Middle East Important to India?', explanation: 'The region is important because of energy supplies, trade routes, shipping links and the large Indian community living and working there.' },
        { conceptName: '3. What is Dialogue and Diplomacy?', explanation: 'Dialogue and diplomacy involve communication and negotiation between countries to manage disagreements and seek peaceful solutions.' },
      ],
      breakItDown: { analogyTitle: 'The Global Highway Analogy', analogyText: 'If a major highway is blocked, vehicles carrying goods to many different places are delayed. Major sea lanes can have a similar global effect because ships carry energy, food, raw materials and manufactured goods.', chain: ['Regional conflict', 'Risk to shipping / energy', 'Higher trade costs and uncertainty', 'Diplomatic engagement', 'Regional stability'], formalTermExplanation: 'Freedom of navigation is a principle associated with the lawful use of maritime routes and is particularly important for international commerce and security.' },
      wordsYouNeedToKnow: [
        { term: 'Diplomacy', meaning: 'The practice of managing relations between countries through communication and negotiation.', example: 'India uses diplomacy to maintain relationships with countries on all sides of a regional dispute.' },
        { term: 'Navigation', meaning: 'The process of planning and controlling the movement of ships or other vehicles.', example: 'Safe navigation is essential for international shipping.' },
        { term: 'Geopolitics', meaning: 'The influence of geography, power and strategic interests on international relations.', example: 'West Asian conflicts can affect wider global geopolitics.' },
      ],
      whyDoesThisMatter: { heading: 'Why does this matter to India?', points: [
        { label: 'Energy', text: 'West Asian instability can affect global energy prices and supplies.' },
        { label: 'Trade', text: 'Disruption of sea routes can increase shipping costs and delay goods.' },
        { label: 'Foreign Policy', text: 'India has to maintain relationships with multiple countries while supporting peaceful resolution of conflicts.' },
      ] },
      biggerPicture: { chain: ['Regional conflict', 'Maritime and energy risks', 'Global trade effects', 'Diplomacy', 'Strategic interests'], summary: 'Events in one region can have worldwide economic effects because energy markets and maritime trade connect countries.' },
      thinkAboutThis: ['Why can a conflict far from India affect the price of fuel in India?', 'Why might India prefer dialogue and diplomacy even when it has its own strategic interests?'],
      explainPrompt: 'Explain why freedom of navigation and regional stability in West Asia are important to India’s economy and foreign policy.'
    }
  ],
};
