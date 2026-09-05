import { NewspaperEdition } from '../types';

export const indianExpressEdition: NewspaperEdition = {
  newspaperName: 'The Indian Express',
  editionDate: 'Saturday, September 5, 2026',
  targetAudience: 'Classes 8–10 (Ages 13–16)',
  subheading: 'Daily News Decoded • Turning Headlines into Lifelong Understanding',
  articles: [
    {
      id: 'air-india-pilot-dope-test-sept5', number: 1,
      title: 'Why Did Air India Fire a Pilot After a Drug Test?',
      category: '✈️ Science, Safety & Governance', newspaperPage: 'Page 1 (Front Page)',
      hook: 'When you board an aircraft, you are trusting hundreds of safety checks. One important part is making sure the people operating the aircraft are fit and able to do their jobs safely.',
      whatHappened: {
        lead: 'The Indian Express reports that Air India terminated the employment of the pilot-in-command of its Phuket–Delhi flight after a drug test was found positive for a psychoactive substance.',
        who: 'Air India, the pilot-in-command, the Aircraft Accident Investigation Bureau (AAIB) and aviation regulators.',
        where: 'The case concerns an Air India flight from Phuket to Delhi.',
        when: 'Reported September 5, 2026; the flight incident occurred on August 4.',
        what: 'The AAIB’s preliminary report flagged the positive drug test. The August 4 flight had 20 passengers and four crew members and reportedly experienced a sudden loss of altitude. The initial investigation also noted a hydraulic-system failure. Air India said safety was its highest priority and that the pilot’s employment was terminated with immediate effect after the test result was flagged.',
        immediateIssue: 'The investigation must determine what caused the flight incident and whether the aircraft systems, crew fitness and other factors played a role.',
      },
      whatYouNeedToKnow: [
        { conceptName: '1. AAIB', explanation: 'Aircraft Accident Investigation Bureau, the body that investigates aircraft accidents and serious incidents in India.' },
        { conceptName: '2. Psychoactive Substance', explanation: 'A substance that can affect the brain, mood, behaviour or perception.' },
        { conceptName: '3. Hydraulic System', explanation: 'A system that uses pressurised fluid to operate important aircraft components such as flight controls or landing equipment.' },
      ],
      breakItDown: {
        analogyTitle: 'The School-Bus Analogy',
        analogyText: 'Imagine a school bus driver becoming unfit to drive. Even if the bus itself is working perfectly, the driver’s condition matters because passengers depend on both the machine and the person operating it.',
        chain: ['Safety rule', 'Testing', 'Problem detected', 'Investigation', 'Corrective action'],
        formalTermExplanation: 'Transport safety depends on both equipment reliability and human fitness, supported by rules, monitoring and investigation.'
      },
      wordsYouNeedToKnow: [
        { term: 'Termination', meaning: 'Ending a person’s employment or contract.', example: 'Air India announced termination of the pilot’s employment.' },
        { term: 'Preliminary Report', meaning: 'An early investigation report containing initial findings that may change as more evidence is examined.', example: 'The AAIB preliminary report flagged the drug-test result.' },
        { term: 'Zero Tolerance', meaning: 'A policy under which a particular violation is treated as unacceptable and acted upon strictly.', example: 'Air India described its approach to safety as zero tolerance.' },
      ],
      whyDoesThisMatter: { heading: 'Why does this matter?', points: [
        { label: 'Passenger Safety', text: 'Air travel requires very high safety standards because small failures can have serious consequences.' },
        { label: 'Science', text: 'Investigators use evidence from systems, tests and records to understand accidents.' },
        { label: 'Regulation', text: 'Safety rules exist so that transport systems do not depend only on individual judgement.' },
      ] },
      biggerPicture: { chain: ['Human fitness', 'Aircraft systems', 'Safety rules', 'Investigation', 'Public trust'], summary: 'Transport safety is a system: people, machines, procedures and regulators all have to work together.' },
      thinkAboutThis: ['Why should investigators examine both the pilot and the aircraft after an aviation incident?', 'Why is an early investigation report called preliminary?'],
      explainPrompt: 'Explain why aviation safety depends on both human fitness and reliable aircraft systems.'
    },
    {
      id: 'india-china-corps-commanders-sept5', number: 2,
      title: 'Why Are India and China Holding Another Corps Commander Meeting?',
      category: '🗺️ India & International Relations', newspaperPage: 'Page 1–2 (Front Page / The Second Page)',
      hook: 'India and China share a long Himalayan border. When two countries have troops deployed close to each other, communication between military commanders can help prevent misunderstandings from becoming larger conflicts.',
      whatHappened: {
        lead: 'The newspaper reports that an India–China Corps Commander-level meeting is expected in the coming days, following recent talks between National Security Adviser Ajit Doval and Chinese Foreign Minister Wang Yi in Beijing.',
        who: 'Indian and Chinese military commanders, Indian National Security Adviser Ajit Doval and Chinese Foreign Minister Wang Yi.',
        where: 'The discussions concern the India–China border, particularly the eastern sector in Arunachal Pradesh.',
        when: 'Reported September 5, 2026.',
        what: 'The report says the military-level talks are expected after the Doval–Wang discussions. The broader diplomatic talks included the boundary question and other bilateral issues. Military-to-military communication is important when troops from two countries operate near each other.',
        immediateIssue: 'India and China have to manage their border relationship while keeping diplomatic and military communication open.',
      },
      whatYouNeedToKnow: [
        { conceptName: '1. Corps Commander', explanation: 'A senior military commander responsible for a large military formation called a corps.' },
        { conceptName: '2. Line of Actual Control', explanation: 'The line separating areas of actual control between India and China, although the two countries have differing perceptions of parts of it.' },
        { conceptName: '3. Confidence-Building', explanation: 'Steps taken by countries to reduce mistrust and the risk of accidental conflict.' },
      ],
      breakItDown: {
        analogyTitle: 'The Neighbour Analogy',
        analogyText: 'If two neighbours share a boundary and occasionally disagree about where the boundary lies, regular conversation can prevent a small misunderstanding from turning into a fight. At an international border, the stakes are much higher.',
        chain: ['Border disagreement', 'Communication', 'Military talks', 'Risk reduction', 'Diplomatic management'],
        formalTermExplanation: 'Military communication mechanisms can help manage tensions and reduce the possibility of accidental escalation along a disputed border.'
      },
      wordsYouNeedToKnow: [
        { term: 'Bilateral', meaning: 'Involving two countries or two sides.', example: 'India–China bilateral relations cover border, trade and other issues.' },
        { term: 'Diplomacy', meaning: 'The practice of managing relations between countries through communication and negotiation.', example: 'Diplomacy can complement military-level talks.' },
        { term: 'Escalation', meaning: 'An increase in the seriousness or intensity of a conflict or dispute.', example: 'Regular communication can reduce the risk of escalation.' },
      ],
      whyDoesThisMatter: { heading: 'Why does this matter to India?', points: [
        { label: 'National Security', text: 'The Himalayan border is strategically important to India.' },
        { label: 'Peace', text: 'Stable communication can reduce the risk of misunderstandings between troops.' },
        { label: 'Foreign Policy', text: 'India must manage its relationship with a major neighbouring power through both diplomacy and security channels.' },
      ] },
      biggerPicture: { chain: ['Border', 'Military presence', 'Communication', 'Diplomacy', 'Peace & security'], summary: 'International relations often involve managing disagreements without allowing them to become open conflict.' },
      thinkAboutThis: ['Why might military commanders need to communicate even when two countries disagree?', 'How can diplomacy and military communication work together?'],
      explainPrompt: 'Explain why communication between military commanders can be important along a disputed international border.'
    },
    {
      id: 'bihar-ganga-floods-sept5', number: 3,
      title: 'Why Is the Rising Ganga Causing a Flood Emergency in Bihar?',
      category: '🌊 Environment & Disaster Management', newspaperPage: 'Page 8 (Nation)',
      hook: 'A river is useful when it stays within its channel. But when water levels rise beyond the river’s capacity, the same river can become a major danger to homes, roads, farms and people.',
      whatHappened: {
        lead: 'The Indian Express reports that the Ganga has crossed the danger mark in Bihar, leading authorities to deploy 33 rescue teams and around 700 boats.',
        who: 'Bihar government, National Disaster Response Force (NDRF), State Disaster Response Force (SDRF), district administrations and affected residents.',
        where: 'Bihar, particularly districts along the Ganga and its connected river systems.',
        when: 'Reported September 5, 2026.',
        what: 'The report says the Ganga is flowing above the danger mark at several locations. Authorities have positioned NDRF and SDRF teams in vulnerable districts and are using boats for rescue and evacuation. The administration has also been asked to prepare for heavy rainfall and possible further rises in river levels. The paper separately reports that more than a third of Uttar Pradesh districts have also been hit by floods.',
        immediateIssue: 'The immediate challenge is protecting people in low-lying and vulnerable areas while keeping rescue, evacuation, food and essential services running.',
      },
      whatYouNeedToKnow: [
        { conceptName: '1. Danger Mark', explanation: 'A river-water level above which flooding risks become serious and authorities may need emergency measures.' },
        { conceptName: '2. NDRF', explanation: 'National Disaster Response Force, a specialised force used for rescue and response during major disasters.' },
        { conceptName: '3. Evacuation', explanation: 'Moving people from a dangerous area to a safer place.' },
      ],
      breakItDown: {
        analogyTitle: 'The Bathtub Analogy',
        analogyText: 'A bathtub can hold water only up to a certain level. If water keeps entering faster than it can drain, it spills over. Rivers can behave similarly when rainfall and inflow push water levels beyond safe limits.',
        chain: ['Heavy rain / inflow', 'River rises', 'Danger mark crossed', 'Flooding risk', 'Rescue & evacuation'],
        formalTermExplanation: 'Flood risk increases when river discharge and rainfall exceed the capacity of river channels and surrounding areas to safely contain the water.'
      },
      wordsYouNeedToKnow: [
        { term: 'Disaster Response', meaning: 'Emergency actions taken to save lives and reduce harm during or immediately after a disaster.', example: 'NDRF teams are part of India’s disaster-response system.' },
        { term: 'Vulnerable Area', meaning: 'A place or community more likely to suffer harm because of its location, infrastructure or other conditions.', example: 'Low-lying areas near rivers can be especially vulnerable to floods.' },
        { term: 'River Discharge', meaning: 'The amount of water flowing through a river at a particular point over a given time.', example: 'Heavy rainfall can increase river discharge.' },
      ],
      whyDoesThisMatter: { heading: 'Why does this matter?', points: [
        { label: 'People', text: 'Floods can damage homes, farms, roads, schools and access to essential services.' },
        { label: 'Government', text: 'Disaster management requires planning before the worst conditions arrive.' },
        { label: 'Environment', text: 'River behaviour depends on rainfall, catchments, land use and the wider environment.' },
      ] },
      biggerPicture: { chain: ['Rainfall', 'River flow', 'Flood risk', 'Disaster response', 'Recovery'], summary: 'A flood is not only a natural event; its human impact also depends on preparedness, infrastructure and the ability to rescue people quickly.' },
      thinkAboutThis: ['Why are boats useful during a flood?', 'Why might authorities evacuate people before water reaches their homes?'],
      explainPrompt: 'Explain how rising river levels can turn heavy rainfall into a disaster-management challenge.'
    },
    {
      id: 'gdp-headline-number-sept5', number: 4,
      title: 'Is India’s 7.8% GDP Growth as Simple as the Headline Suggests?',
      category: '📈 Economy', newspaperPage: 'Page 13 (The Ideas Page)',
      hook: 'Imagine your school says its average marks rose this year. That sounds great, but you would still want to know: Which subjects improved? Which students improved? Was the test easier? A GDP number needs the same kind of deeper look.',
      whatHappened: {
        lead: 'The Ideas Page examines India’s 7.8% real GDP growth figure and explains why a headline growth number needs to be understood alongside the data and method used to calculate it.',
        who: 'India’s statistical system, government economists, businesses and policymakers.',
        where: 'India’s economy.',
        when: 'Reported September 5, 2026.',
        what: 'The article discusses the 7.8% real GDP growth estimate and points out that understanding growth requires looking beyond one headline number. It explains concepts such as the GDP deflator, producer-price and consumer-price measures, and why the quality of statistical data matters. The piece also notes that consumption, investment and the performance of different sectors help explain what is happening underneath the overall GDP figure.',
        immediateIssue: 'The challenge is to understand whether headline growth reflects broad-based economic strength and how changes in prices and measurement affect the numbers.',
      },
      whatYouNeedToKnow: [
        { conceptName: '1. GDP', explanation: 'Gross Domestic Product: the value of final goods and services produced within a country during a period.' },
        { conceptName: '2. Real GDP', explanation: 'GDP adjusted for price changes, used to estimate changes in the actual volume of production.' },
        { conceptName: '3. GDP Deflator', explanation: 'A broad price measure derived from GDP data that helps separate changes in prices from changes in the amount of output.' },
      ],
      breakItDown: {
        analogyTitle: 'The School-Marks Analogy',
        analogyText: 'If your total marks rise from 70 to 78, that is useful information. But to understand your performance, you also need to know whether you improved in every subject, whether the test changed and whether the marking system changed. GDP works similarly.',
        chain: ['Production', 'Prices', 'GDP calculation', 'Real GDP', 'Economic interpretation'],
        formalTermExplanation: 'Real GDP attempts to measure changes in economic output after accounting for changes in prices.'
      },
      wordsYouNeedToKnow: [
        { term: 'Growth Rate', meaning: 'The percentage by which an amount increases or decreases over a period.', example: 'India’s reported real GDP growth rate was 7.8%.' },
        { term: 'Inflation', meaning: 'A sustained rise in the general level of prices.', example: 'Price changes must be considered when interpreting economic growth.' },
        { term: 'Productivity', meaning: 'How efficiently inputs such as labour and capital are used to produce goods and services.', example: 'Higher productivity can support long-term economic growth.' },
      ],
      whyDoesThisMatter: { heading: 'Why does this matter?', points: [
        { label: 'Jobs', text: 'Economic growth matters to people partly because stronger production can create opportunities for employment and incomes.' },
        { label: 'Government', text: 'Policymakers use economic statistics when making budgets and other decisions.' },
        { label: 'You', text: 'GDP affects the wider economic environment in which families, businesses and students live.' },
      ] },
      biggerPicture: { chain: ['Production', 'Income', 'Spending', 'Investment', 'Growth'], summary: 'GDP is a useful map of economic activity, but one number cannot explain the entire economy. The details underneath the headline matter.' },
      thinkAboutThis: ['Why is real GDP more useful than simply comparing money values from two years?', 'Why should we look at more than one economic indicator?'],
      explainPrompt: 'Explain why a country’s GDP growth rate is useful but cannot by itself tell us everything about the economy.'
    },
    {
      id: 'world-food-prices-supply-risks-sept5', number: 5,
      title: 'Why Are World Food Prices Rising Again?',
      category: '🌾 Environment & Global Economy', newspaperPage: 'Page 14 (The World)',
      hook: 'Think about your local shop. If the shopkeeper suddenly receives less of a product while many customers still want it, the price can rise. Global food markets work on a much larger scale.',
      whatHappened: {
        lead: 'The Indian Express reports that world food prices reached their highest level since 2022, with supply risks pushing prices upward.',
        who: 'Food and Agriculture Organization (FAO), farmers, food producers, consumers and governments around the world.',
        where: 'Global food markets.',
        when: 'Reported September 5, 2026.',
        what: 'The report says the FAO food price index rose in August to its highest level since late 2022. It points to supply concerns involving crops and agricultural inputs, along with weather risks. The article notes that higher food prices can affect household budgets and can become especially difficult for poorer families, who spend a larger share of their income on food.',
        immediateIssue: 'The world has to manage the effects of weather, supply disruptions and changing production costs while keeping food affordable.',
      },
      whatYouNeedToKnow: [
        { conceptName: '1. FAO', explanation: 'Food and Agriculture Organization of the United Nations, which works on food, agriculture and food-security issues.' },
        { conceptName: '2. Food Price Index', explanation: 'An indicator used to track changes in international prices of major food commodities.' },
        { conceptName: '3. Supply Shock', explanation: 'A sudden change that reduces or disrupts the supply of a product, often pushing its price higher.' },
      ],
      breakItDown: {
        analogyTitle: 'The School-Canteen Analogy',
        analogyText: 'If a canteen normally receives 100 sandwiches but gets only 60 while the same number of students still want lunch, the shortage can push prices up. A similar supply-and-demand effect happens in food markets.',
        chain: ['Weather / disruption', 'Lower supply', 'Market pressure', 'Higher prices', 'Household impact'],
        formalTermExplanation: 'When supply falls relative to demand, prices tend to rise, although the actual movement also depends on inventories, trade and other market conditions.'
      },
      wordsYouNeedToKnow: [
        { term: 'Commodity', meaning: 'A basic good that is traded in markets, such as wheat, rice, oil or coffee.', example: 'Food commodities are tracked in international markets.' },
        { term: 'Food Security', meaning: 'A situation in which people have reliable access to sufficient, safe and nutritious food.', example: 'High food prices can threaten food security for poorer households.' },
        { term: 'Supply', meaning: 'The amount of a good or service available for sale.', example: 'A fall in food supply can put upward pressure on prices.' },
      ],
      whyDoesThisMatter: { heading: 'Why does this matter to India?', points: [
        { label: 'Households', text: 'Higher food prices can increase household spending on essentials.' },
        { label: 'Farmers', text: 'Weather and input prices can affect both the cost of farming and the income farmers receive.' },
        { label: 'Inflation', text: 'Food prices are an important part of the inflation experienced by consumers.' },
      ] },
      biggerPicture: { chain: ['Weather', 'Food production', 'Global supply', 'Prices', 'Household budgets'], summary: 'Food prices connect climate and weather, farming, international trade, inflation and everyday household expenses.' },
      thinkAboutThis: ['Why can a problem with crops in one region affect food prices elsewhere?', 'Why are poorer families often hit harder by food-price increases?'],
      explainPrompt: 'Explain how a fall in food supply can eventually affect the prices families pay in shops.'
    }
  ],
};
