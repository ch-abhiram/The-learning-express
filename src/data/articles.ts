import { ExplainingArticle, NewspaperEdition } from '../types';

export const indianExpressEdition: NewspaperEdition = {
  newspaperName: 'The Indian Express',
  editionDate: 'Sunday, August 23, 2026',
  targetAudience: 'Classes 8–10 (Ages 13–16)',
  subheading: 'Daily News Decoded • Turning Headlines into Lifelong Understanding',
  articles: [
    {
      id: 'canada-us-tariffs',
      number: 1,
      title: 'Why Are Canada and the US Fighting Over Tariffs?',
      category: '🌍 World & Economics',
      newspaperPage: 'Page 2 (The World)',
      hook: 'Imagine your school canteen suddenly adds a huge extra charge to snacks brought from another school. The other school gets angry and puts a similar charge on your snacks. That is roughly what a tariff fight between countries looks like. So why are Canada and the US doing this to each other?',
      whatHappened: {
        lead: 'The United States plans to impose 50% tariffs on some Canadian goods from September 8. Canada says it will respond with matching retaliatory tariffs on selected US goods.',
        who: 'The governments of Canada and the United States, led by Prime Ministers Mark Carney and Donald Trump respectively.',
        where: 'Canada and the United States, whose economies are closely connected through trade.',
        when: 'The new US tariffs are scheduled to begin on September 8, 2026.',
        what: 'The newspaper reports that the new US tariffs would cover about $20 billion of Canadian exports. Canada says it will match the US duties dollar-for-dollar on selected goods.',
        immediateIssue: 'Both governments are trying to protect their own workers, farmers, families and businesses while using tariffs as a tool in negotiations.',
      },
      whatYouNeedToKnow: [
        {
          conceptName: '1. What is a Tariff?',
          explanation:
            'A tariff is a tax charged on goods entering a country. For example, if a country puts a 20% tariff on imported bicycles, bicycles coming from abroad become more expensive for importers and buyers.',
        },
        {
          conceptName: '2. What is Retaliation in Trade?',
          explanation:
            'Retaliation means responding to another country’s trade action with your own action. If Country A puts a tariff on Country B’s products, Country B may put tariffs on products from Country A in response.',
        },
      ],
      breakItDown: {
        analogyTitle: 'The Two-School Canteen Analogy',
        analogyText:
          'Imagine School A normally buys 100 sandwiches from School B every day. School A suddenly says, “Every sandwich coming from School B must pay ₹50 extra.” School B does not want its sellers to lose money, so it says, “Then every snack coming from School A must also pay ₹50 extra.” Both sides now have to decide whether the extra charges are worth it or whether they should negotiate.',
        chain: [
          'US announces 50% tariffs on some Canadian goods',
          'Imported Canadian products can become more expensive in the US',
          'Canada announces matching retaliatory tariffs on selected US goods',
          'Businesses in both countries face higher trade costs',
          'Both governments use the pressure to protect domestic interests and negotiate',
        ],
        formalTermExplanation:
          'This is a trade dispute. Tariffs can protect domestic producers from foreign competition, but they can also make imported goods more expensive and create problems for businesses that depend on international trade.',
      },
      wordsYouNeedToKnow: [
        {
          term: 'Tariff',
          meaning: 'A tax charged on goods imported from another country.',
          example: 'A tariff on imported steel can make foreign steel more expensive for buyers.',
        },
        {
          term: 'Retaliatory Tariff',
          meaning: 'A tariff imposed in response to another country’s tariff.',
          example: 'Canada announced matching tariffs in response to US duties.',
        },
        {
          term: 'Exports',
          meaning: 'Goods or services sold by one country to buyers in another country.',
          example: 'When Canada sells goods to US customers, those goods are Canadian exports to the US.',
        },
      ],
      whyDoesThisMatter: {
        heading: 'Why should we care about a tariff fight?',
        points: [
          {
            label: 'Prices',
            text: 'When imported products become more expensive, businesses may pass some of those higher costs on to customers.',
          },
          {
            label: 'Jobs and Businesses',
            text: 'Companies that sell abroad can lose customers if their products suddenly become more expensive in another country.',
          },
          {
            label: 'Global Trade',
            text: 'Canada and the US trade enormous amounts of goods. Decisions between two large economies can affect supply chains and businesses beyond their borders.',
          },
        ],
      },
      biggerPicture: {
        chain: [
          'Government policy',
          'Tariffs on imports',
          'Higher trade costs',
          'Business decisions and prices',
          'Jobs and international relations',
        ],
        summary:
          'Countries do not trade in isolation. A decision at a government office can travel through factories, shops and supply chains before reaching ordinary people.',
      },
      thinkAboutThis: [
        'Why might a government want to make imported goods more expensive?',
        'If both countries keep raising tariffs on each other, who might eventually pay some of the extra cost?',
      ],
      explainPrompt:
        'Explain to a friend what a tariff is and why Canada is responding to the new US tariffs.',
    },
    {
      id: 'mobile-manufacturing-scheme',
      number: 2,
      title: '₹62,500 Crore for Phones: Can India Build Its Own Mobile Brands?',
      category: '📱 Technology & Economy',
      newspaperPage: 'Page 4 (Economy)',
      hook: 'Look at the phone in your hand. It may have been designed in one country, use parts from several others, and be assembled somewhere else. India has already become a major phone-assembly hub. The new question is: can India also build more of the technology, components and brands itself?',
      whatHappened: {
        lead: 'The Centre has announced a ₹62,500 crore mobile-phone manufacturing scheme aimed at strengthening domestic component production and encouraging Indian smartphone brands.',
        who: 'The Government of India, mobile manufacturers, component makers and Indian electronics companies.',
        where: 'Across India’s electronics and mobile-manufacturing ecosystem.',
        when: 'The scheme is being discussed in the August 2026 economic policy review.',
        what: 'The scheme has two broad tracks: one links benefits to domestic sourcing of components, while another offers a separate incentive structure for Indian smartphone brands that manufacture in India and retain capabilities such as intellectual property, management control, design and research.',
        immediateIssue: 'India has become an important assembly location for global smartphone companies, but the government wants more of the value of the product — including components, technology and Indian-owned brands — to be created inside the country.',
      },
      whatYouNeedToKnow: [
        {
          conceptName: '1. What is Manufacturing?',
          explanation:
            'Manufacturing means turning raw materials or components into finished products. Making a smartphone can involve designing it, producing chips and other components, assembling them, testing the device and selling it.',
        },
        {
          conceptName: '2. What is a Production Incentive?',
          explanation:
            'A production incentive is government support linked to producing or selling more goods. The basic idea is to reward companies when they meet specified production or sales conditions, encouraging them to invest and manufacture more.',
        },
      ],
      breakItDown: {
        analogyTitle: 'The School Project Kit Analogy',
        analogyText:
          'Imagine your class builds a robot using a frame made in your school, sensors bought from another school and software created by a company elsewhere. Your class has assembled the robot, but most of the important pieces came from outside. Now imagine your school starts making more of those pieces itself and eventually designs its own robot brand. That is the difference between simply assembling a product and building a deeper manufacturing ecosystem.',
        chain: [
          'India has become a major smartphone assembly hub',
          'Government wants more components to be sourced domestically',
          'The new scheme also encourages Indian-owned smartphone brands',
          'More domestic design, research and production can create local capabilities',
          'India aims to capture more value from the electronics industry',
        ],
        formalTermExplanation:
          'The key idea is domestic value addition: instead of only assembling imported parts, a country tries to produce more of the components, technology, design and intellectual property that make up a finished product.',
      },
      wordsYouNeedToKnow: [
        {
          term: 'Domestic Value Addition',
          meaning: 'The part of a product’s value that is created within the country rather than imported.',
          example: 'Making more smartphone components in India would increase domestic value addition.',
        },
        {
          term: 'Intellectual Property (IP)',
          meaning: 'Legal rights over creations such as inventions, designs, software and brands.',
          example: 'A company’s original phone design or technology can be protected as intellectual property.',
        },
        {
          term: 'Manufacturing Ecosystem',
          meaning: 'The connected network of factories, suppliers, designers, researchers and workers needed to make products.',
          example: 'A strong phone-manufacturing ecosystem includes component makers as well as final assembly plants.',
        },
      ],
      whyDoesThisMatter: {
        heading: 'Why does India want more than assembly?',
        points: [
          {
            label: 'Jobs and Skills',
            text: 'More manufacturing can create demand for engineers, technicians, factory workers and researchers.',
          },
          {
            label: 'Technology',
            text: 'Building design and research capabilities can help Indian companies create and improve their own products.',
          },
          {
            label: 'Economic Strength',
            text: 'Producing more components domestically can reduce dependence on imported parts and allow more of a product’s value to stay within India.',
          },
        ],
      },
      biggerPicture: {
        chain: [
          'Factories',
          'Components',
          'Design and research',
          'Indian-owned brands',
          'Jobs, exports and industrial capability',
        ],
        summary:
          'A smartphone is not just a gadget. It is the final result of a huge network of technology, factories, workers, suppliers, research and business decisions.',
      },
      thinkAboutThis: [
        'Why might a country want to make important components itself instead of importing nearly everything?',
        'Is assembling a product the same as designing and inventing the technology inside it? Why or why not?',
      ],
      explainPrompt:
        'Explain why India’s new ₹62,500 crore scheme is trying to move the country from mainly assembling phones toward making more components, technology and Indian brands.',
    },
    {
      id: 'gurugram-water-crisis',
      number: 3,
      title: 'Why Did Gurugram Need Water Tankers?',
      category: '💧 Environment & Cities',
      newspaperPage: 'Page 3 (The City)',
      hook: 'Imagine turning on a tap expecting a strong stream of water, but only a weak trickle comes out. Now imagine thousands of homes facing the same problem. That is what happened in parts of Gurugram, where residents had to depend on water tankers after problems hit the city’s water-supply system.',
      whatHappened: {
        lead: 'DLF Phases 1 and 2 in Gurugram faced low-pressure water supply, with tankers being called in for residents.',
        who: 'Residents, the Gurugram Metropolitan Development Authority (GMDA), and agencies responsible for the city’s water-supply infrastructure.',
        where: 'Gurugram, Haryana, particularly DLF Phases 1 and 2.',
        when: 'The problem was reported on August 22, 2026, after several days of disruption.',
        what: 'The report points to problems including a tripping incident at the Basai water treatment plant and a leakage in a master supply pipeline. Residents experienced low pressure and had to depend on tanker supplies.',
        immediateIssue: 'A city needs water to move through treatment plants, large pipelines and local distribution networks. When an important part of that chain fails, homes can experience shortages even when the city has a larger water system.',
      },
      whatYouNeedToKnow: [
        {
          conceptName: '1. What is a Water Treatment Plant?',
          explanation:
            'A water treatment plant processes water so it can be supplied for human use. Treatment removes unwanted substances and makes the water safer before it enters the distribution network.',
        },
        {
          conceptName: '2. What is a Master Supply Pipeline?',
          explanation:
            'A master supply pipeline is a major pipe that carries large quantities of water from a treatment or supply point toward areas of the city. A leak or failure in such a pipeline can affect many neighbourhoods at once.',
        },
      ],
      breakItDown: {
        analogyTitle: 'The School Water-Bottle Analogy',
        analogyText:
          'Imagine your school has one large water tank that fills 100 bottles every morning. A pipe carries the water to different classrooms. If that pipe develops a big leak, the tank may still contain water, but the classrooms receive much less. The problem is not only “how much water exists?” — it is also “can the water reach the people who need it?”',
        chain: [
          'Water is processed at a treatment plant',
          'Large pipelines carry water toward neighbourhoods',
          'A plant problem or pipeline leak reduces effective supply',
          'Water pressure falls in homes',
          'Residents need temporary tanker supplies',
          'Repairs and reliable distribution are needed to restore normal service',
        ],
        formalTermExplanation:
          'Urban water supply is an infrastructure system. It depends on treatment, storage, pumping, pipelines and local distribution all working together. A failure at one important point can affect a large population.',
      },
      wordsYouNeedToKnow: [
        {
          term: 'Water Treatment Plant',
          meaning: 'A facility where water is processed to make it suitable for supply and use.',
          example: 'The Basai water treatment plant is part of Gurugram’s water-supply system.',
        },
        {
          term: 'Water Pressure',
          meaning: 'The force that helps water move through pipes and reach homes and buildings.',
          example: 'A drop in pressure can cause only a small amount of water to come from a tap.',
        },
        {
          term: 'Infrastructure',
          meaning: 'The basic physical systems and facilities that allow a city or country to function.',
          example: 'Water pipelines, roads and power networks are examples of infrastructure.',
        },
      ],
      whyDoesThisMatter: {
        heading: 'A city is only as strong as its basic systems:',
        points: [
          {
            label: 'Daily Life',
            text: 'Water is needed for drinking, cooking, cleaning, schools, hospitals and businesses.',
          },
          {
            label: 'Growing Cities',
            text: 'As cities grow, their water systems must serve more people and larger buildings without becoming unreliable.',
          },
          {
            label: 'Resilience',
            text: 'Cities need backup plans, repairs and good maintenance so that one failure does not leave thousands of families without essential services.',
          },
        ],
      },
      biggerPicture: {
        chain: [
          'Water source',
          'Treatment plant',
          'Pipelines and pumping',
          'Neighbourhood distribution',
          'Homes, schools and businesses',
        ],
        summary:
          'When you turn on a tap, you are using an invisible city-wide system. Understanding that system helps us understand why urban planning and infrastructure matter.',
      },
      thinkAboutThis: [
        'Why can a city have enough water overall but still have a shortage in one neighbourhood?',
        'What should a city do to prepare for a major pipeline or treatment-plant failure?',
      ],
      explainPrompt:
        'Explain why residents of parts of Gurugram needed water tankers even though the city has a large water-supply system.',
    },
    {
      id: 'one-nation-one-election',
      number: 4,
      title: 'What Does “One Nation, One Election” Actually Mean?',
      category: '🏛️ Polity & Democracy',
      newspaperPage: 'Page 5 (Politics)',
      hook: 'Imagine your school holding elections for class captain, sports captain and student council on three different days every year. Now imagine putting many of those elections on the same day. That is the basic idea behind “One Nation, One Election” — but applying it to a huge country is much more complicated.',
      whatHappened: {
        lead: 'The Sunday Express reports that joint elections for the Lok Sabha and assemblies of 22 states and Union Territories are being discussed in the current political debate around One Nation, One Election.',
        who: 'The Union government, political parties, state governments and Parliament are involved in the debate over how simultaneous elections could work.',
        where: 'Across India, involving elections to Parliament and state legislatures.',
        when: 'The issue is being discussed in August 2026, with the newspaper reporting a possible Lok Sabha 2029 framework and a current Bills timeline extending to 2034.',
        what: 'The basic proposal is to hold Lok Sabha and state Assembly elections together or on a coordinated cycle instead of having elections spread across different years. The newspaper notes that the Joint Committee of Parliament is considering the issue and that several constitutional and political questions remain.',
        immediateIssue: 'Holding many elections together could change how often election campaigns take place, how governments plan their terms and how election machinery is used. The exact arrangement depends on the constitutional and legislative process.',
      },
      whatYouNeedToKnow: [
        {
          conceptName: '1. What is the Lok Sabha?',
          explanation:
            'The Lok Sabha is the House of the People, the directly elected lower house of India’s Parliament. Its members are elected by voters in parliamentary constituencies across the country.',
        },
        {
          conceptName: '2. What is a State Legislative Assembly?',
          explanation:
            'A State Legislative Assembly is the elected law-making house of a state. Voters choose representatives who make state laws and help form the state government.',
        },
        {
          conceptName: '3. What is Simultaneous Election?',
          explanation:
            'A simultaneous-election system aims to coordinate elections to the Lok Sabha and state assemblies so that voters cast their votes for these different levels of government during the same election period.',
        },
      ],
      breakItDown: {
        analogyTitle: 'The One School Election Day Analogy',
        analogyText:
          'Suppose your school has elections for the student council, sports committee and cultural committee. Instead of setting up three separate campaigns, polling days and counting processes, the school decides to hold them together on one election day. It could save repeated preparation, but the school would also have to manage a much bigger election day and make sure every position is decided fairly.',
        chain: [
          'India has elections for Parliament and state assemblies',
          'These elections can occur at different times',
          'One proposal is to coordinate many of these elections',
          'This could reduce repeated election activity',
          'But constitutional, political and practical questions must be solved',
        ],
        formalTermExplanation:
          'One Nation, One Election refers to the idea of synchronising elections to the Lok Sabha and state Legislative Assemblies. It is a proposal involving constitutional and legislative changes, not simply a decision to move every election to one date.',
      },
      wordsYouNeedToKnow: [
        {
          term: 'Legislative Assembly',
          meaning: 'The elected law-making body of a state.',
          example: 'The members of a state Legislative Assembly are elected by voters in that state.',
        },
        {
          term: 'Simultaneous Elections',
          meaning: 'Elections held during the same coordinated election period.',
          example: 'The One Nation, One Election proposal seeks to coordinate Lok Sabha and Assembly elections.',
        },
        {
          term: 'Constitutional Amendment',
          meaning: 'A formal change made to the Constitution using the procedure laid down by the Constitution.',
          example: 'A major change to the election system may require constitutional amendments.',
        },
      ],
      whyDoesThisMatter: {
        heading: 'Why is this a big democracy question?',
        points: [
          {
            label: 'Election Costs and Administration',
            text: 'Repeated elections require election staff, security arrangements, voting machines, campaigning and other resources. Supporters argue that coordination could reduce repeated activity.',
          },
          {
            label: 'Government Work',
            text: 'Frequent elections can mean repeated campaigns and restrictions associated with election periods. Supporters argue that fewer election cycles could allow governments to focus more consistently on administration.',
          },
          {
            label: 'Federalism',
            text: 'India has both Union and state governments. Any change to their election cycles has to consider the independence and constitutional role of state governments.',
          },
        ],
      },
      biggerPicture: {
        chain: [
          'Voters',
          'Lok Sabha elections',
          'State Assembly elections',
          'Election administration',
          'Constitution and federalism',
        ],
        summary:
          'An election is not just a day of voting. It connects citizens, political parties, governments, the Constitution and the machinery of democracy.',
      },
      thinkAboutThis: [
        'What might be the biggest advantage of holding Lok Sabha and Assembly elections together?',
        'What problem could arise if a state government’s term does not naturally end at the same time as the Lok Sabha’s term?',
      ],
      explainPrompt:
        'Explain “One Nation, One Election” to someone who has never heard the term. Include what elections it refers to and why people are debating it.',
    },
    {
      id: 'wildfires-war-bombs',
      number: 5,
      title: 'How Can a Forest Fire Reveal Bombs From World War II?',
      category: '🌳 Environment & History',
      newspaperPage: 'Page 2 (The World)',
      hook: 'Imagine a forest fire burning through land where a war happened many decades ago. The fire clears away plants and soil — and suddenly something dangerous that had been hidden underground becomes visible. This is now a real problem in parts of Europe, where wildfires are uncovering old bombs and mines left behind by two world wars.',
      whatHappened: {
        lead: 'The newspaper reports that wildfires across Europe have uncovered bombs and mines left behind from the First and Second World Wars.',
        who: 'Firefighters, bomb-disposal teams, local authorities and communities in European areas affected by wildfires and unexploded wartime explosives.',
        where: 'Parts of Europe including areas in and around France, Belgium, Germany and the Netherlands.',
        when: 'The issue is being reported during the August 2026 wildfire season.',
        what: 'Decades after the wars ended, unexploded bombs, shells and other wartime explosives can remain underground. Fires can remove vegetation, expose buried objects and sometimes make old ammunition more dangerous to approach.',
        immediateIssue: 'People may think a war ended long ago and therefore its weapons are no longer a danger. But unexploded ordnance can remain hazardous for generations and requires specialist teams to identify and safely remove it.',
      },
      whatYouNeedToKnow: [
        {
          conceptName: '1. What is Unexploded Ordnance?',
          explanation:
            'Unexploded ordnance, often shortened to UXO, means a bomb, shell, mine or other military explosive that was used or left during conflict but did not explode as intended. It can remain dangerous many years later.',
        },
        {
          conceptName: '2. Why Can Wildfires Expose Hidden Objects?',
          explanation:
            'A forest floor can hide objects beneath vegetation and soil. When a wildfire removes that cover, objects that were previously difficult to see can become exposed. Heat can also create additional risks around old explosives.',
        },
      ],
      breakItDown: {
        analogyTitle: 'The Buried Time Capsule Analogy',
        analogyText:
          'Imagine burying a metal box under a thick patch of grass and leaving it there for 80 years. People walking past might never notice it. Now imagine a fire removes all the grass. The box suddenly becomes visible. With an old explosive, however, nobody should simply pick it up — trained experts must identify and handle it safely.',
        chain: [
          'World wars leave weapons and ammunition in the landscape',
          'Some explosives fail to detonate and remain underground',
          'Vegetation and soil hide them for decades',
          'Wildfires remove vegetation and expose buried objects',
          'Specialist bomb-disposal teams must assess and secure the area',
        ],
        formalTermExplanation:
          'The important term is unexploded ordnance (UXO): military explosive material that remains dangerous because it did not function as intended. UXO is one of the long-term physical legacies of war.',
      },
      wordsYouNeedToKnow: [
        {
          term: 'Unexploded Ordnance (UXO)',
          meaning: 'A bomb, shell, mine or other military explosive that did not explode as intended and may still be dangerous.',
          example: 'Old UXO can sometimes be discovered during construction, farming or after wildfires.',
        },
        {
          term: 'Bomb-Disposal Team',
          meaning: 'Specialists trained to identify, secure and safely deal with explosive devices.',
          example: 'A bomb-disposal team may be called when an old shell is discovered.',
        },
        {
          term: 'Wildfire',
          meaning: 'A large, uncontrolled fire that spreads through vegetation or other land.',
          example: 'A wildfire can destroy forests and also expose objects hidden beneath vegetation.',
        },
      ],
      whyDoesThisMatter: {
        heading: 'A war can leave dangers long after the fighting stops:',
        points: [
          {
            label: 'History Has Physical Remains',
            text: 'Wars do not disappear when peace treaties are signed. Weapons, damaged buildings and contaminated land can remain for decades.',
          },
          {
            label: 'Climate and Fire Risks',
            text: 'Wildfires can change the landscape and expose hazards that were previously hidden.',
          },
          {
            label: 'Public Safety',
            text: 'Finding an old explosive is not like finding an ordinary piece of metal. People need to keep away and allow trained specialists to handle it.',
          },
        ],
      },
      biggerPicture: {
        chain: [
          'World wars',
          'Unexploded weapons',
          'Decades of burial',
          'Wildfire changes the landscape',
          'Modern emergency response',
        ],
        summary:
          'History, geography and environmental events can intersect in surprising ways. A forest fire in 2026 can reveal a physical danger created by a war fought generations earlier.',
      },
      thinkAboutThis: [
        'Why can an old weapon still be dangerous even after many decades?',
        'What should an ordinary person do after discovering something that might be an old bomb or shell?',
      ],
      explainPrompt:
        'Explain how a wildfire can uncover a danger left behind by a war that ended many decades ago.',
    },
  ],
};
