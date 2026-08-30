import { NewspaperEdition } from '../types';

export const indianExpressEdition: NewspaperEdition = {
  newspaperName: 'The Sunday Express',
  editionDate: 'Sunday, August 30, 2026',
  targetAudience: 'Classes 8–10 (Ages 13–16)',
  subheading: 'Daily News Decoded • Turning Headlines into Lifelong Understanding',
  articles: [
    {
      id: 'nepal-flash-floods-aug30', number: 1,
      title: 'Why Are Hundreds of Indians Still Missing in Nepal?',
      category: '🌏 World & Geopolitics', newspaperPage: 'Page 1 (Front Page)',
      hook: 'Imagine a mountain road suddenly becoming a river of mud and water. People can be cut off from the outside world before rescuers can reach them. That is the challenge facing rescue teams in Nepal.',
      whatHappened: {
        lead: 'The front page reports that 275 Indians were still missing in Nepal and that the death toll had climbed to 675.',
        who: 'Indian tourists and pilgrims, Nepali communities, rescue teams and government authorities.', where: 'Nepal, including areas affected by severe flooding and landslides.', when: 'Reported in The Sunday Express on August 30, 2026.',
        what: 'The report says 108 Indians had been rescued so far, while many people remained missing. It also reports that houses were buried in mud and fields and orchards were destroyed. Another report on the page says 10 bodies were retrieved from the Gandak river in Uttar Pradesh.',
        immediateIssue: 'Rescue teams have to locate missing people, move stranded people to safety and provide relief while flood conditions remain dangerous.',
      },
      whatYouNeedToKnow: [
        { conceptName: '1. What is a Flash Flood?', explanation: 'A flash flood is a flood that develops very rapidly, leaving people little time to react.' },
        { conceptName: '2. Why Are Mountains Vulnerable?', explanation: 'Steep slopes can make water and debris move rapidly. Heavy rain can also trigger landslides and sudden flooding.' },
        { conceptName: '3. Why Can Nepal Floods Affect India?', explanation: 'Rivers cross political boundaries. Water and debris moving downstream can affect Indian districts as well.' },
      ],
      breakItDown: { analogyTitle: 'The Upstream–Downstream Analogy', analogyText: 'Think of several villages connected by the same stream. A sudden surge in the first village can become a problem for villages farther downstream even if they received less rain.', chain: ['Heavy rainfall', 'Rapid water rise / landslides', 'Flooding and destruction', 'People stranded or missing', 'Rescue and relief across affected areas'], formalTermExplanation: 'Disaster management includes preparedness, rescue, relief and recovery measures used to reduce the effects of hazards on people and infrastructure.' },
      wordsYouNeedToKnow: [
        { term: 'Flash Flood', meaning: 'A sudden flood that develops rapidly.', example: 'Flash floods can leave very little time for evacuation.' },
        { term: 'Evacuation', meaning: 'Moving people from a dangerous place to a safer one.', example: 'Authorities may evacuate people when floodwaters threaten settlements.' },
        { term: 'Relief', meaning: 'Immediate assistance given to people affected by a disaster.', example: 'Food, shelter, medicine and transport can form part of relief efforts.' },
      ],
      whyDoesThisMatter: { heading: 'Why does this matter to India?', points: [
        { label: 'Citizens', text: 'Many Indian citizens travel to Nepal for tourism and pilgrimage.' },
        { label: 'Geography', text: 'Rivers and weather systems do not stop at international borders.' },
        { label: 'Disaster Management', text: 'The story highlights the importance of early warnings, rescue capacity and regional coordination.' },
      ] },
      biggerPicture: { chain: ['Extreme weather', 'Flood / landslide', 'Humanitarian emergency', 'Rescue and relief', 'Cross-border effects'], summary: 'A natural disaster can quickly become a regional humanitarian issue when people, rivers and transport routes connect neighbouring countries.' },
      thinkAboutThis: ['Why can flooding in one country affect people in another?', 'Why are early warnings especially important for flash floods?'],
      explainPrompt: 'Explain why the Nepal disaster became both a humanitarian emergency and a concern for India.'
    },
    {
      id: 'modi-tashkent-shared-vision', number: 2,
      title: 'What Does India–Uzbekistan “Shared Vision” Mean?',
      category: '🗺️ India & International Relations', newspaperPage: 'Page 1 (Front Page)',
      hook: 'When two countries want a stronger relationship, they need more than one meeting. They identify areas where working together can help both sides — such as trade, energy or defence.',
      whatHappened: {
        lead: 'The front page reports that Prime Minister Narendra Modi’s four-day trip to Central Asia included a bilateral meeting with Uzbekistan President Shavkat Mirziyoyev in Tashkent.',
        who: 'Prime Minister Narendra Modi and Uzbekistan President Shavkat Mirziyoyev.', where: 'Tashkent, Uzbekistan.', when: 'Reported August 29, 2026.',
        what: 'The report says the two leaders discussed a “shared vision” involving trade, energy, defence and connectivity. It also notes cooperation in areas including pharmaceuticals, digital connectivity, defence, energy and advancing relations with Central Asia.',
        immediateIssue: 'India and Uzbekistan are seeking to deepen bilateral cooperation across several strategic and economic areas.',
      },
      whatYouNeedToKnow: [
        { conceptName: '1. What is a Bilateral Relationship?', explanation: 'A bilateral relationship is the relationship between two countries.' },
        { conceptName: '2. What is Connectivity?', explanation: 'Connectivity means the transport, communication and other links that make movement of people, goods, information and services easier.' },
        { conceptName: '3. Why Is Central Asia Important?', explanation: 'Central Asia connects different parts of Eurasia and has economic, energy and strategic importance for India.' },
      ],
      breakItDown: { analogyTitle: 'The School-Club Analogy', analogyText: 'Two school clubs may have different interests but still create a common plan for activities, resources and events. Countries similarly identify areas where cooperation benefits both sides.', chain: ['Common interests', 'Diplomatic meeting', 'Agreements / cooperation', 'Trade and connectivity', 'Stronger bilateral relationship'], formalTermExplanation: 'Bilateral diplomacy is the process through which two countries communicate, negotiate and cooperate on matters of mutual interest.' },
      wordsYouNeedToKnow: [
        { term: 'Bilateral', meaning: 'Involving two countries or sides.', example: 'The Modi–Mirziyoyev meeting was a bilateral meeting.' },
        { term: 'Connectivity', meaning: 'Links that facilitate movement, communication or exchange.', example: 'Better connectivity can make trade easier.' },
        { term: 'Diplomacy', meaning: 'The practice of managing relations between countries through communication and negotiation.', example: 'Diplomacy allows countries to pursue cooperation without conflict.' },
      ],
      whyDoesThisMatter: { heading: 'Why does this matter to India?', points: [
        { label: 'Trade', text: 'Stronger economic links can create opportunities for Indian businesses.' },
        { label: 'Energy & Security', text: 'Energy and defence cooperation are important parts of India’s wider strategic relationships.' },
        { label: 'Central Asia', text: 'Closer relations can strengthen India’s engagement with the wider Central Asian region.' },
      ] },
      biggerPicture: { chain: ['Diplomatic engagement', 'Economic cooperation', 'Connectivity', 'Strategic cooperation', 'Regional engagement'], summary: 'Foreign policy is often built through many areas of cooperation rather than through a single agreement.' },
      thinkAboutThis: ['Why might a country want strong relations with several countries in a region?', 'How can connectivity affect trade and diplomacy?'],
      explainPrompt: 'Explain how India’s relationship with Uzbekistan can involve trade, energy, defence and connectivity at the same time.'
    },
    {
      id: 'sardar-patel-national-unity-award', number: 3,
      title: 'What Is the Sardar Patel National Unity Award and Why Does It Matter?',
      category: '🏛️ Polity & Governance', newspaperPage: 'Page 6 (Politics)',
      hook: 'A country can be united not only by laws and borders but also by people who strengthen cooperation and national unity. Awards can recognise such contributions and encourage others to value them.',
      whatHappened: {
        lead: 'The Politics page reports that the government is likely to name the winner of the Sardar Patel National Unity Award this year, seven years after the award was instituted by the Ministry of Home Affairs.',
        who: 'The Government of India and the committee responsible for considering nominations for the award.', where: 'India.', when: 'Reported August 29, 2026.',
        what: 'The report says the award was instituted in October 2019 and honours contributions to the unity and integrity of India. It says more than 150 nominations have been received for this year and the award is to be presented on October 31, the birth anniversary of Sardar Vallabhbhai Patel.',
        immediateIssue: 'The government is considering nominations and selecting a person whose contribution is regarded as significant to national unity and integrity.',
      },
      whatYouNeedToKnow: [
        { conceptName: '1. What is National Unity?', explanation: 'National unity means maintaining a sense of common belonging and cooperation among people despite differences.' },
        { conceptName: '2. What is an Award?', explanation: 'An award is formal recognition given to a person or organisation for an achievement or contribution.' },
        { conceptName: '3. Who Was Sardar Vallabhbhai Patel?', explanation: 'Sardar Vallabhbhai Patel was a major leader of India’s freedom movement and independent India’s first Deputy Prime Minister and Home Minister.' },
      ],
      breakItDown: { analogyTitle: 'The Team Analogy', analogyText: 'A school team may have students with different talents and backgrounds. It succeeds when members work toward a common goal. National unity similarly involves balancing diversity with shared civic goals.', chain: ['Different people and communities', 'Shared identity and interests', 'Cooperation', 'Social cohesion', 'National unity'], formalTermExplanation: 'National integration refers to strengthening a shared sense of belonging and cooperation among diverse groups within a country.' },
      wordsYouNeedToKnow: [
        { term: 'Unity', meaning: 'The condition of being joined together around common interests or goals.', example: 'Unity can help different communities work together.' },
        { term: 'Integrity', meaning: 'Wholeness and adherence to principles; in this context, the unity and completeness of the nation.', example: 'The award recognises contributions to India’s unity and integrity.' },
        { term: 'Nomination', meaning: 'A formal proposal that a person should be considered for an award or position.', example: 'More than 150 nominations were reportedly received.' },
      ],
      whyDoesThisMatter: { heading: 'Why does this matter?', points: [
        { label: 'Civic Values', text: 'It draws attention to the importance of cooperation and national integration.' },
        { label: 'Institutions', text: 'The award shows how governments use public recognition to honour contributions.' },
        { label: 'History', text: 'The award is linked to Sardar Patel and October 31, his birth anniversary.' },
      ] },
      biggerPicture: { chain: ['Diversity', 'Shared civic identity', 'Cooperation', 'National integration', 'Recognition of contribution'], summary: 'Democracy operates within a diverse society, making social cohesion and respect for common institutions important public values.' },
      thinkAboutThis: ['How can a country remain united while having many languages, cultures and communities?', 'Why might governments create awards for contributions to national unity?'],
      explainPrompt: 'Explain the purpose of the Sardar Patel National Unity Award and how it relates to national integration.'
    },
    {
      id: 'hdfc-jagdishan-step-down', number: 4,
      title: 'Why Does a Bank CEO Stepping Down Matter to Corporate Governance?',
      category: '🏦 Economy & Business', newspaperPage: 'Page 1 (Front Page)',
      hook: 'Imagine a school captain whose term is about to end. The school needs a clear process for choosing the next captain so that the institution keeps functioning smoothly. Companies face a similar challenge when senior leaders change.',
      whatHappened: {
        lead: 'The front page reports that HDFC Bank CEO Sashidhar Jagdishan is to step down, bringing attention to leadership succession and corporate governance at one of India’s major banks.',
        who: 'Sashidhar Jagdishan, HDFC Bank and the bank’s board and stakeholders.', where: 'HDFC Bank, India.', when: 'Reported August 29, 2026.',
        what: 'The report says Jagdishan’s term was due to end on October 26, 2026 and that the change has placed attention on the bank’s leadership transition and governance.',
        immediateIssue: 'A large financial institution needs an orderly leadership transition and a clear process for maintaining accountability and continuity.',
      },
      whatYouNeedToKnow: [
        { conceptName: '1. What is a CEO?', explanation: 'The Chief Executive Officer is the senior executive responsible for leading a company’s operations and strategy.' },
        { conceptName: '2. What is a Board of Directors?', explanation: 'A board oversees a company’s management and major decisions on behalf of shareholders and other stakeholders.' },
        { conceptName: '3. What is Corporate Governance?', explanation: 'Corporate governance is the system of rules, oversight and accountability through which a company is directed and controlled.' },
      ],
      breakItDown: { analogyTitle: 'The School Captain Analogy', analogyText: 'If a school captain leaves, the school needs a fair and orderly process to choose a successor. In a company, leadership succession must also protect continuity, accountability and confidence.', chain: ['Leadership change', 'Succession process', 'Board oversight', 'Continuity and accountability', 'Stakeholder confidence'], formalTermExplanation: 'Leadership succession is the process of preparing for and managing the replacement of senior leaders in an organisation.' },
      wordsYouNeedToKnow: [
        { term: 'CEO', meaning: 'Chief Executive Officer, the senior executive leading a company.', example: 'The CEO is responsible for overall company leadership.' },
        { term: 'Succession', meaning: 'The process of replacing one leader with another.', example: 'A bank needs a well-managed CEO succession process.' },
        { term: 'Corporate Governance', meaning: 'The framework of oversight, accountability and decision-making within a company.', example: 'Good corporate governance helps protect stakeholder interests.' },
      ],
      whyDoesThisMatter: { heading: 'Why does this matter to India?', points: [
        { label: 'Banking', text: 'Large banks are important to households, businesses and the wider economy.' },
        { label: 'Trust', text: 'Stable leadership and strong governance can influence confidence in financial institutions.' },
        { label: 'Accountability', text: 'Corporate governance helps ensure that powerful organisations are properly overseen.' },
      ] },
      biggerPicture: { chain: ['Company leadership', 'Board oversight', 'Succession', 'Governance', 'Public and investor confidence'], summary: 'Leadership changes in major companies are also governance events because institutions need continuity, oversight and accountability.' },
      thinkAboutThis: ['Why should a large company have a clear process for replacing its top leader?', 'Why is corporate governance especially important for banks?'],
      explainPrompt: 'Explain why the change of a major bank’s CEO is not just a personnel matter but also a corporate-governance issue.'
    },
    {
      id: 'kashmiri-pandits-1998', number: 5,
      title: 'Why Does the Story of 23 Kashmiri Pandits Still Matter?',
      category: '📜 History & Society', newspaperPage: 'Page 1 (Front Page)',
      hook: 'A community’s history can remain part of the present when families continue to remember loss, displacement and places they once called home. Understanding such stories requires looking at both the human experience and the larger history.',
      whatHappened: {
        lead: 'The front page reports on a village where 23 Kashmiri Pandits were killed and four houses were destroyed, revisiting memories of a violent period in Kashmir.',
        who: 'Kashmiri Pandit families and residents of the village, along with people affected by the violence in Kashmir.', where: 'A village in Ganderbal district, Kashmir.', when: 'The report looks back to January 25–26, 1998 and its continuing memory today.',
        what: 'The report says 23 Kashmiri Pandits were killed in the village and four houses were burned. It describes the abandoned homes and the memories of residents who survived and later left the area.',
        immediateIssue: 'The story concerns remembrance, the impact of violence on communities and the long-term human consequences of displacement.',
      },
      whatYouNeedToKnow: [
        { conceptName: '1. What is Displacement?', explanation: 'Displacement occurs when people are forced or compelled to leave their homes because of conflict, violence, disasters or other serious circumstances.' },
        { conceptName: '2. What is Communal Violence?', explanation: 'Communal violence refers to violence involving groups identified by community, religion or ethnicity. It can cause deaths, fear and displacement.' },
        { conceptName: '3. Why Does Memory Matter?', explanation: 'Remembering past violence can help societies understand its human cost and preserve the experiences of affected communities.' },
      ],
      breakItDown: { analogyTitle: 'The Abandoned-Home Analogy', analogyText: 'An empty house can look like an ordinary building, but it may contain the story of a family that once lived there. When many families leave because of violence, an entire community’s relationship with a place can change.', chain: ['Violence', 'Deaths and fear', 'People leave homes', 'Community changes', 'Memory and attempts to preserve history'], formalTermExplanation: 'Displacement can have long-term social effects because losing a home can also mean losing neighbourhood networks, livelihoods and a connection to place.' },
      wordsYouNeedToKnow: [
        { term: 'Displacement', meaning: 'Being forced or compelled to leave one’s home or usual place of residence.', example: 'Conflict can cause large-scale displacement.' },
        { term: 'Remembrance', meaning: 'The act of remembering people or events from the past.', example: 'Remembrance can keep the experiences of victims alive in public memory.' },
        { term: 'Community', meaning: 'A group of people connected by place, identity or shared interests.', example: 'Violence can have lasting effects on an entire community.' },
      ],
      whyDoesThisMatter: { heading: 'Why does this matter?', points: [
        { label: 'Human Cost', text: 'Political and security conflicts affect real families, homes and communities.' },
        { label: 'History', text: 'Understanding past violence helps explain why displacement and memory remain important issues.' },
        { label: 'Reconciliation', text: 'Remembering suffering can contribute to conversations about justice, peace and rebuilding trust.' },
      ] },
      biggerPicture: { chain: ['Conflict', 'Violence', 'Displacement', 'Long-term memory', 'Need for peace and reconciliation'], summary: 'The consequences of conflict can continue for decades through loss, displacement, damaged communities and memories passed between generations.' },
      thinkAboutThis: ['How can violence change a community even after the immediate event is over?', 'Why is it important to study the human stories behind historical conflicts?'],
      explainPrompt: 'Explain how violence can create long-term effects on a community through deaths, displacement, damaged homes and memory.'
    }
  ],
};
