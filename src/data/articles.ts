import { NewspaperEdition } from '../types';

export const indianExpressEdition: NewspaperEdition = {
  newspaperName: 'The Indian Express',
  editionDate: 'Thursday, August 27, 2026',
  targetAudience: 'Classes 8–10 (Ages 13–16)',
  subheading: 'Daily News Decoded • Turning Headlines into Lifelong Understanding',
  articles: [
    {
      id: 'nepal-flash-floods', number: 1,
      title: 'Why Have Flash Floods in Nepal Become a Major Concern for India?',
      category: '🌏 World & Geopolitics', newspaperPage: 'Page 1 (Front Page)',
      hook: 'Imagine a mountain valley receiving a sudden wall of water and mud. Roads, bridges and settlements can be overwhelmed in minutes. That is why a disaster in Nepal can quickly become a concern for India too, especially when Indian citizens are among those affected.',
      whatHappened: {
        lead: 'The Indian Express reports that more than 150 people had been killed and at least 484 people, including 105 Indians and 37 NRIs, were reported missing after massive flash floods in Nepal.',
        who: 'People in affected Nepali districts, Indian and foreign tourists, Nepalese authorities and Indian relief agencies.', where: 'Nepal, with Indian citizens among those affected.', when: 'Reported on August 26, 2026; the newspaper is dated August 27, 2026.',
        what: 'The report says most of the missing Indians were headed to Kailash Mansarovar. India offered assistance, while additional relief and evacuation efforts were being organised. The newspaper also reports flood alerts in Uttar Pradesh and Bihar.',
        immediateIssue: 'The immediate priorities are locating missing people, rescuing stranded people and delivering relief while continuing to monitor flood risks downstream.',
      },
      whatYouNeedToKnow: [
        { conceptName: '1. What is a Flash Flood?', explanation: 'A flash flood is a rapid and often sudden flood that can develop within a short period, leaving little time for warning.' },
        { conceptName: '2. Why Can Mountain Areas Flood Suddenly?', explanation: 'Steep terrain, intense rainfall, landslides and sudden releases of water can cause water levels to rise very quickly.' },
        { conceptName: '3. Why Does India Get Involved?', explanation: 'India has citizens travelling in Nepal and shares close geographic and humanitarian links with the country, so rescue and relief can require cooperation.' },
      ],
      breakItDown: { analogyTitle: 'The Upstream–Downstream Analogy', analogyText: 'Think of a stream flowing through several connected villages. A sudden surge upstream can affect people downstream even if the rain did not fall directly on them. Rivers and flood systems do not stop at political borders.', chain: ['Heavy rainfall / sudden water surge', 'Flash flooding', 'Damage and people stranded', 'Rescue and relief', 'Cross-border humanitarian coordination'], formalTermExplanation: 'Disaster management includes preparedness, rescue, relief and recovery measures used to reduce the effects of hazards on people and infrastructure.' },
      wordsYouNeedToKnow: [
        { term: 'Flash Flood', meaning: 'A sudden flood that develops rapidly, often after intense rain or a sudden release of water.', example: 'Flash floods can give communities very little time to respond.' },
        { term: 'Relief', meaning: 'Immediate assistance provided to people affected by a disaster.', example: 'Relief can include food, shelter, medicine and transport.' },
        { term: 'Evacuation', meaning: 'Moving people from a dangerous area to a safer place.', example: 'Authorities may order evacuation when flooding threatens settlements.' },
      ],
      whyDoesThisMatter: { heading: 'Why does this matter to India?', points: [
        { label: 'Citizens', text: 'Indian tourists and pilgrims can be affected by disasters in neighbouring countries.' },
        { label: 'Disaster Management', text: 'Flood alerts and preparedness are important in vulnerable regions, including parts of northern India.' },
        { label: 'Neighbourhood', text: 'India and Nepal need practical cooperation during major humanitarian emergencies.' },
      ] },
      biggerPicture: { chain: ['Extreme weather', 'Flash flooding', 'Human losses', 'Emergency response', 'Regional cooperation'], summary: 'Natural disasters can create consequences across borders, making preparedness and cooperation as important as rescue after a disaster.' },
      thinkAboutThis: ['Why can a disaster in one country affect people and authorities in another country?', 'Why is early warning important during flash floods?'],
      explainPrompt: 'Explain why the Nepal flash floods became both a humanitarian emergency and a concern for India.'
    },
    {
      id: 'india-china-lac-talks', number: 2,
      title: 'Why Are India and China Advancing Talks on the LAC?',
      category: '🗺️ India & International Relations', newspaperPage: 'Page 1 (Front Page)',
      hook: 'Imagine two neighbours who disagree about where their property boundary lies. Even while the disagreement continues, they may need regular meetings to prevent small problems from becoming bigger ones. Border diplomacy works in a similar way.',
      whatHappened: {
        lead: 'The newspaper reports that India and China have agreed on outcomes of a meeting between National Security Adviser Ajit Doval and Chinese Foreign Minister Wang Yi, with boundary talks moving towards early-harvest meeting points.',
        who: 'India’s National Security Adviser Ajit Doval and Chinese Foreign Minister Wang Yi, along with officials involved in boundary negotiations.', where: 'India–China diplomatic and border discussions.', when: 'Reported August 26, 2026.',
        what: 'The report says the two sides are discussing early and substantive outcomes in their boundary process and that the talks are linked to broader efforts to manage the relationship.',
        immediateIssue: 'India and China have to handle a disputed boundary while maintaining diplomatic communication and working towards practical arrangements.',
      },
      whatYouNeedToKnow: [
        { conceptName: '1. What is the LAC?', explanation: 'The Line of Actual Control is the line separating areas controlled by India and China in the disputed border region.' },
        { conceptName: '2. What is a Boundary Negotiation?', explanation: 'It is a diplomatic process through which countries discuss and attempt to settle questions about their borders.' },
        { conceptName: '3. What Does “Early Harvest” Mean?', explanation: 'In diplomacy, an early-harvest approach seeks smaller or practical agreements that can be achieved before a complete settlement of a larger issue.' },
      ],
      breakItDown: { analogyTitle: 'The Boundary-Dispute Analogy', analogyText: 'Two neighbours may not immediately agree on the exact boundary between their properties. They can still agree on practical rules for reducing friction while the larger dispute is being discussed.', chain: ['Border dispute', 'Regular dialogue', 'Practical confidence-building', 'Reduced risk of incidents', 'Longer-term boundary negotiations'], formalTermExplanation: 'Confidence-building measures are steps intended to reduce mistrust and the risk of unintended conflict between countries.' },
      wordsYouNeedToKnow: [
        { term: 'Bilateral', meaning: 'Involving two countries or sides.', example: 'India–China boundary talks are bilateral negotiations.' },
        { term: 'Negotiation', meaning: 'A discussion in which parties try to reach an agreement.', example: 'Boundary questions often require long negotiations.' },
        { term: 'Confidence-Building Measure', meaning: 'A step designed to reduce mistrust and the risk of conflict.', example: 'Regular communication can act as a confidence-building measure.' },
      ],
      whyDoesThisMatter: { heading: 'Why does this matter to India?', points: [
        { label: 'Security', text: 'The Himalayan boundary is strategically important for India.' },
        { label: 'Diplomacy', text: 'Regular talks can help prevent disagreements from escalating.' },
        { label: 'Stability', text: 'A more stable border environment can support wider economic and diplomatic engagement.' },
      ] },
      biggerPicture: { chain: ['Border dispute', 'Diplomatic talks', 'Confidence building', 'Stability', 'Long-term settlement'], summary: 'International disputes are often managed through repeated negotiation even when a final solution takes much longer.' },
      thinkAboutThis: ['Why might countries continue negotiating even when they disagree strongly?', 'How can smaller agreements help with a much larger dispute?'],
      explainPrompt: 'Explain why advancing India–China boundary talks can matter even before the entire border dispute is settled.'
    },
    {
      id: 'russia-india-petrol', number: 3,
      title: 'Why Is Russia Turning to India for Petrol Demand After Ukraine Strikes?',
      category: '⛽ Economy & World Affairs', newspaperPage: 'Page 1 (Front Page)',
      hook: 'Imagine a city whose main fuel supplier suddenly loses part of its ability to produce or transport fuel. It may need to look for another supplier quickly. International energy trade can work in a similar way.',
      whatHappened: {
        lead: 'The Indian Express reports that Russia has turned to India to meet petrol demand after Ukrainian strikes hit parts of Russia’s oil infrastructure.',
        who: 'Russia, India and companies involved in international oil trade and refining.', where: 'Russia–India energy trade, with impacts on the wider global oil market.', when: 'Reported August 26, 2026.',
        what: 'The report says Russia imported around one million barrels in two months and that Indian refiners are part of the changing trade flows after attacks affected Russian oil infrastructure.',
        immediateIssue: 'Damage to refining infrastructure can reduce available fuel, so countries may adjust imports, exports and supply routes to keep domestic markets supplied.',
      },
      whatYouNeedToKnow: [
        { conceptName: '1. What is Crude Oil?', explanation: 'Crude oil is unrefined petroleum extracted from underground and processed into fuels and other products.' },
        { conceptName: '2. What is Refining?', explanation: 'Refining converts crude oil into usable products such as petrol, diesel and other petroleum products.' },
        { conceptName: '3. Why Does Infrastructure Matter?', explanation: 'Oil production and refining depend on large facilities and transport networks. Damage to them can reduce fuel supply.' },
      ],
      breakItDown: { analogyTitle: 'The Local-Shop Supply Analogy', analogyText: 'If a neighbourhood shop loses its stockroom, it may temporarily buy goods from another shop or supplier. Countries can similarly change trade routes when production or refining capacity is disrupted.', chain: ['Infrastructure is hit', 'Fuel supply is disrupted', 'Domestic demand remains', 'Imports or alternative suppliers increase', 'Trade flows change'], formalTermExplanation: 'Energy security is the ability of a country to maintain reliable and affordable access to energy despite disruptions or external risks.' },
      wordsYouNeedToKnow: [
        { term: 'Refinery', meaning: 'An industrial facility that processes crude oil into petroleum products.', example: 'A refinery can produce petrol and diesel from crude oil.' },
        { term: 'Energy Security', meaning: 'Reliable access to sufficient and affordable energy.', example: 'Countries diversify suppliers to strengthen energy security.' },
        { term: 'Supply Disruption', meaning: 'A disturbance that reduces or delays the normal flow of a product.', example: 'Damage to oil infrastructure can cause a supply disruption.' },
      ],
      whyDoesThisMatter: { heading: 'Why does this matter to India?', points: [
        { label: 'Energy', text: 'India is a major consumer of petroleum products, so global oil-market changes matter to fuel availability and prices.' },
        { label: 'Foreign Policy', text: 'Energy trade is closely connected to India’s relationships with major oil-producing countries.' },
        { label: 'Global Markets', text: 'Changes in refining capacity and trade routes can affect international fuel markets.' },
      ] },
      biggerPicture: { chain: ['Conflict', 'Infrastructure damage', 'Fuel shortage', 'Changed trade flows', 'Energy security'], summary: 'Geopolitical conflicts can affect everyday commodities such as fuel by changing where energy is produced, refined and traded.' },
      thinkAboutThis: ['Why might a country change its import sources after its own refining capacity is damaged?', 'How can a war affect people in countries far from the battlefield?'],
      explainPrompt: 'Explain how damage to Russian oil infrastructure can change Russia–India energy trade and wider fuel markets.'
    },
    {
      id: 'us-debt-fed', number: 4,
      title: 'Why Does the US Debt Reaching $40 Trillion Put Attention on the Fed?',
      category: '📈 Economy & Global Finance', newspaperPage: 'Page 15 (Economy)',
      hook: 'Think of a family that has borrowed more and more over many years. As the loan becomes larger, even a small rise in interest rates can make the interest bill much bigger. Governments face a similar arithmetic when their debt grows.',
      whatHappened: {
        lead: 'The Economy page reports that US government debt has crossed $40 trillion, increasing attention on the Federal Reserve’s interest-rate decisions and the cost of servicing government borrowing.',
        who: 'The US government, Federal Reserve, investors and taxpayers.', where: 'United States, with implications for global financial markets.', when: 'Reported in the August 27, 2026 Economy edition.',
        what: 'The article discusses rising US borrowing costs and why markets are watching the Federal Reserve’s stance. Higher interest rates can increase the cost of servicing government debt when borrowing is refinanced.',
        immediateIssue: 'The US has to manage a very large debt burden while monetary policy decisions affect borrowing costs, inflation and economic activity.',
      },
      whatYouNeedToKnow: [
        { conceptName: '1. What is Public Debt?', explanation: 'Public debt is money owed by a government to lenders, including investors who buy government securities.' },
        { conceptName: '2. What is Interest on Debt?', explanation: 'Interest is the cost of borrowing money. Governments pay interest to lenders on their outstanding debt.' },
        { conceptName: '3. What Does the Fed Do?', explanation: 'The Federal Reserve is the US central bank. Its monetary-policy decisions influence interest rates and financial conditions.' },
      ],
      breakItDown: { analogyTitle: 'The Family-Loan Analogy', analogyText: 'Suppose a family has a large loan. If interest rates rise, renewing or taking on debt can become more expensive. A government also has to consider how much it will spend on interest as its debt grows.', chain: ['Government borrows', 'Debt stock grows', 'Interest rates affect borrowing costs', 'Debt-service costs matter', 'Markets watch fiscal and monetary policy'], formalTermExplanation: 'Debt sustainability concerns whether a government can continue meeting its debt obligations without an unsustainable rise in borrowing or severe economic disruption.' },
      wordsYouNeedToKnow: [
        { term: 'Fiscal Policy', meaning: 'Government decisions about taxation, spending and borrowing.', example: 'Government borrowing is part of fiscal policy.' },
        { term: 'Monetary Policy', meaning: 'Central-bank decisions that influence interest rates and monetary conditions.', example: 'The Federal Reserve uses monetary policy to influence economic conditions.' },
        { term: 'Debt Servicing', meaning: 'Making interest and principal payments on borrowed money.', example: 'Higher interest rates can increase debt-servicing costs.' },
      ],
      whyDoesThisMatter: { heading: 'Why should India care?', points: [
        { label: 'Global Finance', text: 'US interest rates influence borrowing conditions and investment decisions around the world.' },
        { label: 'Exchange Rates', text: 'Changes in US interest rates can affect global capital flows and currency markets.' },
        { label: 'Economic Policy', text: 'The story shows how fiscal borrowing and monetary policy can interact.' },
      ] },
      biggerPicture: { chain: ['Government borrowing', 'Public debt', 'Interest costs', 'Monetary policy', 'Global financial effects'], summary: 'A government’s debt is not just a number: the size and cost of borrowing can influence future budgets and financial markets.' },
      thinkAboutThis: ['Why does the interest rate matter more when the amount of debt is very large?', 'Why can US monetary policy affect countries such as India?'],
      explainPrompt: 'Explain why very high US government debt makes interest rates and Federal Reserve decisions especially important to financial markets.'
    },
    {
      id: 'india-china-textile-japan', number: 5,
      title: 'Why Is India Trying to Become a Bigger Textile Supplier to Japan?',
      category: '🏭 Business, Trade & Industry', newspaperPage: 'Page 15 (Economy)',
      hook: 'Imagine a country that wants to become a bigger supplier to a large shop chain. It must show that it can provide the right products, quality and reliability at competitive prices. India is trying to do something similar in the Japanese textile market.',
      whatHappened: {
        lead: 'The Economy page reports that Commerce Minister Piyush Goyal’s Japan tour is aimed at encouraging Japanese textile companies such as Uniqlo and others to increase sourcing from India.',
        who: 'India’s Commerce Ministry, Japanese textile companies and Indian textile producers.', where: 'India–Japan trade relationship.', when: 'Reported August 26, 2026 during the Commerce Minister’s Japan visit.',
        what: 'The report says India wants Japanese companies to expand sourcing from India. It notes that Japan has invested significantly in India and that the two countries are discussing wider opportunities for trade and investment.',
        immediateIssue: 'India wants to attract more manufacturing and sourcing from Japan while meeting requirements on quality, scale, cost and supply reliability.',
      },
      whatYouNeedToKnow: [
        { conceptName: '1. What is Sourcing?', explanation: 'Sourcing means obtaining goods, materials or services from suppliers.' },
        { conceptName: '2. What is a Supply Chain?', explanation: 'A supply chain is the network through which materials and products move from suppliers to producers and finally to customers.' },
        { conceptName: '3. Why Do Companies Diversify Suppliers?', explanation: 'Companies may use suppliers in different countries to reduce dependence on one location and improve resilience.' },
      ],
      breakItDown: { analogyTitle: 'The School-Supply Analogy', analogyText: 'If a school buys notebooks from one supplier, it may want a second reliable supplier in case the first cannot deliver enough. Large companies make similar decisions, but on a global scale.', chain: ['Company needs products', 'Looks for reliable suppliers', 'India seeks more sourcing', 'Manufacturing and investment increase', 'Trade links deepen'], formalTermExplanation: 'Supply-chain diversification means spreading sourcing or production across different suppliers or locations to reduce dependence on a single source.' },
      wordsYouNeedToKnow: [
        { term: 'Sourcing', meaning: 'Obtaining goods or inputs from suppliers.', example: 'Japanese companies can increase textile sourcing from India.' },
        { term: 'Investment', meaning: 'Money committed to an activity or asset with the expectation of future returns or benefits.', example: 'Foreign investment can help expand manufacturing capacity.' },
        { term: 'Diversification', meaning: 'Spreading activity across different sources, products or markets to reduce dependence on one option.', example: 'Companies diversify supply chains to manage disruption risks.' },
      ],
      whyDoesThisMatter: { heading: 'Why does this matter to India?', points: [
        { label: 'Jobs', text: 'More textile production and exports can create employment opportunities.' },
        { label: 'Manufacturing', text: 'Foreign sourcing can encourage Indian firms to expand capacity and improve standards.' },
        { label: 'Trade', text: 'Stronger supply-chain links can deepen India–Japan economic relations.' },
      ] },
      biggerPicture: { chain: ['Global sourcing', 'Indian manufacturing', 'Japanese demand', 'Investment', 'Exports and jobs'], summary: 'International trade is not only about selling finished products; it also involves where global companies choose to manufacture and source their goods.' },
      thinkAboutThis: ['Why would a global company want suppliers in more than one country?', 'What would Indian textile producers need to offer to attract more international sourcing?'],
      explainPrompt: 'Explain how greater Japanese sourcing from India could affect Indian manufacturing, jobs and trade.'
    }
  ],
};
