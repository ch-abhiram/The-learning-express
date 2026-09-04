import { NewspaperEdition } from '../types';

export const indianExpressEdition: NewspaperEdition = {
  newspaperName: 'The Indian Express',
  editionDate: 'Friday, September 4, 2026',
  targetAudience: 'Classes 8–10 (Ages 13–16)',
  subheading: 'Daily News Decoded • Turning Headlines into Lifelong Understanding',
  articles: [
    {
      id: 'ladakh-autonomous-hill-councils-sept4', number: 1,
      title: 'Why Do Ladakh’s Districts Have Autonomous Hill Development Councils?',
      category: '🏛️ Polity & Governance', newspaperPage: 'Page 2 (The Second Page)',
      hook: 'Imagine your school has different clubs that need to make decisions about their own activities because they understand their members better than the principal does. Local self-government works on a similar idea: decisions can be taken closer to the people affected by them.',
      whatHappened: {
        lead: 'The Indian Express reports that the Centre has agreed to extend the Sixth Schedule framework to Ladakh, with autonomous hill development councils planned for all districts.',
        who: 'Government of India, Ladakh administration and people of Ladakh; the Sixth Schedule is a constitutional framework for certain tribal areas.',
        where: 'Ladakh, including its districts and existing Hill Development Councils.',
        when: 'Reported September 4, 2026.',
        what: 'The report says the decision will give the councils stronger powers over local governance, development planning, employment generation, public health and sanitation, local road and transport decisions, and other functions. The move follows demands for stronger constitutional protection and greater local participation in decisions affecting Ladakh.',
        immediateIssue: 'The key question is how greater local autonomy can protect local interests while fitting into the constitutional and administrative structure of the Union Territory.',
      },
      whatYouNeedToKnow: [
        { conceptName: '1. Autonomous Council', explanation: 'A local institution given special powers to govern and make decisions for its area.' },
        { conceptName: '2. Sixth Schedule', explanation: 'A constitutional arrangement providing special governance institutions and protections for specified tribal areas in parts of northeastern India; the Ladakh proposal concerns extending a similar constitutional framework there.' },
        { conceptName: '3. Local Self-Government', explanation: 'The idea that many decisions about a community should be made by institutions close to that community.' },
      ],
      breakItDown: {
        analogyTitle: 'The Classroom Representative Analogy',
        analogyText: 'A central authority cannot know every local problem equally well. Local institutions can understand local needs better, while the larger government still sets the wider constitutional framework.',
        chain: ['Local needs', 'Local representation', 'Autonomous powers', 'Development decisions', 'Accountability'],
        formalTermExplanation: 'Autonomy means giving a lower-level institution meaningful authority to make decisions within a larger constitutional system.'
      },
      wordsYouNeedToKnow: [
        { term: 'Autonomy', meaning: 'The ability to make decisions independently within an established legal framework.', example: 'The proposed councils would receive greater autonomy over local matters.' },
        { term: 'Constitutional Protection', meaning: 'Special safeguards or arrangements created through the Constitution.', example: 'The demand for constitutional protection is linked to local identity and governance.' },
        { term: 'Tribal Area', meaning: 'An area where tribal communities have a significant presence and may receive special administrative protections.', example: 'The Sixth Schedule deals with specified tribal areas.' },
      ],
      whyDoesThisMatter: { heading: 'Why does this matter?', points: [
        { label: 'Democracy', text: 'Democracy is not only about national elections; it also involves participation in local decisions.' },
        { label: 'Development', text: 'Local bodies can identify local infrastructure and public-service needs.' },
        { label: 'Constitution', text: 'The story shows how constitutional design can respond to geographical and social diversity.' },
      ] },
      biggerPicture: { chain: ['Local identity', 'Representation', 'Autonomy', 'Development', 'Constitutional governance'], summary: 'The Ladakh story connects local democracy, tribal protections, development and India’s federal-style system of governance.' },
      thinkAboutThis: ['Why might local people understand some problems better than a distant government?', 'What could go wrong if a local body receives powers without enough accountability?'],
      explainPrompt: 'Explain why India sometimes gives special governance arrangements to particular regions.'
    },
    {
      id: 'india-belgium-strategic-deals-sept4', number: 2,
      title: 'Why Are India and Belgium Talking About Defence, Drones and Technology?',
      category: '🌍 India & International Relations', newspaperPage: 'Page 6 (Politics)',
      hook: 'Countries do not build relationships only by signing friendship agreements. They also cooperate in areas such as defence, technology, trade, energy and security when their interests overlap.',
      whatHappened: {
        lead: 'The Indian Express reports that India and Belgium agreed to deepen cooperation during Belgian Prime Minister Bart De Wever’s first visit to India in two decades.',
        who: 'Prime Minister Narendra Modi, Belgian Prime Minister Bart De Wever and officials from both countries.',
        where: 'India and Belgium; discussions also covered wider European and Indo-Pacific security.',
        when: 'Reported September 4, 2026.',
        what: 'The two sides discussed defence and security cooperation, military training, defence industries, maritime security, drones and critical technology. The report also highlights cooperation in trade, investment, energy and innovation. Both sides discussed the war in Ukraine and developments in West Asia.',
        immediateIssue: 'India and Belgium are trying to turn political ties into practical cooperation in defence, technology, trade and strategic security.',
      },
      whatYouNeedToKnow: [
        { conceptName: '1. Strategic Partnership', explanation: 'A relationship in which countries cooperate closely in areas considered important to their long-term interests.' },
        { conceptName: '2. Maritime Security', explanation: 'Protecting ships, ports and sea routes from military, criminal or other threats.' },
        { conceptName: '3. Critical Technology', explanation: 'Technology considered important for national security, economic strength or strategic independence, such as advanced digital and defence technologies.' },
      ],
      breakItDown: {
        analogyTitle: 'The Teamwork Analogy',
        analogyText: 'Think of two schools that each have different strengths. One may be strong in robotics while the other has better sports facilities. Cooperation lets both gain from each other while working toward shared goals.',
        chain: ['Shared interests', 'Dialogue', 'Agreements', 'Projects', 'Long-term partnership'],
        formalTermExplanation: 'Strategic partnerships are long-term relationships in which countries coordinate on selected political, economic, security or technological interests.'
      },
      wordsYouNeedToKnow: [
        { term: 'Defence Cooperation', meaning: 'Countries working together on military training, equipment, technology or security.', example: 'India and Belgium discussed defence cooperation.' },
        { term: 'Fintech', meaning: 'Technology used to provide or improve financial services.', example: 'Fintech was among the areas discussed in India-Belgium cooperation.' },
        { term: 'Indo-Pacific', meaning: 'A broad strategic region covering the Indian and Pacific Ocean areas and the countries connected to them.', example: 'Maritime security in the Indo-Pacific is important to India.' },
      ],
      whyDoesThisMatter: { heading: 'Why does this matter to India?', points: [
        { label: 'Technology', text: 'Partnerships can provide opportunities for research, innovation and advanced technology.' },
        { label: 'Security', text: 'Maritime and defence cooperation can strengthen India’s ability to respond to security challenges.' },
        { label: 'Trade', text: 'Closer relations can support investment, exports and business links with Europe.' },
      ] },
      biggerPicture: { chain: ['Diplomacy', 'Trade', 'Technology', 'Security', 'Strategic partnership'], summary: 'Modern foreign policy is not only about political meetings; it also creates practical links between economies, technologies and security systems.' },
      thinkAboutThis: ['Why might countries cooperate on drones even if they are not military allies?', 'How can trade and technology become part of foreign policy?'],
      explainPrompt: 'Explain what makes a relationship between two countries a strategic partnership.'
    },
    {
      id: 'ipo-market-revival-sept4', number: 3,
      title: 'Why Is India’s IPO Market Coming Back to Life?',
      category: '📈 Economy & Markets', newspaperPage: 'Page 15 (Economy)',
      hook: 'Imagine a shop owner who wants to expand but needs a lot of money. One option is to ask many people to become part-owners by selling small pieces of the business. An IPO is a much larger, regulated version of this idea.',
      whatHappened: {
        lead: 'The newspaper reports that India’s initial public offering market has picked up after a slower period, with several companies preparing to raise money from investors.',
        who: 'Indian companies, investors, SEBI, stock exchanges and financial institutions.',
        where: 'Indian capital markets.',
        when: 'Reported September 4, 2026.',
        what: 'The report says IPO fundraising approvals and market activity have increased after a period of uncertainty. Companies are returning to the market as investor interest improves and conditions become more favourable. The article also notes that regulators and investors are watching how global conditions, including the West Asian crisis, affect market confidence.',
        immediateIssue: 'The important question is whether the revival will continue and whether companies can raise money at sensible valuations rather than chasing short-term enthusiasm.',
      },
      whatYouNeedToKnow: [
        { conceptName: '1. IPO', explanation: 'Initial Public Offering: when a company offers its shares to the public for the first time so it can raise money.' },
        { conceptName: '2. Share', explanation: 'A small unit representing ownership in a company.' },
        { conceptName: '3. Capital Market', explanation: 'A financial market where companies and governments can raise long-term money and investors can buy financial securities.' },
      ],
      breakItDown: {
        analogyTitle: 'The Pizza Analogy',
        analogyText: 'Imagine a large pizza is a company. An IPO divides the ownership into many small slices called shares. People can buy slices, and the company receives money that can help it grow.',
        chain: ['Company needs money', 'Shares offered', 'Investors buy shares', 'Company raises capital', 'Investors take risk'],
        formalTermExplanation: 'An IPO allows a private company to become publicly listed and raise funds by selling shares to public investors.'
      },
      wordsYouNeedToKnow: [
        { term: 'Investor', meaning: 'A person or institution that puts money into an asset or business expecting a possible return.', example: 'Investors may buy shares in an IPO.' },
        { term: 'Valuation', meaning: 'An estimate of how much a company or asset is worth.', example: 'Investors examine whether an IPO valuation is reasonable.' },
        { term: 'SEBI', meaning: 'Securities and Exchange Board of India, the regulator of India’s securities market.', example: 'SEBI sets rules intended to protect investors and regulate securities markets.' },
      ],
      whyDoesThisMatter: { heading: 'Why does this matter?', points: [
        { label: 'Businesses', text: 'Companies can raise large amounts of money for expansion and investment.' },
        { label: 'Investors', text: 'Ordinary investors can become part-owners but also face the risk of losing money.' },
        { label: 'Economy', text: 'A healthy capital market can help savings flow into productive businesses.' },
      ] },
      biggerPicture: { chain: ['Savings', 'Investment', 'Companies raise capital', 'Business expansion', 'Economic activity'], summary: 'Financial markets connect people who have savings with businesses that need capital, but returns are never guaranteed.' },
      thinkAboutThis: ['Why would a company sell part of itself instead of borrowing all the money?', 'Why might a popular IPO still be a risky investment?'],
      explainPrompt: 'Explain what an IPO is and why both companies and investors may find it useful.'
    },
    {
      id: 'thorium-fuel-india-sept4', number: 4,
      title: 'Why Does India Want to Move Early to Thorium-Based Nuclear Fuel?',
      category: '⚛️ Science, Energy & Technology', newspaperPage: 'Page 15 (Economy)',
      hook: 'Imagine having a huge reserve of a useful raw material inside your own country. If scientists can turn that material into a reliable source of energy, it could reduce dependence on imports.',
      whatHappened: {
        lead: 'The Indian Express reports on India’s long-term effort to develop nuclear reactors and move toward thorium-based fuels as part of a strategy for greater energy self-reliance.',
        who: 'Indian nuclear scientists, the Department of Atomic Energy and research institutions including the Bhabha Atomic Research Centre.',
        where: 'India; the programme is linked to India’s large thorium resources and its long-term nuclear-energy strategy.',
        when: 'Reported September 4, 2026.',
        what: 'The article explains India’s three-stage nuclear programme. The first stage uses natural uranium in pressurised heavy water reactors. The second stage is intended to use plutonium in fast breeder reactors. The third stage aims to use thorium-derived uranium-233 as a nuclear fuel. The long-term goal is to make greater use of India’s domestic resources while reducing dependence on imported fuel.',
        immediateIssue: 'The challenge is turning a promising long-term resource into a practical, economical and safe large-scale energy system.',
      },
      whatYouNeedToKnow: [
        { conceptName: '1. Thorium', explanation: 'A naturally occurring radioactive element that can be used in nuclear-energy systems to eventually produce uranium-233.' },
        { conceptName: '2. Nuclear Fission', explanation: 'A process in which a heavy atomic nucleus splits and releases energy, which can be used to produce electricity.' },
        { conceptName: '3. Energy Self-Reliance', explanation: 'Reducing dependence on foreign countries for the fuels, technologies or supplies needed to meet energy needs.' },
      ],
      breakItDown: {
        analogyTitle: 'The Three-Stage Journey',
        analogyText: 'Think of India’s nuclear programme as a relay race. The first stage produces materials needed for the next stage, which in turn helps make the final thorium-based stage possible.',
        chain: ['Natural uranium', 'Plutonium', 'Thorium → uranium-233', 'Nuclear fuel', 'Electricity'],
        formalTermExplanation: 'India’s three-stage nuclear programme is designed to progressively use its domestic uranium and thorium resources while developing nuclear-energy capacity.'
      },
      wordsYouNeedToKnow: [
        { term: 'Nuclear Reactor', meaning: 'A facility where a controlled nuclear chain reaction produces heat that can ultimately generate electricity.', example: 'A nuclear reactor uses controlled fission to produce heat.' },
        { term: 'Uranium-233', meaning: 'A fissile isotope that can be produced from thorium and used as nuclear fuel.', example: 'India’s third-stage programme aims to use uranium-233 derived from thorium.' },
        { term: 'Fissile', meaning: 'Capable of undergoing nuclear fission with suitable neutrons.', example: 'Uranium-233 is a fissile material.' },
      ],
      whyDoesThisMatter: { heading: 'Why does this matter to India?', points: [
        { label: 'Energy Security', text: 'Domestic energy resources can reduce exposure to disruptions in foreign fuel supplies.' },
        { label: 'Climate', text: 'Nuclear power can generate electricity without direct carbon-dioxide emissions during operation.' },
        { label: 'Technology', text: 'Developing advanced reactors requires decades of scientific research and engineering.' },
      ] },
      biggerPicture: { chain: ['Domestic resources', 'Nuclear technology', 'Energy security', 'Electricity supply', 'Long-term strategy'], summary: 'Energy choices are also choices about technology, national security, imports and the environment.' },
      thinkAboutThis: ['Why might a country want an energy source based on resources it has at home?', 'Why can a technology that looks promising today still take decades to become widely useful?'],
      explainPrompt: 'Explain why thorium is important in India’s long-term nuclear-energy strategy.'
    },
    {
      id: 'jantar-mantar-police-verification-sept4', number: 5,
      title: 'Why Is Police Verification Important When CCTV Evidence Is Used?',
      category: '⚖️ Law, Rights & Governance', newspaperPage: 'Page 1 (Front Page)',
      hook: 'A camera recording can show that something happened, but a recording alone does not automatically prove who committed a crime or exactly what happened. Evidence has to be checked carefully.',
      whatHappened: {
        lead: 'An Indian Express investigation reports on police records concerning people accused of serious offences who were present at a protest at Delhi’s Jantar Mantar, highlighting the importance of verifying evidence before making conclusions.',
        who: 'Delhi Police, the accused persons, protesters and the Supreme Court, which sought clarity about police action in the matter.',
        where: 'Jantar Mantar, New Delhi.',
        when: 'Reported September 4, 2026.',
        what: 'The report says police records showed that several people accused in serious criminal cases were present at the protest. It also discusses police use of facial-recognition technology and the Supreme Court’s concern that action should not be taken without proper verification. The central issue is whether identification and criminal records have been correctly connected to the individuals seen in protest footage.',
        immediateIssue: 'Authorities must balance public safety and investigation with the need to verify evidence accurately and protect people from wrongful action.',
      },
      whatYouNeedToKnow: [
        { conceptName: '1. Evidence', explanation: 'Information or material used to establish facts in a legal or investigative process.' },
        { conceptName: '2. Facial Recognition', explanation: 'Technology that attempts to identify or compare a person’s face using digital images or video.' },
        { conceptName: '3. Verification', explanation: 'Checking information carefully against reliable evidence before accepting it as correct.' },
      ],
      breakItDown: {
        analogyTitle: 'The School-Photo Analogy',
        analogyText: 'Suppose a school photo shows a student who looks like someone you know. You would not punish that person just because the faces seem similar. You would check the identity, date, location and other evidence first. Criminal investigations require the same basic principle, with much higher stakes.',
        chain: ['Camera footage', 'Possible identification', 'Record check', 'Independent verification', 'Legal action'],
        formalTermExplanation: 'Verification reduces the risk that an investigation will rely on an incorrect identification or incomplete evidence.'
      },
      wordsYouNeedToKnow: [
        { term: 'Accused', meaning: 'A person alleged to have committed an offence; being accused does not by itself mean being guilty.', example: 'An accused person still has legal rights and the case must be properly established.' },
        { term: 'Facial Recognition System', meaning: 'A computer system that analyses faces in images or video to help identify or compare people.', example: 'Police may use facial recognition as one investigative tool.' },
        { term: 'Due Process', meaning: 'Fair procedures that must be followed by authorities when exercising legal power.', example: 'Verification and lawful procedures are important parts of due process.' },
      ],
      whyDoesThisMatter: { heading: 'Why does this matter?', points: [
        { label: 'Rights', text: 'A wrong identification can seriously affect an innocent person’s liberty and reputation.' },
        { label: 'Technology', text: 'Digital tools can help investigators but should not automatically replace human verification.' },
        { label: 'Rule of Law', text: 'Law enforcement must follow evidence-based and lawful procedures.' },
      ] },
      biggerPicture: { chain: ['Technology', 'Evidence', 'Verification', 'Police action', 'Rights & justice'], summary: 'The story shows why technology can strengthen investigations only when it is combined with careful verification and legal safeguards.' },
      thinkAboutThis: ['Why should being visible in a video not automatically mean a person committed a crime?', 'What could happen if facial-recognition technology makes a mistake?'],
      explainPrompt: 'Explain why verification is essential when police use CCTV or facial-recognition technology as evidence.'
    }
  ],
};
