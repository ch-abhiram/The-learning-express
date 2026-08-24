import { ExplainingArticle, NewspaperEdition } from '../types';

export const indianExpressEdition: NewspaperEdition = {
  newspaperName: 'The Indian Express',
  editionDate: 'Monday, August 24, 2026',
  targetAudience: 'Classes 8–10 (Ages 13–16)',
  subheading: 'Daily News Decoded • Turning Headlines into Lifelong Understanding',
  articles: [
    {
      id: 'india-taliban-engagement',
      number: 1,
      title: 'Why Has India Been Talking More to the Taliban?',
      category: '🌏 World & Geopolitics',
      newspaperPage: 'Page 9 (Explained)',
      hook: 'Imagine a school in your neighbourhood changes its student council completely. You may disagree with the new leaders, but if you need to keep your neighbourhood safe, trade supplies and communicate, you still have to decide whether and how to talk to them. India has faced a similar diplomatic question with Afghanistan’s Taliban government.',
      whatHappened: {
        lead: 'The Indian Express explains how India’s relationship with Afghanistan’s Taliban authorities has gradually moved from caution toward deeper engagement over the five years since the Taliban returned to power in Kabul.',
        who: 'The Government of India and the Taliban authorities in Afghanistan.',
        where: 'India and Afghanistan, with much of the diplomatic engagement centred on Kabul and New Delhi.',
        when: 'The article looks back to August 2021 and traces developments through 2025 and into 2026.',
        what: 'India initially kept its distance after the Taliban takeover. Over time, it restored and expanded official contacts, including a technical mission in Kabul, senior-level meetings and discussions on trade, humanitarian assistance, security and development.',
        immediateIssue: 'India has to balance practical engagement with concerns about terrorism, Afghan territory being used against India, the rights of Afghan people and the wider regional balance involving Pakistan, China and other countries.',
      },
      whatYouNeedToKnow: [
        {
          conceptName: '1. What is Diplomacy?',
          explanation: 'Diplomacy is the way governments communicate and negotiate with one another to manage relationships, solve problems and protect their national interests without constantly using force.',
        },
        {
          conceptName: '2. What is a Technical Mission?',
          explanation: 'A technical mission is a smaller official diplomatic presence used to maintain practical communication and handle specific matters. It can be different from a fully functioning embassy.',
        },
        {
          conceptName: '3. Why does India care about Afghanistan?',
          explanation: 'Afghanistan is geographically important to India’s wider neighbourhood. Developments there can affect terrorism, regional security, trade routes and India’s relationships with countries such as Pakistan and Iran.',
        },
      ],
      breakItDown: {
        analogyTitle: 'The Neighbourhood Problem Analogy',
        analogyText: 'Suppose the people running a nearby building change. You may not like the new management, but you still need to know who is in charge if your water supply, security or shared road is affected. Talking to them does not automatically mean agreeing with everything they do. It can simply mean keeping a channel open.',
        chain: [
          'Taliban take control of Afghanistan in 2021',
          'India initially adopts a cautious approach',
          'Practical contacts and humanitarian engagement increase',
          'Senior Indian and Afghan officials meet more often',
          'India tries to protect its security interests while keeping communication open',
        ],
        formalTermExplanation: 'Foreign policy often involves engagement without complete agreement. Countries can communicate with a government because doing so serves practical interests even when serious differences remain.',
      },
      wordsYouNeedToKnow: [
        {
          term: 'Diplomacy',
          meaning: 'The practice of managing relations between countries through communication and negotiation.',
          example: 'Diplomats may negotiate trade, security or humanitarian issues.',
        },
        {
          term: 'Engagement',
          meaning: 'Maintaining communication and interaction with another government or group.',
          example: 'India increased diplomatic engagement with Afghanistan after 2021.',
        },
        {
          term: 'Geopolitics',
          meaning: 'The study of how geography, power and national interests shape relations between countries.',
          example: 'Afghanistan’s location makes it important to the geopolitics of South and Central Asia.',
        },
      ],
      whyDoesThisMatter: {
        heading: 'Why does this matter to India?',
        points: [
          {
            label: 'Security',
            text: 'India wants to prevent Afghan territory from being used by groups that could threaten India.',
          },
          {
            label: 'Regional Influence',
            text: 'India does not want other major powers to shape the region without Indian interests being considered.',
          },
          {
            label: 'People and Trade',
            text: 'India also has humanitarian, economic and people-to-people interests connected with Afghanistan.',
          },
        ],
      },
      biggerPicture: {
        chain: ['A change of government', 'Diplomatic uncertainty', 'Security concerns', 'Practical engagement', 'Regional strategy'],
        summary: 'International relations are rarely simply “friends” and “enemies”. Countries often have to communicate with governments they disagree with because geography and national interests continue to matter.',
      },
      thinkAboutThis: [
        'Can a country talk to another government without agreeing with everything that government does?',
        'Why might keeping a communication channel open be useful during a political crisis?',
      ],
      explainPrompt: 'Explain why India has gradually increased engagement with the Taliban even though important disagreements and security concerns remain.',
    },
    {
      id: 'personalised-skin-cancer-vaccine',
      number: 2,
      title: 'Can a Vaccine Be Made for One Person’s Cancer?',
      category: '🧬 Science & Health',
      newspaperPage: 'Page 9 (Explained)',
      hook: 'Vaccines usually train the immune system to recognise a virus or other germ. But what if a vaccine could instead teach your immune system to recognise the unique fingerprints of your own cancer cells? Scientists are testing exactly this idea.',
      whatHappened: {
        lead: 'The newspaper reports on a personalised cancer vaccine using mRNA technology that was tested alongside pembrolizumab for melanoma, a serious form of skin cancer.',
        who: 'Researchers and clinicians studying personalised cancer treatment, with the reported vaccine developed by Moderna.',
        where: 'The research described in the Indian Express is part of clinical cancer research rather than a routine treatment available to everyone.',
        when: 'The article reports results from a clinical trial discussed in the August 24, 2026 edition.',
        what: 'The vaccine is designed for an individual patient by identifying tumour-specific markers and using mRNA to instruct cells to make selected cancer-related proteins. The immune system can then learn to recognise those targets. The reported trial combined the vaccine with pembrolizumab and found a lower risk of melanoma recurrence and death than with pembrolizumab alone.',
        immediateIssue: 'Cancer cells can look partly like normal cells, making them difficult for the immune system to attack. Personalised vaccines try to give the immune system a more precise target.',
      },
      whatYouNeedToKnow: [
        {
          conceptName: '1. What is mRNA?',
          explanation: 'Messenger RNA, or mRNA, is a molecule cells use as instructions for making proteins. In this approach, the mRNA carries instructions related to tumour markers so the immune system can learn what to recognise.',
        },
        {
          conceptName: '2. What is an Antigen?',
          explanation: 'An antigen is a substance or molecular feature that the immune system can recognise. Cancer cells can contain unusual markers that researchers can try to use as targets.',
        },
        {
          conceptName: '3. What does “personalised” mean here?',
          explanation: 'Instead of giving exactly the same vaccine to every patient, researchers analyse a person’s tumour and design the vaccine around markers found in that individual’s cancer.',
        },
      ],
      breakItDown: {
        analogyTitle: 'The Wanted Poster Analogy',
        analogyText: 'Imagine the immune system is a security team. Cancer cells can sometimes hide because they look similar to normal cells. A personalised vaccine is like giving the security team a detailed wanted poster showing unusual features found on that particular person’s cancer cells.',
        chain: ['Tumour is analysed', 'Unique cancer markers are identified', 'Personalised mRNA instructions are prepared', 'Immune system is exposed to the targets', 'Immune cells may recognise cancer more effectively'],
        formalTermExplanation: 'This is a form of cancer immunotherapy: treatment that helps the patient’s immune system recognise and attack cancer cells.',
      },
      wordsYouNeedToKnow: [
        {
          term: 'Immunotherapy',
          meaning: 'Treatment that helps the immune system fight disease, including some cancers.',
          example: 'Pembrolizumab is an immunotherapy used in several cancers.',
        },
        {
          term: 'Melanoma',
          meaning: 'A type of cancer that begins in pigment-producing cells and commonly affects the skin.',
          example: 'The trial described in the article studied patients with melanoma.',
        },
        {
          term: 'Clinical Trial',
          meaning: 'A carefully designed study in people used to test whether a medical treatment is safe and effective.',
          example: 'A new cancer vaccine must be studied in clinical trials before it can become routine treatment.',
        },
      ],
      whyDoesThisMatter: {
        heading: 'Why is this exciting science?',
        points: [
          {
            label: 'Precision',
            text: 'The treatment tries to target features specific to an individual patient’s cancer.',
          },
          {
            label: 'Immune Memory',
            text: 'The goal is not only to attack cancer now but also to help the immune system recognise cancer cells if they return.',
          },
          {
            label: 'Future Medicine',
            text: 'Personalised treatments show how medicine is moving toward therapies designed around the biology of individual patients.',
          },
        ],
      },
      biggerPicture: {
        chain: ['Patient’s tumour', 'Genetic and molecular information', 'Personalised treatment', 'Immune response', 'Possible reduction in recurrence'],
        summary: 'Modern medicine increasingly combines biology, genetics, computing and engineering to design treatments around the specific features of a disease.',
      },
      thinkAboutThis: [
        'Why might a treatment designed around one person’s cancer be more precise than a one-size-fits-all treatment?',
        'Why do promising results from one clinical trial not automatically mean a treatment works for everyone?',
      ],
      explainPrompt: 'Explain how a personalised cancer vaccine tries to teach the immune system what one patient’s cancer looks like.',
    },
    {
      id: 'ai-cybersecurity-india',
      number: 3,
      title: 'How Is AI Changing Both Cyber Attacks and Cyber Defence?',
      category: '🤖 Technology & Security',
      newspaperPage: 'Page 9 (Explained)',
      hook: 'Imagine two students are given the same super-fast computer assistant. One uses it to find weaknesses in a school’s computer network; the other uses it to spot those weaknesses and protect the network. AI can create a similar race between attackers and defenders.',
      whatHappened: {
        lead: 'The Indian Express explains that artificial intelligence is becoming useful to both cyber attackers and cybersecurity teams, making digital attacks potentially faster, more automated and more difficult to detect.',
        who: 'Cybercriminals, ransomware groups, security researchers, companies and government agencies that protect digital systems.',
        where: 'Across the internet and increasingly important digital infrastructure, including systems in India.',
        when: 'The issue is part of the August 24, 2026 Explained coverage on artificial intelligence and cybersecurity.',
        what: 'AI can help attackers automate tasks such as creating convincing phishing messages, finding vulnerabilities and adapting malicious software. Defenders can use AI for threat detection, analysing large amounts of data and responding more quickly to suspicious activity.',
        immediateIssue: 'The same technology that makes computers more capable can reduce the time, skill and effort needed to carry out certain cyber attacks, while also giving defenders stronger tools.',
      },
      whatYouNeedToKnow: [
        {
          conceptName: '1. What is Cybersecurity?',
          explanation: 'Cybersecurity means protecting computers, networks, software and data from unauthorised access, damage or disruption.',
        },
        {
          conceptName: '2. What is Ransomware?',
          explanation: 'Ransomware is malicious software that can lock or steal data and then demand money or another concession from the victim.',
        },
        {
          conceptName: '3. What is Phishing?',
          explanation: 'Phishing is a trick designed to make someone reveal information, click a harmful link or perform an unsafe action by pretending to be a trusted person or organisation.',
        },
      ],
      breakItDown: {
        analogyTitle: 'The Lock-and-Lockpick Race',
        analogyText: 'Think of cybersecurity as a race between people building better locks and people trying to pick them. AI can help defenders test thousands of locks quickly, but it can also help attackers search for weak ones faster. The result is a race where both sides become more capable.',
        chain: ['AI increases automation', 'Attackers can scale some activities', 'Defenders analyse more data', 'Security teams need faster detection', 'Human judgement and strong security practices remain important'],
        formalTermExplanation: 'AI-assisted cybersecurity uses machine-learning and other AI systems to identify patterns, detect threats, prioritise risks and sometimes automate responses.',
      },
      wordsYouNeedToKnow: [
        {
          term: 'Cyber Attack',
          meaning: 'An attempt to gain unauthorised access to or disrupt a digital system.',
          example: 'A ransomware attack can prevent an organisation from accessing its files.',
        },
        {
          term: 'Vulnerability',
          meaning: 'A weakness in a computer system that can potentially be exploited.',
          example: 'An unpatched software bug can become a security vulnerability.',
        },
        {
          term: 'Zero Trust',
          meaning: 'A security approach that does not automatically trust a user or device simply because it is inside a network.',
          example: 'A zero-trust system continually checks whether access should be allowed.',
        },
      ],
      whyDoesThisMatter: {
        heading: 'Why should students care about cybersecurity?',
        points: [
          {
            label: 'Personal Data',
            text: 'Passwords, photos, messages and financial information can all become targets.',
          },
          {
            label: 'Critical Systems',
            text: 'Hospitals, banks, power systems, transport and government services increasingly depend on digital networks.',
          },
          {
            label: 'AI Literacy',
            text: 'Understanding both the power and risks of AI will become an important part of being digitally responsible.',
          },
        ],
      },
      biggerPicture: {
        chain: ['More powerful AI', 'More automation', 'Faster attacks', 'Faster defence', 'Continuous cybersecurity race'],
        summary: 'Technology changes the balance between attackers and defenders. The safest digital world will require good technology, careful organisations and informed users.',
      },
      thinkAboutThis: [
        'Why can the same AI capability be useful to both an attacker and a defender?',
        'What is one thing a student can do to make a personal online account harder to attack?',
      ],
      explainPrompt: 'Explain why AI is making cybersecurity both more difficult and more powerful at the same time.',
    },
    {
      id: 'elephant-corridors',
      number: 4,
      title: 'Why Do Elephants Need “Corridors”?',
      category: '🐘 Environment & Geography',
      newspaperPage: 'Page 9 (Explained)',
      hook: 'Imagine you live in a neighbourhood where one road connects your home to the school, playground and shops. If that road is blocked by a wall, reaching those places becomes much harder. Elephants face a similar problem when forests are broken into smaller pieces by roads, farms, railways and buildings.',
      whatHappened: {
        lead: 'The newspaper explains why elephant corridors are important for reducing conflict between elephants and people and reports on the Supreme Court’s direction for a fresh survey of such corridors.',
        who: 'Wild elephants, forest communities, conservation authorities, courts and governments responsible for land and infrastructure planning.',
        where: 'Elephant habitats across India, with corridors spread across multiple states.',
        when: 'The issue was highlighted in the August 24, 2026 Explained section.',
        what: 'Elephants need to move between habitat areas to find food, water, mates and seasonal resources. Corridors are routes that allow this movement. When these routes are blocked or fragmented, elephants are more likely to come into contact with farms, roads and settlements.',
        immediateIssue: 'The article notes that India has around 150 elephant corridors across 15 states and discusses mapping and protecting these routes.',
      },
      whatYouNeedToKnow: [
        {
          conceptName: '1. What is a Wildlife Corridor?',
          explanation: 'A wildlife corridor is a connected route that allows animals to move between separated parts of their habitat.',
        },
        {
          conceptName: '2. What is Habitat Fragmentation?',
          explanation: 'Habitat fragmentation happens when a large natural habitat is broken into smaller isolated pieces by human activities such as roads, farms or buildings.',
        },
        {
          conceptName: '3. Why do elephants move long distances?',
          explanation: 'Elephants may travel long distances in search of food, water and suitable habitat. Their movement can also follow traditional routes used over generations.',
        },
      ],
      breakItDown: {
        analogyTitle: 'The School-Route Analogy',
        analogyText: 'Imagine your school has two campuses connected by a safe footpath. If someone builds a wall across the path, students may start crossing a busy road instead. A wildlife corridor works like the safe route: it helps animals reach different parts of their habitat without being forced into dangerous human spaces.',
        chain: ['Forests become fragmented', 'Elephants lose easy routes', 'Elephants move through farms or settlements', 'Human-elephant encounters increase', 'Protected corridors can reduce the conflict'],
        formalTermExplanation: 'Conservation is not only about protecting individual animals. It is also about protecting the landscapes and movement routes that allow wildlife populations to survive.',
      },
      wordsYouNeedToKnow: [
        {
          term: 'Wildlife Corridor',
          meaning: 'A route that connects separated wildlife habitats and allows animals to move safely.',
          example: 'Elephant corridors can connect forest areas used by the same elephant population.',
        },
        {
          term: 'Habitat Fragmentation',
          meaning: 'The breaking of a continuous natural habitat into smaller separated areas.',
          example: 'A new road through a forest can contribute to habitat fragmentation.',
        },
        {
          term: 'Human-Wildlife Conflict',
          meaning: 'Harmful or difficult interactions between people and wild animals when they share or compete for space and resources.',
          example: 'Crop damage and dangerous encounters can occur when elephants enter agricultural areas.',
        },
      ],
      whyDoesThisMatter: {
        heading: 'Why protect a route instead of only a forest?',
        points: [
          {
            label: 'Animal Survival',
            text: 'Animals need access to different resources and breeding areas, not just one isolated patch of forest.',
          },
          {
            label: 'People’s Safety',
            text: 'Safer movement routes can reduce the chances of elephants entering villages and farms.',
          },
          {
            label: 'Planning',
            text: 'Mapping corridors helps governments consider wildlife movement when planning roads, railways and other infrastructure.',
          },
        ],
      },
      biggerPicture: {
        chain: ['Forest protection', 'Connected habitats', 'Animal movement', 'Lower conflict', 'Long-term conservation'],
        summary: 'Good conservation means designing human development and natural ecosystems so that both can function without unnecessarily destroying the other.',
      },
      thinkAboutThis: [
        'Why might protecting only isolated forests fail to protect a species that needs to move between them?',
        'How could a new road be designed to reduce its impact on an elephant corridor?',
      ],
      explainPrompt: 'Explain why elephant corridors can reduce conflict between elephants and people.',
    },
    {
      id: 'waterless-urinals-locomotives',
      number: 5,
      title: 'Why Are Indian Railways Testing Waterless Urinals for Locomotive Pilots?',
      category: '🚆 Science, Engineering & Railways',
      newspaperPage: 'Page 1 (Front Page)',
      hook: 'A train locomotive is a workplace. Imagine spending hours driving a huge machine with nowhere convenient for the driver to use a toilet. Indian Railways is testing a surprisingly simple engineering idea: a waterless urinal designed for locomotive pilots.',
      whatHappened: {
        lead: 'Indian Railways has begun rolling out waterless urinals for locomotive pilots as part of an effort to improve working conditions inside locomotives.',
        who: 'Indian Railways, locomotive pilots and engineers developing and testing the equipment.',
        where: 'Indian locomotives, including powerful electric locomotives being brought into service.',
        when: 'The front-page report says a prototype had already been in operation for around four months.',
        what: 'The design uses a waterless urinal rather than a conventional flush system. This matters because locomotive space is limited and adding a normal toilet can create problems involving water, plumbing, maintenance and waste disposal.',
        immediateIssue: 'The challenge is not simply inventing a toilet. Engineers must make the system reliable, safe, compact, easy to maintain and suitable for a locomotive environment.',
      },
      whatYouNeedToKnow: [
        {
          conceptName: '1. What is a Waterless Urinal?',
          explanation: 'A waterless urinal is a urinal designed to work without the repeated flushing water used by a conventional system.',
        },
        {
          conceptName: '2. Why does engineering involve trade-offs?',
          explanation: 'Engineers rarely optimise only one thing. A system must balance cost, space, reliability, safety, maintenance, environmental impact and ease of use.',
        },
        {
          conceptName: '3. What is a Locomotive Pilot?',
          explanation: 'A locomotive pilot, often called a train driver, operates the locomotive and is responsible for safely controlling the train during its journey.',
        },
      ],
      breakItDown: {
        analogyTitle: 'The Backpack Design Analogy',
        analogyText: 'Imagine designing a backpack for a student who has to carry books, a laptop, lunch and sports equipment. You cannot simply make the bag bigger. You have to find a solution that uses limited space while remaining comfortable, strong and easy to maintain. Engineers face the same kind of constraint inside a locomotive.',
        chain: ['Problem for locomotive pilots', 'Very limited space', 'Conventional toilet creates water and maintenance needs', 'Engineers develop a compact waterless design', 'Prototype is tested before wider use'],
        formalTermExplanation: 'This is an example of applied engineering: using scientific and technical knowledge to solve a real-world problem under practical constraints.',
      },
      wordsYouNeedToKnow: [
        {
          term: 'Prototype',
          meaning: 'An early working version of a product built for testing and improvement.',
          example: 'The railway waterless urinal was first operated as a prototype.',
        },
        {
          term: 'Maintenance',
          meaning: 'The work required to keep a machine or system functioning properly.',
          example: 'Railway equipment must be designed so maintenance can be carried out reliably.',
        },
        {
          term: 'Engineering Constraint',
          meaning: 'A limit that engineers must work within, such as space, weight, cost or safety requirements.',
          example: 'Limited space inside a locomotive is an engineering constraint.',
        },
      ],
      whyDoesThisMatter: {
        heading: 'Why is a small railway toilet worth a newspaper story?',
        points: [
          {
            label: 'Workers',
            text: 'Engineering can improve the everyday working conditions of people who operate essential public services.',
          },
          {
            label: 'Water',
            text: 'Reducing the need for flushing water can be useful where water supply and storage are limited.',
          },
          {
            label: 'Design Thinking',
            text: 'Many important inventions begin with an ordinary problem that someone decides to solve better.',
          },
        ],
      },
      biggerPicture: {
        chain: ['Everyday problem', 'Engineering requirements', 'Prototype', 'Testing', 'Improved design', 'Wider deployment'],
        summary: 'Engineering is not only about giant machines. It is also about noticing small problems in everyday systems and designing practical solutions that work in the real world.',
      },
      thinkAboutThis: [
        'What problems would engineers have to solve before installing a new toilet system in thousands of locomotives?',
        'Can you think of an ordinary problem at school that could be solved by better engineering?',
      ],
      explainPrompt: 'Explain why Indian Railways is testing waterless urinals for locomotive pilots and what makes this an engineering problem rather than simply a plumbing problem.',
    },
  ],
};
