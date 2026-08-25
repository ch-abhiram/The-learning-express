import { ExplainingArticle, NewspaperEdition } from '../types';

export const indianExpressEdition: NewspaperEdition = {
  newspaperName: 'The Indian Express',
  editionDate: 'Tuesday, August 25, 2026',
  targetAudience: 'Classes 8–10 (Ages 13–16)',
  subheading: 'Daily News Decoded • Turning Headlines into Lifelong Understanding',
  articles: [
    {
      id: 'jaishankar-putin-india-russia',
      number: 1,
      title: 'Why Are India and Russia Focusing on Trade, Energy and Fertilisers?',
      category: '🌏 World & Geopolitics',
      newspaperPage: 'Page 1 (Front Page)',
      hook: 'Imagine your family depends on another country for an important item such as fuel or fertiliser. Even if the two countries do not agree on everything, you would want that supply to remain reliable. That is one reason India continues to give practical importance to its relationship with Russia.',
      whatHappened: {
        lead: 'External Affairs Minister S. Jaishankar met Russian President Vladimir Putin in Moscow, with the two sides discussing trade, energy, fertilisers, nuclear energy and high-technology cooperation.',
        who: 'India’s External Affairs Minister S. Jaishankar, Russian President Vladimir Putin and officials from both countries.',
        where: 'Moscow, Russia.',
        when: 'August 24, 2026, ahead of planned Modi–Putin meetings at the SCO and BRICS summits.',
        what: 'The meeting highlighted efforts to deepen India–Russia economic cooperation. Russia is seeking to expand supplies of energy and fertilisers to India, while both sides also want progress in nuclear energy, technology and trade. The two countries have set a bilateral trade target of $100 billion by 2030.',
        immediateIssue: 'India needs reliable energy and fertiliser supplies while also trying to expand exports to Russia and reduce the imbalance in bilateral trade.',
      },
      whatYouNeedToKnow: [
        {
          conceptName: '1. What is Bilateral Trade?',
          explanation: 'Bilateral trade is the buying and selling of goods and services between two countries.',
        },
        {
          conceptName: '2. Why are Fertilisers Important?',
          explanation: 'Fertilisers provide nutrients that help crops grow. Reliable fertiliser supplies therefore matter for agricultural production and food security.',
        },
        {
          conceptName: '3. What is Strategic Autonomy?',
          explanation: 'Strategic autonomy means having enough freedom in foreign policy to protect national interests rather than depending completely on another major power.',
        },
      ],
      breakItDown: {
        analogyTitle: 'The School-Supplies Analogy',
        analogyText: 'Imagine your school buys laboratory equipment from one supplier and food from another. If one supplier becomes unreliable, the school has to keep alternative relationships available. Countries do something similar with energy, technology, food inputs and trade partners.',
        chain: ['India needs energy and fertilisers', 'Russia is a major supplier', 'Both countries also want more trade', 'They discuss nuclear and high-tech cooperation', 'India tries to balance economic needs with wider foreign-policy interests'],
        formalTermExplanation: 'India–Russia relations are an example of bilateral relations in which economic interests, energy security, defence history and wider geopolitics overlap.',
      },
      wordsYouNeedToKnow: [
        {
          term: 'Bilateral',
          meaning: 'Involving two countries or two sides.',
          example: 'India and Russia have a bilateral relationship.',
        },
        {
          term: 'Energy Security',
          meaning: 'Having dependable access to the energy a country needs at reasonable and manageable risk.',
          example: 'Diversifying energy suppliers can strengthen energy security.',
        },
        {
          term: 'Trade Deficit',
          meaning: 'A situation in which a country imports more goods and services from another country than it exports to it.',
          example: 'India is interested in increasing exports to Russia while maintaining important imports.',
        },
      ],
      whyDoesThisMatter: {
        heading: 'Why does this matter to India?',
        points: [
          {
            label: 'Farmers',
            text: 'Fertiliser availability affects agricultural costs and crop production.',
          },
          {
            label: 'Energy',
            text: 'Oil, gas and nuclear cooperation are connected to India’s long-term energy needs.',
          },
          {
            label: 'Foreign Policy',
            text: 'India maintains relationships with several major powers while trying to protect its own interests.',
          },
        ],
      },
      biggerPicture: {
        chain: ['Resources', 'Trade', 'Technology', 'Strategic interests', 'Diplomatic relationships'],
        summary: 'Foreign policy is often connected directly to everyday needs such as fuel, food production, technology and jobs.',
      },
      thinkAboutThis: [
        'Why might India want strong relationships with several countries instead of depending on only one?',
        'Why can trade be an important part of foreign policy?',
      ],
      explainPrompt: 'Explain why energy, fertilisers and trade are important parts of India–Russia relations.',
    },
    {
      id: 'farakka-treaty-bihar',
      number: 2,
      title: 'Why Does Bihar Want the Farakka Treaty Reconsidered?',
      category: '🌊 Geography, Environment & International Relations',
      newspaperPage: 'Page 7 (Explained)',
      hook: 'Imagine two neighbouring students share the same water tank. One student builds a pipe to redirect some water, while the other says the change is hurting their supply. Now imagine that the disagreement involves an entire river crossing an international border. That is much harder to solve.',
      whatHappened: {
        lead: 'Bihar’s ruling NDA has raised objections to renewal of the 1996 India–Bangladesh Ganges Water Sharing Treaty, commonly associated with the Farakka Barrage, as the treaty’s 30-year term approaches its end.',
        who: 'The Bihar government, the Union government, Bangladesh and political leaders involved in India’s water and foreign policy.',
        where: 'The Ganga basin, with the Farakka Barrage located in West Bengal and downstream effects extending into Bangladesh and upstream Bihar concerns.',
        when: 'The 1996 treaty was signed for 30 years and is due to expire in December 2026.',
        what: 'The treaty regulates sharing of Ganga waters at Farakka mainly during the dry season. Bihar leaders argue that the barrage and associated siltation contribute to flooding and water stress in the state, while India must also manage its commitments to Bangladesh.',
        immediateIssue: 'The Centre has to balance a state government’s concerns about floods and water availability with India’s international relationship and water-sharing obligations with Bangladesh.',
      },
      whatYouNeedToKnow: [
        {
          conceptName: '1. What is a Barrage?',
          explanation: 'A barrage is a structure built across a river to control, divert or regulate water flow.',
        },
        {
          conceptName: '2. What is a Transboundary River?',
          explanation: 'A transboundary river flows through or forms a boundary between more than one country, making its management an international issue.',
        },
        {
          conceptName: '3. What is Siltation?',
          explanation: 'Siltation is the accumulation of fine soil and sediment in a river, reservoir or other water body. It can reduce the space available for water and alter river behaviour.',
        },
      ],
      breakItDown: {
        analogyTitle: 'The Shared-River Analogy',
        analogyText: 'If two villages depend on the same river, changing the river upstream can affect people downstream. But the upstream community also has its own needs. A water-sharing agreement tries to create rules so that both sides know what they can expect.',
        chain: ['Ganga is shared across borders', 'Farakka controls/diverts part of river flow', 'India and Bangladesh have a water-sharing agreement', 'Bihar raises domestic concerns', 'Centre must balance federal and international interests'],
        formalTermExplanation: 'Water diplomacy is the negotiation and management of shared water resources between political jurisdictions, especially countries sharing a river basin.',
      },
      wordsYouNeedToKnow: [
        {
          term: 'Farakka Barrage',
          meaning: 'A river-control structure on the Ganga in West Bengal that diverts water toward the Bhagirathi-Hooghly system.',
          example: 'The Farakka Barrage is central to the India–Bangladesh Ganga water-sharing issue.',
        },
        {
          term: 'Federalism',
          meaning: 'A system in which powers are divided between the Union and state governments.',
          example: 'Bihar’s concerns create a federal dimension to an international water issue.',
        },
        {
          term: 'Water Diplomacy',
          meaning: 'Negotiation between countries or regions over the use and management of shared water resources.',
          example: 'India and Bangladesh use diplomacy to manage their shared river waters.',
        },
      ],
      whyDoesThisMatter: {
        heading: 'Why is a river treaty more complicated than it sounds?',
        points: [
          {
            label: 'Geography',
            text: 'Water does not follow political boundaries, so actions upstream can affect people far downstream.',
          },
          {
            label: 'Federalism',
            text: 'The Union handles foreign relations, but states experience the direct effects of river management.',
          },
          {
            label: 'Environment',
            text: 'Flooding, siltation, river ecology and changing rainfall all affect how water-management decisions work in practice.',
          },
        ],
      },
      biggerPicture: {
        chain: ['River geography', 'Human engineering', 'State interests', 'International agreement', 'Water diplomacy'],
        summary: 'A river can turn a local engineering decision into a national and international policy problem.',
      },
      thinkAboutThis: [
        'Why can a river-sharing agreement create both cooperation and disagreement?',
        'Why should the Centre consider state-level concerns while negotiating an international treaty?',
      ],
      explainPrompt: 'Explain why Bihar’s concerns about the Farakka Treaty create both a federal problem and an international diplomatic problem.',
    },
    {
      id: 'other-neet-youth-employment',
      number: 3,
      title: 'What Is the “Other NEET” That India Needs to Worry About?',
      category: '📊 Economy & Society',
      newspaperPage: 'Page 13 (Explained)',
      hook: 'When someone says “unemployment is falling”, it sounds like the jobs problem is being solved. But imagine counting only students who are actively asking for a job and ignoring young people who are neither studying nor working nor even looking for work. You would miss a large part of the problem.',
      whatHappened: {
        lead: 'The Indian Express examines youth employment and argues that India’s headline unemployment rate does not capture the full picture. It highlights the NEET measure — young people who are Not in Employment, Education or Training.',
        who: 'India’s young population, workers, policymakers and researchers using Periodic Labour Force Survey and State of Working India data.',
        where: 'Across India.',
        when: 'The analysis appears in the August 25, 2026 edition.',
        what: 'The article notes that the overall unemployment rate has fallen substantially, but youth unemployment remains much higher. It also raises concerns about the quality of jobs, low or stagnant earnings in many forms of work, and people who are outside the labour force altogether.',
        immediateIssue: 'A low headline unemployment rate does not automatically mean that young people are finding good, stable and productive work.',
      },
      whatYouNeedToKnow: [
        {
          conceptName: '1. What is UER?',
          explanation: 'The Unemployment Rate measures unemployed people as a share of the labour force — people who are working or actively seeking work.',
        },
        {
          conceptName: '2. What does NEET mean?',
          explanation: 'NEET means Not in Employment, Education or Training. It includes young people who are neither working nor studying or training.',
        },
        {
          conceptName: '3. Why does Job Quality Matter?',
          explanation: 'A job can exist but still provide low income, little security, few opportunities to learn and weak prospects for improvement. Counting jobs alone cannot show all of these differences.',
        },
      ],
      breakItDown: {
        analogyTitle: 'The Classroom Attendance Analogy',
        analogyText: 'Suppose a teacher asks, “How many students are absent?” and counts only students who told the teacher they wanted to attend. Students who stopped coming and never asked to return would disappear from the calculation. Labour statistics can have a similar blind spot when discouraged people are outside the labour force.',
        chain: ['Overall UER falls', 'Youth unemployment remains high', 'Some jobs have low or stagnant earnings', 'Some people stop looking for work', 'NEET captures a wider part of youth labour under-utilisation'],
        formalTermExplanation: 'Labour-market indicators measure different things. A good analysis therefore looks at unemployment, labour-force participation, employment quality and NEET together rather than relying on one number.',
      },
      wordsYouNeedToKnow: [
        {
          term: 'Labour Force',
          meaning: 'People who are working or actively seeking work.',
          example: 'A person who has stopped looking for work may not be counted in the labour force.',
        },
        {
          term: 'NEET',
          meaning: 'Not in Employment, Education or Training.',
          example: 'The NEET rate can show young people who are outside both work and education.',
        },
        {
          term: 'Labour Under-utilisation',
          meaning: 'A situation in which available human work potential is not being fully used, including unemployment or inadequate use of workers’ skills and time.',
          example: 'High youth NEET levels can indicate significant labour under-utilisation.',
        },
      ],
      whyDoesThisMatter: {
        heading: 'Why should students care about employment data?',
        points: [
          {
            label: 'Future Jobs',
            text: 'Students entering the workforce will be affected by the kinds of jobs the economy creates.',
          },
          {
            label: 'Education',
            text: 'Education is valuable only when people can connect learning with opportunities to use their skills.',
          },
          {
            label: 'Policy',
            text: 'Governments need good data to decide whether the priority is creating more jobs, better jobs, skills or pathways into work.',
          },
        ],
      },
      biggerPicture: {
        chain: ['GDP growth', 'Jobs created', 'Job quality', 'Youth participation', 'Human potential'],
        summary: 'Economic progress is not only about how fast the economy grows; it is also about whether people can participate in that growth through meaningful work.',
      },
      thinkAboutThis: [
        'Why can a falling unemployment rate still coexist with serious problems for young people?',
        'Why might a person who has stopped looking for work disappear from the unemployment rate?',
      ],
      explainPrompt: 'Explain why the unemployment rate alone may not tell us how difficult it is for Indian youth to find meaningful work.',
    },
    {
      id: 'urban-flooding-heat',
      number: 4,
      title: 'Why Do Indian Cities Flood and Overheat Again and Again?',
      category: '🏙️ Environment, Geography & Disaster Management',
      newspaperPage: 'Page 13 (Explained)',
      hook: 'A city can experience two very different disasters: streets underwater after heavy rain and neighbourhoods becoming dangerously hot during summer. They look unrelated, but both can be made worse by the same choices about concrete, drainage, trees, lakes and land use.',
      whatHappened: {
        lead: 'The Explained article examines why weather hazards become urban disasters when they meet vulnerable people, poor drainage, dense construction and weak planning.',
        who: 'Urban residents, municipal governments, planners, disaster-management authorities and infrastructure agencies.',
        where: 'Indian cities, with Gurugram used as a recent example of heat followed by severe waterlogging.',
        when: 'The article discusses recent 2026 heat and flooding events and the wider planning problem.',
        what: 'The article explains that heavy rain does not automatically have to produce severe flooding. Natural drains, lakes, floodplains and open soil allow water to move or soak into the ground. Similarly, tree cover, ventilation and less heat-absorbing surfaces can reduce extreme urban heat.',
        immediateIssue: 'Climate change can increase heat and intense rainfall, but the scale of damage depends heavily on how cities are planned and built.',
      },
      whatYouNeedToKnow: [
        {
          conceptName: '1. What is a Hazard?',
          explanation: 'A hazard is a potentially harmful natural or human-made event, such as a heatwave or intense rainfall.',
        },
        {
          conceptName: '2. When Does a Hazard Become a Disaster?',
          explanation: 'A hazard becomes a disaster when it causes serious harm because people, buildings or systems are exposed and vulnerable and lack enough capacity to cope.',
        },
        {
          conceptName: '3. What is the Urban Heat Island Effect?',
          explanation: 'Cities can become hotter than surrounding areas because buildings, asphalt and other hard surfaces absorb and retain heat while vegetation is reduced.',
        },
      ],
      breakItDown: {
        analogyTitle: 'The Sponge-and-Tile Analogy',
        analogyText: 'Think of a natural landscape as a sponge. Rain can soak into soil, grasslands, wetlands and open ground. Cover much of that landscape with tiles — roads, roofs and concrete — and water runs across the surface instead. A city needs drainage and open spaces to work like a system of sponges and channels.',
        chain: ['Climate and weather hazards', 'Dense construction', 'Loss of natural drainage and tree cover', 'Greater exposure and vulnerability', 'Urban disaster'],
        formalTermExplanation: 'Disaster risk is shaped not only by the hazard itself but also by exposure, vulnerability and the capacity of systems to respond.',
      },
      wordsYouNeedToKnow: [
        {
          term: 'Urban Flooding',
          meaning: 'Flooding in a built-up area when rainfall or water flow exceeds the city’s ability to drain, store or safely carry the water away.',
          example: 'Blocked drains and construction over natural water channels can increase urban flooding.',
        },
        {
          term: 'Floodplain',
          meaning: 'Low-lying land next to a river that can naturally be covered by water during high flows.',
          example: 'Building heavily on floodplains can increase flood risk.',
        },
        {
          term: 'Climate Resilience',
          meaning: 'The ability of people and systems to prepare for, withstand and recover from climate-related hazards.',
          example: 'Protecting drainage channels and tree cover can improve urban climate resilience.',
        },
      ],
      whyDoesThisMatter: {
        heading: 'Why is this a planning problem, not just a weather problem?',
        points: [
          {
            label: 'Land',
            text: 'What gets built and where it gets built determines how rainwater moves and how much heat a neighbourhood stores.',
          },
          {
            label: 'Public Health',
            text: 'Extreme heat and flooding can disrupt schools, work, transport and access to healthcare.',
          },
          {
            label: 'Future Cities',
            text: 'India’s cities will continue to grow, so today’s planning decisions determine tomorrow’s disaster risk.',
          },
        ],
      },
      biggerPicture: {
        chain: ['Weather', 'Land use', 'Infrastructure', 'Exposure', 'Disaster risk'],
        summary: 'We cannot control the weather, but cities can control many of the conditions that determine whether extreme weather becomes a disaster.',
      },
      thinkAboutThis: [
        'Why can the same amount of rain cause very different levels of flooding in two cities?',
        'What happens to a neighbourhood when trees, soil and water bodies are replaced by concrete?',
      ],
      explainPrompt: 'Explain how city planning can make heatwaves and heavy rain more dangerous.',
    },
    {
      id: 'ashoka-vaishya-tekri-ujjain',
      number: 5,
      title: 'What Can a New Archaeological Dig Tell Us About Ashoka?',
      category: '🏛️ History & Archaeology',
      newspaperPage: 'Page 13 (Explained)',
      hook: 'History books tell us about famous rulers, but archaeology can test those stories against physical evidence. A new excavation at Vaishya Tekri in Ujjain is being used to investigate the city’s connection with Emperor Ashoka and the Mauryan period.',
      whatHappened: {
        lead: 'A fresh archaeological excavation at Vaishya Tekri in Ujjain is being undertaken to learn more about the site and its possible connection with Ashoka’s period and presence in the city.',
        who: 'Archaeologists, researchers and the Madhya Pradesh government, studying a major archaeological site at Ujjain.',
        where: 'Vaishya Tekri, Ujjain, Madhya Pradesh.',
        when: 'The new excavation is reported in the August 25, 2026 edition.',
        what: 'Researchers are investigating the archaeological remains at Vaishya Tekri to understand the site’s chronology, architecture and connection with the Mauryan period. Excavation can reveal material evidence that helps historians compare physical remains with literary and historical traditions.',
        immediateIssue: 'Archaeology rarely produces a complete story from one discovery. Researchers have to date objects, study layers and compare evidence before making strong historical conclusions.',
      },
      whatYouNeedToKnow: [
        {
          conceptName: '1. What is Archaeology?',
          explanation: 'Archaeology is the study of past human societies through material remains such as buildings, pottery, tools, inscriptions and other physical evidence.',
        },
        {
          conceptName: '2. What is Stratigraphy?',
          explanation: 'Stratigraphy is the study of layers of soil and archaeological deposits. Lower undisturbed layers are generally older than layers above them.',
        },
        {
          conceptName: '3. Who Was Ashoka?',
          explanation: 'Ashoka was a major ruler of the Mauryan Empire. He is especially remembered for his inscriptions and for promoting Dhamma after the Kalinga War.',
        },
      ],
      breakItDown: {
        analogyTitle: 'The Detective Analogy',
        analogyText: 'Imagine trying to solve a mystery when the witnesses are no longer alive. You examine footprints, objects, photographs and the order in which things were left behind. Archaeologists work in a similar way: they collect physical clues and build the most evidence-based explanation they can.',
        chain: ['Excavation', 'Layers and objects found', 'Dating and analysis', 'Comparison with inscriptions and historical sources', 'Stronger understanding of the past'],
        formalTermExplanation: 'Archaeological evidence is strongest when different kinds of evidence — material remains, inscriptions, texts, dating and context — support one another.',
      },
      wordsYouNeedToKnow: [
        {
          term: 'Excavation',
          meaning: 'The careful digging and recording of an archaeological site to uncover buried remains.',
          example: 'An excavation at Vaishya Tekri can reveal structures and objects from earlier periods.',
        },
        {
          term: 'Mauryan Empire',
          meaning: 'A large ancient Indian empire that flourished roughly from the 4th to 2nd centuries BCE.',
          example: 'Ashoka was one of the best-known Mauryan rulers.',
        },
        {
          term: 'Inscription',
          meaning: 'Writing carved or engraved on a durable surface such as stone or metal.',
          example: 'Ashoka’s inscriptions are important sources for understanding his reign and ideas.',
        },
      ],
      whyDoesThisMatter: {
        heading: 'Why does archaeology matter?',
        points: [
          {
            label: 'Evidence',
            text: 'Physical remains can confirm, challenge or add detail to written historical accounts.',
          },
          {
            label: 'Local History',
            text: 'Sites such as Ujjain help connect national history with the places where people actually lived.',
          },
          {
            label: 'Scientific Method',
            text: 'Archaeologists test ideas against evidence instead of simply accepting every traditional claim as fact.',
          },
        ],
      },
      biggerPicture: {
        chain: ['Ancient settlement', 'Buried remains', 'Scientific excavation', 'Evidence analysis', 'Historical interpretation'],
        summary: 'Archaeology turns fragments of the past into evidence that can help us understand how ancient societies were organised and how historical events unfolded.',
      },
      thinkAboutThis: [
        'Why should historians compare archaeological evidence with written sources?',
        'Why is it important to record exactly where an archaeological object is found?',
      ],
      explainPrompt: 'Explain how a new excavation can improve our understanding of Ashoka and the Mauryan period without simply relying on old stories.',
    },
  ],
};
