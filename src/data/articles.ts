import { NewspaperEdition } from '../types';

export const indianExpressEdition: NewspaperEdition = {
  newspaperName: 'The Indian Express',
  editionDate: 'Wednesday, September 2, 2026',
  targetAudience: 'Classes 8–10 (Ages 13–16)',
  subheading: 'Daily News Decoded • Turning Headlines into Lifelong Understanding',
  articles: [
    {
      id: 'nepal-disaster-mass-burials-sept2', number: 1,
      title: 'Why Has Nepal’s Flood Disaster Become a Major Humanitarian Crisis?',
      category: '🌏 World & Geopolitics', newspaperPage: 'Page 2 (The World)',
      hook: 'A disaster does not end when the rain stops. Rescue teams must still find missing people, identify victims, provide shelter and restore damaged infrastructure.',
      whatHappened: {
        lead: 'The front page reports that the death toll from the Nepal disaster has crossed 1,000, with more than 4,000 people still unaccounted for and mass burials taking place in Kathmandu.',
        who: 'Nepalese authorities, rescue teams, families of victims and people affected by the Bhotekoshi flash floods.', where: 'Nepal, especially Kathmandu and the Bhotekoshi River region.', when: 'Reported September 2, 2026; the disaster began on August 26.',
        what: 'The paper reports morgues filling up, unidentified victims being buried and continuing efforts to locate missing people. Page 7 also reports 163 Indians rescued so far and describes people returning from Nepal after the floods.',
        immediateIssue: 'Authorities are dealing simultaneously with rescue, identification, relief, missing-person cases and infrastructure damage.',
      },
      whatYouNeedToKnow: [
        { conceptName: '1. Flash Flood', explanation: 'A flood that develops very rapidly, often leaving little time for evacuation.' },
        { conceptName: '2. Humanitarian Crisis', explanation: 'A situation in which large numbers of people face serious threats to life, health, safety or basic needs.' },
        { conceptName: '3. Disaster Recovery', explanation: 'The longer process of restoring homes, infrastructure, livelihoods and essential services after a disaster.' },
      ],
      breakItDown: { analogyTitle: 'The Chain of Disaster Response', analogyText: 'Think of disaster response as a chain: saving survivors comes first, but identification, relief and rebuilding are also essential links.', chain: ['Hazard', 'Deaths / displacement', 'Rescue', 'Identification & relief', 'Recovery'], formalTermExplanation: 'Disaster management combines preparedness, response, recovery and risk reduction rather than treating rescue as the only task.' },
      wordsYouNeedToKnow: [
        { term: 'Unaccounted For', meaning: 'A person whose whereabouts or status is not yet known.', example: 'Thousands remained unaccounted for after the disaster.' },
        { term: 'Evacuation', meaning: 'Moving people from danger to a safer location.', example: 'Authorities may order evacuation before floodwaters become life-threatening.' },
        { term: 'Relief', meaning: 'Immediate assistance such as food, shelter, medicine and transport after a disaster.', example: 'Relief operations continue after the immediate rescue phase.' },
      ],
      whyDoesThisMatter: { heading: 'Why does this matter to India?', points: [
        { label: 'Citizens Abroad', text: 'Indian tourists and pilgrims can be affected by disasters in neighbouring countries.' },
        { label: 'Preparedness', text: 'The scale of the disaster highlights the importance of early warning, rescue capacity and resilient infrastructure.' },
        { label: 'Neighbourhood', text: 'India and Nepal have close people-to-people and geographical connections.' },
      ] },
      biggerPicture: { chain: ['Extreme event', 'Human impact', 'Emergency response', 'Relief', 'Recovery'], summary: 'A major disaster becomes a long-term governance challenge involving rescue, health, infrastructure and regional cooperation.' },
      thinkAboutThis: ['Why does identifying victims matter to disaster relief?', 'How can damaged roads and bridges make a disaster worse?'],
      explainPrompt: 'Explain why disaster management continues even after the immediate flood has ended.'
    },
    {
      id: 'sc-article142-student-firs-sept2', number: 2,
      title: 'Why Did the Supreme Court Use Article 142 to Quash Student Protest FIRs?',
      category: '⚖️ Polity & Constitution', newspaperPage: 'Page 3 (Front Page)',
      hook: 'Imagine a court facing an unusual situation where ordinary legal remedies may not completely solve the problem. The Constitution gives the Supreme Court a special power to ensure that justice is done.',
      whatHappened: {
        lead: 'The Supreme Court quashed FIRs registered across several States against students who participated in protests over exam paper leaks, using its extraordinary powers under Article 142.',
        who: 'Supreme Court of India, protesting students, Delhi Police and governments of the States involved.', where: 'Proceedings before the Supreme Court concerning FIRs in Delhi, Maharashtra, Bihar, Assam and West Bengal, with other States also mentioned.', when: 'Reported September 2, 2026.',
        what: 'A three-judge bench headed by Chief Justice of India Surya Kant quashed the FIRs. The CJP subsequently called off a planned September 5 protest march after the Court’s order. The Centre was given three months to work out compensation modalities for families of students who ended their lives.',
        immediateIssue: 'The case combines constitutional powers of the Supreme Court, protest-related criminal cases and the government’s response to the underlying concerns about examinations.',
      },
      whatYouNeedToKnow: [
        { conceptName: '1. What is an FIR?', explanation: 'A First Information Report is a formal record made by police when information about a cognisable offence is received.' },
        { conceptName: '2. What is Article 142?', explanation: 'Article 142 empowers the Supreme Court to pass orders necessary for doing complete justice in a matter before it.' },
        { conceptName: '3. What is Judicial Remedy?', explanation: 'A judicial remedy is relief provided by a court to address a legal wrong or dispute.' },
      ],
      breakItDown: { analogyTitle: 'The Constitutional Safety-Net Analogy', analogyText: 'Article 142 can be understood as a constitutional safety-net: it gives the Supreme Court additional power to craft relief when ordinary remedies may not fully achieve justice.', chain: ['Dispute', 'Court hearing', 'Constitutional power', 'Relief', 'Implementation'], formalTermExplanation: 'Article 142 is a constitutional provision giving the Supreme Court power to make orders necessary for complete justice in cases within its jurisdiction.' },
      wordsYouNeedToKnow: [
        { term: 'Quash', meaning: 'To cancel or set aside a legal proceeding or order.', example: 'The Supreme Court quashed the FIRs in the reported case.' },
        { term: 'Extraordinary Power', meaning: 'A special legal or constitutional power available in exceptional circumstances.', example: 'The Court used Article 142 as an extraordinary constitutional power.' },
        { term: 'Compensation', meaning: 'Money or another form of relief provided to address loss or harm.', example: 'The Centre was asked to work out compensation modalities for affected families.' },
      ],
      whyDoesThisMatter: { heading: 'Why does this matter?', points: [
        { label: 'Constitution', text: 'The case is a useful example of how Article 142 operates.' },
        { label: 'Justice', text: 'Courts can provide remedies when disputes reach the judicial system.' },
        { label: 'Students', text: 'The case arose from concerns surrounding examinations and student protests.' },
      ] },
      biggerPicture: { chain: ['Citizen grievance', 'Police case', 'Judicial review', 'Constitutional remedy', 'Justice'], summary: 'The story connects fundamental ideas of constitutional law, judicial power and the right to seek legal remedies.' },
      thinkAboutThis: ['Why might the Supreme Court need special powers in some cases?', 'Why is an FIR different from a conviction?'],
      explainPrompt: 'Explain Article 142 and why the Supreme Court’s use of it is significant in this case.'
    },
    {
      id: 'india-sco-connectivity-terrorism-sept2', number: 3,
      title: 'Why Are Connectivity and Terrorism Central to India’s SCO Strategy?',
      category: '🗺️ India & International Relations', newspaperPage: 'Page 3 & Page 11 (Ideas)',
      hook: 'A country may be surrounded by potential markets but still struggle to trade if roads, railways, air routes and political conditions block access. Geography can therefore shape foreign policy.',
      whatHappened: {
        lead: 'The newspaper reports Prime Minister Narendra Modi calling for dialogue and diplomacy and highlighting connectivity, terrorism, energy security and trade at the SCO summit in Bishkek.',
        who: 'Prime Minister Narendra Modi and leaders of Shanghai Cooperation Organisation member states.', where: 'Bishkek, Kyrgyzstan; the wider focus is Central Asia and Eurasia.', when: 'Reported September 2, 2026.',
        what: 'The paper says India faces connectivity constraints because there is no overland access through Pakistan and Afghanistan’s airspace carries security risks. It argues that India needs to expand economic engagement through products and services less dependent on physical routes, including digital systems and technology. The Uzbekistan uranium agreement is presented as part of deeper Central Asian engagement.',
        immediateIssue: 'India is trying to use multilateral platforms and new economic links to overcome geographic constraints while addressing terrorism and regional instability.',
      },
      whatYouNeedToKnow: [
        { conceptName: '1. What is Connectivity?', explanation: 'Connectivity means physical, digital and logistical links that allow people, goods, information and services to move.' },
        { conceptName: '2. What is Strategic Autonomy?', explanation: 'Strategic autonomy is the ability of a country to pursue its interests and make foreign-policy choices without excessive dependence on another power.' },
        { conceptName: '3. What is Multilateralism?', explanation: 'Multilateralism means countries working through institutions or forums involving several states.' },
      ],
      breakItDown: { analogyTitle: 'The Geography-to-Strategy Chain', analogyText: 'Geography affects routes; routes affect trade; trade affects economic interests; and economic interests can shape foreign policy.', chain: ['Geography', 'Connectivity', 'Trade & investment', 'Security concerns', 'Foreign policy'], formalTermExplanation: 'Connectivity diplomacy uses transport, digital and economic networks as instruments of regional cooperation and strategic engagement.' },
      wordsYouNeedToKnow: [
        { term: 'Connectivity', meaning: 'Links that enable movement, communication and exchange.', example: 'Transport and digital connectivity can strengthen regional trade.' },
        { term: 'Multilateral', meaning: 'Involving several countries or parties.', example: 'The SCO is a multilateral forum.' },
        { term: 'Geopolitics', meaning: 'The influence of geography, power and strategic interests on international relations.', example: 'Central Asia’s location gives it geopolitical importance.' },
      ],
      whyDoesThisMatter: { heading: 'Why does this matter to India?', points: [
        { label: 'Trade', text: 'Better connectivity can expand access to Central Asian and Eurasian markets.' },
        { label: 'Security', text: 'Terrorism and regional instability can affect India’s economic and strategic interests.' },
        { label: 'Energy', text: 'Central Asian resources can contribute to India’s energy security.' },
      ] },
      biggerPicture: { chain: ['Central Asia', 'Connectivity', 'Economic engagement', 'Security', 'Strategic partnerships'], summary: 'India’s Central Asia policy links geography, trade, energy, security and multilateral diplomacy.' },
      thinkAboutThis: ['How can digital connectivity partly overcome geographical barriers?', 'Why can infrastructure become a foreign-policy issue?'],
      explainPrompt: 'Explain why connectivity is not just an infrastructure issue but also a strategic and foreign-policy issue.'
    },
    {
      id: 'india-gdp-inflation-el-nino-sept2', number: 4,
      title: 'Why Could India’s Strong 7.8% GDP Growth Face More Difficult Conditions Ahead?',
      category: '📈 Economy & Development', newspaperPage: 'Page 10 (Economy)',
      hook: 'A car can move quickly today but still face a difficult road tomorrow. Economists therefore look not only at current growth but also at inflation, energy prices, weather and external risks.',
      whatHappened: {
        lead: 'The Ideas/Economy coverage notes that India’s 7.8% first-quarter GDP growth exceeded expectations, but argues that the growth-inflation mix may become less favourable as the year progresses.',
        who: 'Indian households, businesses, policymakers, farmers, the RBI and global markets.', where: 'India, within a wider global economy affected by West Asian conflict and energy prices.', when: 'Reported September 2, 2026.',
        what: 'The analysis says robust industrial activity, consumption, goods exports and government investment supported growth. It expects moderation as West Asia disruptions, unresolved US tariff issues, weather risks and a strong base effect weigh on activity. It also highlights below-normal rainfall, possible El Nino conditions, higher crude prices and inflation risks.',
        immediateIssue: 'Policymakers must balance continued growth with risks from inflation, energy prices, weather and external shocks.',
      },
      whatYouNeedToKnow: [
        { conceptName: '1. What is Inflation?', explanation: 'Inflation is a sustained rise in the general price level of goods and services.' },
        { conceptName: '2. What is El Nino?', explanation: 'El Nino is a periodic warming of the central and eastern tropical Pacific Ocean that can influence weather patterns around the world.' },
        { conceptName: '3. What is Monetary Policy?', explanation: 'Monetary policy is the management of money and interest rates by a central bank to influence inflation and economic conditions.' },
      ],
      breakItDown: { analogyTitle: 'The Growth-vs-Inflation Balance', analogyText: 'If an economy grows strongly but prices and input costs rise rapidly, policymakers face a balancing problem: supporting activity while preventing inflation from becoming persistent.', chain: ['Strong demand', 'Higher production', 'External / weather shocks', 'Inflation pressure', 'Policy response'], formalTermExplanation: 'The growth-inflation trade-off describes the policy challenge of supporting economic activity while keeping inflation under control.' },
      wordsYouNeedToKnow: [
        { term: 'Base Effect', meaning: 'The influence of the level of an earlier comparison period on the calculated growth rate.', example: 'A high base can make the next year’s growth rate appear lower even if output continues to rise.' },
        { term: 'El Nino', meaning: 'A Pacific Ocean climate pattern that can alter rainfall and temperatures in different regions.', example: 'The article warns that El Nino conditions could create weather-related risks.' },
        { term: 'Crude Oil', meaning: 'Unrefined petroleum used to produce fuels and many industrial products.', example: 'Higher crude-oil prices can increase transport and production costs.' },
      ],
      whyDoesThisMatter: { heading: 'Why does this matter?', points: [
        { label: 'Households', text: 'Higher food, fuel and other prices affect purchasing power.' },
        { label: 'Farmers', text: 'Rainfall and reservoir levels influence agricultural production.' },
        { label: 'RBI', text: 'Inflation and growth conditions affect monetary-policy decisions.' },
      ] },
      biggerPicture: { chain: ['GDP growth', 'Weather & oil risks', 'Inflation', 'Interest rates', 'Economic activity'], summary: 'Strong GDP growth is important, but sustainable growth requires managing inflation and external and weather-related risks.' },
      thinkAboutThis: ['Why can higher oil prices slow economic growth?', 'Why does a central bank care about both inflation and growth?'],
      explainPrompt: 'Explain why India can record strong GDP growth while still facing significant economic risks.'
    },
    {
      id: 'fssai-front-pack-warning-labels-sept2', number: 5,
      title: 'Why Is India Considering Red Warning Labels on Unhealthy Packaged Foods?',
      category: '🩺 Health, Society & Governance', newspaperPage: 'Page 10 (Ideas)',
      hook: 'When you buy food quickly, you may not have time to study every ingredient. A simple warning label can make important health information easier to notice.',
      whatHappened: {
        lead: 'The Ideas page discusses the FSSAI proposal for front-of-pack warning labels on packaged foods high in sugar, refined carbohydrates, salt and unhealthy fats.',
        who: 'Food Safety and Standards Authority of India (FSSAI), food manufacturers, consumers and public-health experts.', where: 'India.', when: 'Reported September 2, 2026.',
        what: 'The proposal would use red, hexagonal warning labels, with a separate warning for sweetened beverages. The article notes that the Supreme Court had earlier criticised the food regulator for not moving faster on warning labels. It cites Chile’s experience, where sugary-drink consumption reportedly fell after warning labels were introduced, while also noting concerns about label design and the need for broader action against obesity and malnutrition.',
        immediateIssue: 'The proposal and implementation timeline are still awaited, and questions remain about the threshold for unhealthy ingredients and whether labels will be large and clear enough.',
      },
      whatYouNeedToKnow: [
        { conceptName: '1. What is FSSAI?', explanation: 'The Food Safety and Standards Authority of India is the statutory authority responsible for food safety and standards in India.' },
        { conceptName: '2. What is Front-of-Pack Labelling?', explanation: 'It places key nutritional or health information on the front of food packaging so consumers can see it quickly.' },
        { conceptName: '3. What is a Public-Health Intervention?', explanation: 'It is an action designed to prevent disease or improve population health, such as information, regulation or healthier-environment measures.' },
      ],
      breakItDown: { analogyTitle: 'The Traffic-Sign Analogy', analogyText: 'A traffic sign uses a simple visual signal so people can make a quick decision. A food warning label aims to make a potential health risk visible without requiring a consumer to decode a long ingredient list.', chain: ['Packaged food', 'Nutrition information', 'Warning label', 'Consumer awareness', 'Healthier choices'], formalTermExplanation: 'Front-of-pack warning labels are a form of consumer-information policy intended to influence food choices and improve public health.' },
      wordsYouNeedToKnow: [
        { term: 'FSSAI', meaning: 'India’s statutory food-safety regulator.', example: 'FSSAI sets standards and regulates food safety in India.' },
        { term: 'Refined Carbohydrate', meaning: 'A carbohydrate that has undergone processing that removes much of the original grain’s fibre and structure.', example: 'Many highly processed foods contain refined carbohydrates.' },
        { term: 'Obesity', meaning: 'A condition involving excessive body fat that can increase the risk of several health problems.', example: 'The article discusses obesity as a growing public-health concern.' },
      ],
      whyDoesThisMatter: { heading: 'Why does this matter?', points: [
        { label: 'Consumers', text: 'Clear labels can make nutritional risks easier to notice while shopping.' },
        { label: 'Children', text: 'The article highlights concern about overweight and obesity among children.' },
        { label: 'Governance', text: 'Food regulation shows how governments can use information and standards to influence public health.' },
      ] },
      biggerPicture: { chain: ['Food industry', 'Labelling rules', 'Consumer information', 'Behaviour', 'Public health'], summary: 'Public health can involve regulation and information as well as individual choices and broader lifestyle changes.' },
      thinkAboutThis: ['Why might a warning label work better than a long nutrition table for a hurried shopper?', 'Why can labels alone not solve the obesity problem?'],
      explainPrompt: 'Explain how front-of-pack warning labels can be used as a public-health policy tool and what their limitations are.'
    }
  ],
};
