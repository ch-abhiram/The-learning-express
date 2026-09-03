import { NewspaperEdition } from '../types';

export const indianExpressEdition: NewspaperEdition = {
  newspaperName: 'The Indian Express',
  editionDate: 'Thursday, September 3, 2026',
  targetAudience: 'Classes 8–10 (Ages 13–16)',
  subheading: 'Daily News Decoded • Turning Headlines into Lifelong Understanding',
  articles: [
    {
      id: 'nepal-climate-flood-drones-sept3', number: 1,
      title: 'Why Is Nepal Linking Its Devastating Floods to Climate Change?',
      category: '🌏 Environment & World', newspaperPage: 'Page 2 (The World)',
      hook: 'When a mountain country is hit by an extreme flood, the problem is not only the water. Climate risk, difficult terrain and damaged roads can make rescue much harder.',
      whatHappened: {
        lead: 'The Indian Express reports that Nepal’s flash-flood death toll rose to 1,243, with nearly 4,875 people still missing. Prime Minister Balendra Shah said Nepal would seek international support and justice for climate-related loss and damage.',
        who: 'Nepalese government, security forces, rescue teams, affected communities and the international community.', where: 'Nepal, particularly flood-affected districts adjoining Kathmandu and the Himalayan region.', when: 'Reported September 3, 2026; the flash flood struck on August 26.',
        what: 'PM Shah said more than 13,000 people had been rescued. He described Nepal as vulnerable to global warming and carbon emissions and called for international responsibility to reduce climate impacts. The paper also reports an unusual use of drones: seven bodies were carried from an inaccessible area, while AI-enabled drones assessed villagers’ needs and helped deliver emergency supplies.',
        immediateIssue: 'Nepal must conduct rescue and relief while beginning rehabilitation and reconstruction in areas where terrain, debris and damaged infrastructure make conventional access difficult.',
      },
      whatYouNeedToKnow: [
        { conceptName: '1. Climate Change', explanation: 'Long-term changes in temperatures and weather patterns, increasingly driven by human greenhouse-gas emissions.' },
        { conceptName: '2. Loss and Damage', explanation: 'Climate-related harm that occurs when communities suffer losses and damages from climate impacts, especially where adaptation cannot fully prevent them.' },
        { conceptName: '3. Disaster Technology', explanation: 'Tools such as drones, sensors and communication systems that can improve search, assessment and delivery during disasters.' },
      ],
      breakItDown: { analogyTitle: 'The Climate-Risk Chain', analogyText: 'Climate change can increase hazards, but the final damage also depends on exposure, geography, infrastructure and preparedness.', chain: ['Climate risk', 'Extreme event', 'Exposure', 'Disaster impact', 'Rescue & recovery'], formalTermExplanation: 'Disaster risk is shaped not only by the hazard itself but also by vulnerability, exposure and the capacity to respond.' },
      wordsYouNeedToKnow: [
        { term: 'Rehabilitation', meaning: 'Restoring people and communities so that normal life and livelihoods can resume after a disaster.', example: 'Flood-hit communities need rehabilitation after emergency rescue.' },
        { term: 'Reconstruction', meaning: 'Rebuilding damaged houses, roads, bridges and other infrastructure.', example: 'Reconstruction becomes essential after major flood damage.' },
        { term: 'Carbon Emissions', meaning: 'Release of carbon-containing greenhouse gases, especially carbon dioxide, into the atmosphere.', example: 'The Nepal PM linked global warming to emissions from industrialised countries.' },
      ],
      whyDoesThisMatter: { heading: 'Why does this matter to India?', points: [
        { label: 'Himalayas', text: 'India and Nepal share the Himalayan region, where extreme weather can have cross-border consequences.' },
        { label: 'Disaster Management', text: 'Drones show how technology can supplement human rescue teams in difficult terrain.' },
        { label: 'Climate Diplomacy', text: 'Loss and damage is an important issue in international climate negotiations.' },
      ] },
      biggerPicture: { chain: ['Climate change', 'Extreme weather', 'Human vulnerability', 'Technology & rescue', 'International cooperation'], summary: 'The story connects climate change, disaster management, technology and international responsibility.' },
      thinkAboutThis: ['Why might drones be useful where roads and rescue routes are blocked?', 'Why does climate change become an international issue when its effects occur in one country?'],
      explainPrompt: 'Explain how climate change, vulnerability and disaster-management capacity can combine to produce a humanitarian crisis.'
    },
    {
      id: 'iran-us-gulf-shipping-sept3', number: 2,
      title: 'Why Does the US-Iran Conflict Matter to Global Shipping and Energy?',
      category: '🗺️ World & Geopolitics', newspaperPage: 'Page 2 (The World)',
      hook: 'A conflict in one part of the world can affect countries thousands of kilometres away if it disrupts a major sea route used to transport oil and other goods.',
      whatHappened: {
        lead: 'The newspaper reports a major exchange of fire between the US and Iran, with US strikes on Iranian targets and Iranian attacks on US assets across the Gulf region.',
        who: 'United States, Iran, Gulf countries hosting US military facilities and commercial shipping operators.', where: 'Iran, the Persian Gulf and wider West Asia, including areas around the Strait of Hormuz.', when: 'Reported September 3, 2026.',
        what: 'The US military said it struck Iranian air defences, radar systems, maritime assets, mine-laying capabilities and communications sites. Iran responded with attacks it said targeted US assets in Bahrain, Jordan, Kuwait and Iraq. Iran also reported attacks involving mines and ships near the Strait of Hormuz. Qatar and Bahrain reported intercepting Iranian drones. The article says the conflict has raised fears about shipping and regional stability.',
        immediateIssue: 'The escalation creates security risks for military personnel, civilians and commercial shipping and can affect global energy markets if important routes are disrupted.',
      },
      whatYouNeedToKnow: [
        { conceptName: '1. Strait of Hormuz', explanation: 'A strategically important narrow waterway connecting the Persian Gulf with the Gulf of Oman and Arabian Sea.' },
        { conceptName: '2. Chokepoint', explanation: 'A narrow route through which a large amount of trade or energy supplies must pass, making it strategically important.' },
        { conceptName: '3. Maritime Security', explanation: 'Protection of ships, ports and sea routes from military, criminal or other threats.' },
      ],
      breakItDown: { analogyTitle: 'The Chokepoint Analogy', analogyText: 'Imagine a huge city depending on one major bridge. If that bridge is blocked, traffic problems spread far beyond the bridge itself. Strategic sea chokepoints can work similarly for global trade.', chain: ['Conflict', 'Sea-route risk', 'Shipping disruption', 'Energy / trade effects', 'Global economic impact'], formalTermExplanation: 'A maritime chokepoint can have global strategic significance because disruption can raise transport costs, delay supplies and affect energy markets.' },
      wordsYouNeedToKnow: [
        { term: 'IRGC', meaning: 'Islamic Revolutionary Guard Corps, an Iranian military organisation with major security and regional roles.', example: 'The US said its strikes targeted IRGC-linked sites.' },
        { term: 'Shipping Route', meaning: 'A regular sea pathway used by commercial vessels to transport goods.', example: 'Conflict can make an important shipping route more expensive or dangerous.' },
        { term: 'Escalation', meaning: 'An increase in the intensity or seriousness of a conflict.', example: 'The exchange of strikes represented a dangerous escalation.' },
      ],
      whyDoesThisMatter: { heading: 'Why does this matter to India?', points: [
        { label: 'Energy', text: 'India imports large quantities of crude oil and is sensitive to changes in global energy prices.' },
        { label: 'Trade', text: 'Disruption of major sea routes can raise shipping costs and affect supply chains.' },
        { label: 'Diaspora & Security', text: 'West Asia is home to a large Indian community and has major strategic importance for India.' },
      ] },
      biggerPicture: { chain: ['West Asian conflict', 'Hormuz risk', 'Oil & shipping', 'Prices & trade', 'Indian economy'], summary: 'Geopolitical conflict can transmit economic effects through energy prices, shipping and global supply chains.' },
      thinkAboutThis: ['Why is a narrow sea passage strategically important?', 'How could a conflict in West Asia affect the price of fuel in India?'],
      explainPrompt: 'Explain why the Strait of Hormuz is important not only to West Asia but also to countries such as India.'
    },
    {
      id: 'caste-census-open-ended-sept3', number: 3,
      title: 'Why Does the 2027 Caste Census Raise a Data-Collection Challenge?',
      category: '🏛️ Polity & Society', newspaperPage: 'Page 3 (Front Page)',
      hook: 'Counting people sounds simple until millions of people give answers in different words. Turning those answers into reliable data requires careful design.',
      whatHappened: {
        lead: 'The front page reports a debate over the format for caste enumeration in the 2027 Census, with the government choosing an “open-ended question” rather than a drop-down list.',
        who: 'Office of the Registrar General of India, Ministry of Social Justice and Empowerment, National Commission for Backward Classes and political parties.', where: 'India, in preparation for the 2027 Census.', when: 'Reported September 3, 2026.',
        what: 'The paper says the format has become a political flashpoint. Leaders of Opposition Rahul Gandhi and Mallikarjun Kharge criticised the approach, arguing that accurate caste data is important for social-justice policies. The article also explains a technical challenge: millions of individually written responses would have to be converted into reliable, standardised data without improperly changing what respondents reported.',
        immediateIssue: 'The central question is how to collect caste information in a way that is both faithful to respondents and capable of producing usable national statistics.',
      },
      whatYouNeedToKnow: [
        { conceptName: '1. Census', explanation: 'A systematic enumeration of the population and collection of specified demographic and socio-economic information.' },
        { conceptName: '2. Open-Ended Question', explanation: 'A question where respondents provide their answer in their own words rather than selecting from a fixed list.' },
        { conceptName: '3. Standardisation', explanation: 'Converting varied responses into consistent categories or formats so that data can be reliably compared and analysed.' },
      ],
      breakItDown: { analogyTitle: 'The School-Register Analogy', analogyText: 'If every student writes the name of the same class in a different way, a school cannot easily count them. A census faces a much larger version of the same data-standardisation problem.', chain: ['Question design', 'Individual responses', 'Data processing', 'Standardisation', 'Policy use'], formalTermExplanation: 'Good official statistics depend on clear definitions, consistent collection methods and transparent processing.' },
      wordsYouNeedToKnow: [
        { term: 'Enumeration', meaning: 'The act of counting or listing members of a population.', example: 'Caste enumeration will form part of the census exercise described in the article.' },
        { term: 'Demographic Data', meaning: 'Information describing a population, such as age, sex, location or social characteristics.', example: 'Census data provides important demographic information.' },
        { term: 'Social Justice', meaning: 'The idea that institutions and policies should address inequality and ensure fair opportunities and treatment.', example: 'The political debate links caste data with social-justice policies.' },
      ],
      whyDoesThisMatter: { heading: 'Why does this matter?', points: [
        { label: 'Public Policy', text: 'Government programmes often depend on reliable information about population groups.' },
        { label: 'Statistics', text: 'The way a question is designed can affect the quality and comparability of the resulting data.' },
        { label: 'Constitution & Society', text: 'Caste data intersects with debates on reservation, welfare and representation.' },
      ] },
      biggerPicture: { chain: ['Census design', 'Reliable data', 'Social statistics', 'Policy targeting', 'Evaluation'], summary: 'The story shows why the design of official data collection can have major consequences for public policy.' },
      thinkAboutThis: ['What is the advantage and disadvantage of an open-ended census question?', 'Why is standardisation important when millions of people provide data?'],
      explainPrompt: 'Explain why the design of a census question can influence the usefulness of the final data.'
    },
    {
      id: 'allahabad-hc-nsa-detention-sept3', number: 4,
      title: 'What Does the Allahabad High Court’s NSA Ruling Teach Us About Preventive Detention?',
      category: '⚖️ Polity & Constitution', newspaperPage: 'Page 3 (Front Page)',
      hook: 'Criminal law normally deals with an alleged offence through investigation and trial. Preventive detention is different because it allows detention to prevent a person from acting in a way considered harmful to specified interests.',
      whatHappened: {
        lead: 'The Allahabad High Court quashed the preventive detention of a 25-year-old student connected with a Noida workers’ protest, describing the invocation of the National Security Act as arbitrary and vague.',
        who: 'Allahabad High Court, the detained student, Uttar Pradesh authorities and the police.', where: 'Noida and the Allahabad High Court, Uttar Pradesh.', when: 'Reported September 3, 2026; the student was initially picked up on April 11 and the NSA was invoked on May 13.',
        what: 'The Court was hearing a habeas corpus petition. The student had been in custody in Kasna jail. The report says the High Court quashed the detention; the detailed order was awaited at the time of publication.',
        immediateIssue: 'The case raises questions about the limits and judicial scrutiny of preventive detention under the National Security Act.',
      },
      whatYouNeedToKnow: [
        { conceptName: '1. Preventive Detention', explanation: 'Detention intended to prevent anticipated harmful acts rather than punish a person after conviction for a past offence.' },
        { conceptName: '2. National Security Act', explanation: 'A law that permits preventive detention in specified circumstances relating to security, public order and related concerns.' },
        { conceptName: '3. Habeas Corpus', explanation: 'A judicial remedy through which a court examines whether a person’s detention is legally justified.' },
      ],
      breakItDown: { analogyTitle: 'Punishment vs Prevention', analogyText: 'Punishment generally follows a legal process for an alleged past act. Preventive detention works differently: the justification is to prevent anticipated harm, which is why safeguards and judicial review are important.', chain: ['Detention order', 'Legal grounds', 'Judicial scrutiny', 'Safeguards', 'Release / continuation'], formalTermExplanation: 'Preventive detention is constitutionally permitted in India but is subject to safeguards and legal scrutiny.' },
      wordsYouNeedToKnow: [
        { term: 'Quash', meaning: 'To set aside or cancel a legal order or proceeding.', example: 'The High Court quashed the detention order.' },
        { term: 'Arbitrary', meaning: 'Based on insufficient reason or inconsistent with established legal standards.', example: 'The Court described the invocation of the NSA as arbitrary.' },
        { term: 'Habeas Corpus', meaning: 'A legal remedy used to challenge unlawful detention.', example: 'The detention was challenged through a habeas corpus plea.' },
      ],
      whyDoesThisMatter: { heading: 'Why does this matter?', points: [
        { label: 'Rule of Law', text: 'Government powers of detention must operate within constitutional and legal limits.' },
        { label: 'Fundamental Rights', text: 'Personal liberty is a core constitutional value and detention is subject to safeguards.' },
        { label: 'Judiciary', text: 'Courts can review whether detention complies with legal requirements.' },
      ] },
      biggerPicture: { chain: ['State power', 'Personal liberty', 'Preventive detention', 'Judicial review', 'Rule of law'], summary: 'The case is a practical example of the constitutional balance between public security and individual liberty.' },
      thinkAboutThis: ['Why is preventive detention different from punishment after conviction?', 'Why is habeas corpus important in a democracy?'],
      explainPrompt: 'Explain preventive detention and why courts scrutinise the use of such powers.'
    },
    {
      id: 'nta-computer-based-neet-sept3', number: 5,
      title: 'Why Is NEET-UG Moving Toward Computer-Based Testing?',
      category: '🎓 Education & Governance', newspaperPage: 'Page 11 (Nation)',
      hook: 'Changing a national examination from paper to computers is not simply a software decision. It requires thousands of secure, connected and well-equipped testing locations.',
      whatHappened: {
        lead: 'The National Testing Agency is seeking information from government institutions to identify and develop computer-based testing centres for NEET-UG from next year.',
        who: 'National Testing Agency, All India Council for Technical Education, government universities and technical institutions, students and the Union Education Ministry.', where: 'Across India.', when: 'Reported September 3, 2026.',
        what: 'NTA asked AICTE to collect information about available IT infrastructure and space in government institutions. Institutions have been asked to report functional computers, networking and internet connectivity, power backup, CCTV and vacant space. The move follows the examination-system overhaul after the NEET-UG paper-leak controversy. The government has said NEET-UG will move from pen-and-paper mode to computer-based testing from next year.',
        immediateIssue: 'The challenge is creating a geographically distributed network of secure and reliable testing centres capable of handling a very large national examination.',
      },
      whatYouNeedToKnow: [
        { conceptName: '1. Computer-Based Test', explanation: 'An examination in which candidates answer questions using a computer rather than a paper answer sheet.' },
        { conceptName: '2. Testing Infrastructure', explanation: 'The hardware, software, networks, power systems, security arrangements and physical facilities required to conduct an examination.' },
        { conceptName: '3. NTA', explanation: 'The National Testing Agency is an autonomous organisation that conducts several national-level entrance examinations.' },
      ],
      breakItDown: { analogyTitle: 'The Airport Analogy', analogyText: 'A national computer-based exam needs more than computers, just as an airport needs more than runways. Power, connectivity, security, staff, space and backup systems must work together.', chain: ['Exam reform', 'Infrastructure survey', 'Testing centres', 'Secure delivery', 'Candidate access'], formalTermExplanation: 'Large-scale digital examinations require resilient infrastructure, standardisation and security across geographically distributed centres.' },
      wordsYouNeedToKnow: [
        { term: 'CBT', meaning: 'Computer-Based Test.', example: 'NEET-UG is planned to move to CBT mode.' },
        { term: 'Infrastructure', meaning: 'The physical and technical systems needed to provide a service.', example: 'Institutions are being assessed for computing and network infrastructure.' },
        { term: 'Power Backup', meaning: 'An alternative electricity source used when the main supply fails.', example: 'Power backup is important during a high-stakes computer-based examination.' },
      ],
      whyDoesThisMatter: { heading: 'Why does this matter?', points: [
        { label: 'Students', text: 'A reliable testing network is essential for fair access to a national examination.' },
        { label: 'Digital Governance', text: 'The shift shows how public services increasingly depend on digital infrastructure.' },
        { label: 'Exam Security', text: 'Secure systems and standardised centres can be part of efforts to improve examination integrity.' },
      ] },
      biggerPicture: { chain: ['Paper exam', 'Exam-system reform', 'Digital infrastructure', 'Computer-based testing', 'Standardisation'], summary: 'The proposed transition connects education policy with technology, infrastructure, cybersecurity and administrative capacity.' },
      thinkAboutThis: ['What problems can occur if an exam centre loses internet or electricity?', 'Why must computer-based testing be geographically distributed?'],
      explainPrompt: 'Explain why moving a national examination online requires major administrative and infrastructure planning.'
    }
  ],
};
