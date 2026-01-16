// update types
export type UpdateTag = "award" | "paper" | "milestone" | "talk" | "press";

export type Link = {
  text: string;
  url: string;
};

export type Update = {
  text: string;
  month: string;
  year: number;
  tags: UpdateTag[];
  links?: Link[];
};

export const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const updates: Update[] = [
  {
    text: "Joined as a PhD student at USC, advised by Swabha Swayamdipta",
    month: "October",
    year: 2022,
    tags: ["milestone"],
  },
  {
    text: "Successfully defended my Master's thesis at the University of Virginia advised by Vicente Ordonez in the Vision, Language, and Learning Lab.",
    month: "Dec",
    year: 2021,
    tags: ["milestone"],
    links: [
      {
        text: "Master's thesis",
        url: "https://libraetd.lib.virginia.edu/public_view/qz20st57x"
      },
      {
        text: "Vicente Ordonez",
        url: "https://www.cs.rice.edu/~vo9/"
      }
    ],
  },
  {
    text: "Variation of Gender Biases in Visual Recognition Models Before and After Finetuning is accepted to the Algorithmic Fairness through the Lens of Time workshop at NeurIPS 2023.",
    month: "Oct",
    year: 2023,
    tags: ["paper"],
    links: [
      {
        text: "Variation of Gender Biases in Visual Recognition Models Before and After Finetuning",
        url: "https://arxiv.org/abs/2303.07615"
      },
      {
        text: "Algorithmic Fairness through the Lens of Time workshop",
        url: "https://www.afciworkshop.org/"
      },
      {
        text: "NeurIPS 2023",
        url: "https://nips.cc/"
      }
    ],
  },
  {
    text: "Characterizing Attitudes Towards Homelessness on Social Media was presented at the SoCal NLP Symposium 2023.",
    month: "Nov",
    year: 2023,
    tags: ["talk"],
    links: [
      {
        text: "SoCal NLP Symposium 2023",
        url: "https://socalnlp.github.io/symp23/index.html"
      }
    ],
  },
  {
    text: "🎤 Invited talk at CAIS++ on Characterizing Attitudes Towards Homelessness on Social Media via LLM Assistants",
    month: "Apr",
    year: 2024,
    tags: ["talk"],
    links: [
      {
        text: "CAIS++",
        url: "https://caisplusplus.usc.edu/"
      }
    ],
  },
  {
    text: "🏆 Received a best poster award at ShowCAIS 2024 for our work: OATH-Frames: Characterizing Online Attitudes Towards Homelessness on Social Media via LLM Assistants. Thank you so much at ShowCAIS!",
    month: "Apr",
    year: 2024,
    tags: ["award"],
    links: [
      {
        text: "ShowCAIS 2024",
        url: "https://sites.google.com/usc.edu/showcais-2024/home?authuser=0"
      }
    ],
  },
  {
    text: "📸 Featured in USC Viterbi for our work: OATH-Frames: Characterizing Online Attitudes Towards Homelessness on Social Media via LLM Assistants.",
    month: "Sep",
    year: 2024,
    tags: ["press"],
    links: [
      {
        text: "USC Viterbi",
        url: "https://viterbischool.usc.edu/news/2024/09/ai-solutions-for-social-good-ph-d-student-enlists-llm-assistants-on-project-addressing-homelessness/"
      }
    ],
  },
  {
    text: "OATH-Frames was accepted into EMNLP 2024 (Main)!",
    month: "Sep",
    year: 2024,
    tags: ["paper"],
    links: [
      {
        text: "OATH-Frames",
        url: "https://jr4fs.github.io/OATH-Frames/"
      },
      {
        text: "EMNLP 2024 (Main)",
        url: "https://2024.emnlp.org/"
      }
    ],
  },
  {
    text: "Excited to serve as a student leader for Center for AI in Society (CAIS).",
    month: "Aug",
    year: 2024,
    tags: ["milestone"],
    links: [
      {
        text: "student leader for Center for AI in Society (CAIS)",
        url: "https://cais.usc.edu/our-people/#id_phd-students"
      }
    ],
  },
  {
  text: "Check out our interactive OATH-Frames dashboard",
  month: "Oct",
 year: 2024,
  tags: ["paper"],
  links: [
    {
      text: "OATH-Frames dashboard",
      url: "https://oath-frames-dashboard.streamlit.app/"
    }
  ],
  },
  {
    text: "📸 Featured on Spectrum Local News for our work on OATH-Frames",
    month: "Oct",
    year: 2024,
    tags: ["press"],
    links: [
      {
        text: "Spectrum Local News",
        url: "https://spectrumnews1.com/ca/southern-california/technology/2024/10/13/ai-usc-advocacy-homelessness-la?cid=share_twitter"
      }
    ],
  },
  {
    text: "🎤 Invited to present an overview of my research at the USC President's Leadership Council",
    month: "Oct",
    year: 2024,
    tags: ["talk"],
    links: [],
  },
  {
    text: "Presented our work Towards Interventions for Suicide Prevention with LLM Assistants in Social Work at The Center for Computational Language Sciences Retreat",
    month: "Nov",
    year: 2024,
    tags: ["talk"],
    links: [
      {
        text: "Towards Interventions for Suicide Prevention with LLM Assistants in Social Work",
        url: "assets/socal2024.pdf"
      },
      {
        text: "The Center for Computational Language Sciences",
        url: "https://dornsife.usc.edu/ccls/"
      }
    ],
  },
  {
  text: "🏆 We won an outstanding paper award for our work on OATH-Frames EMNLP 2024, feeling super grateful ✨",
  month: "Nov",
  year: 2024,
  tags: ["award"],
  links: [
    {
      text: "EMNLP 2024",
      url: "https://2024.emnlp.org/program/best_papers/"
    }
  ],
  },
  {
    text: "Presented our work Towards Interventions for Suicide Prevention with LLM Assistants in Social Work at SoCal NLP 2024",
    month: "Nov",
    year: 2024,
    tags: ["talk"],
    links: [
      {
        text: "Towards Interventions for Suicide Prevention with LLM Assistants in Social Work",
        url: "assets/socal2024.pdf"
      },
      {
        text: "SoCal NLP 2024",
        url: "https://socalnlp.github.io/symp24/index.html"
      }
    ],
  },
  {
    text: "📸 Featured in USC Viterbi Magazine!",
    month: "Dec",
    year: 2024,
    tags: ["press"],
    links: [
      {
        text: "USC Viterbi Magazine!",
        url: "https://magazine.viterbi.usc.edu/fall-2024/features/photo-essay-human-centered-the-usc-school-of-advanced-computing-in-23-images/"
      }
    ],
  },
  {
    text: "🎤 Invited talk at Google: Technology, AI, Society and Culture Team",
    month: "Feb",
    year: 2025,
    tags: ["talk"],
    links: [
      {
        text: "Google: Technology, AI, Society and Culture Team",
        url: "https://research.google/blog/responsible-ai-at-google-research-technology-ai-society-and-culture/"
      }
    ],
  },
  {
    text: "Passed my PhD Quals and I'm officially a PhD candidate :)",
    month: "Nov",
    year: 2024,
    tags: ["milestone"],
    links: [],
  },
  {
    text: "🎤 Invited to give a talk at the ISI Natural Language Seminar, check out the presentation here. Thank you ISI seminar organizers, it was wonderful meeting everyone!",
    month: "Nov",
    year: 2024,
    tags: ["talk"],
    links: [
      {
        text: "ISI Natural Language Seminar",
        url: "https://www.isi.edu/research-groups-nlg/nlg-seminars/"
      },
      {
        text: "here",
        url: "https://www.youtube.com/watch?v=j5unlGhB-I4"
      }
    ],
  },
  {
    text: "🎤 Invited talk at The National Alliance to End Homelessness",
    month: "Mar",
    year: 2025,
    tags: ["talk"],
    links: [
      {
        text: "The National Alliance to End Homelessness",
        url: "https://endhomelessness.org/"
      }
    ],
  },
  {
    text: "Excited to share that I will joining Bell Labs as an intern this Summer!",
    month: "Mar",
    year: 2025,
    tags: ["milestone"],
    links: [
      {
        text: "Bell Labs",
        url: "https://social-dynamics.net/newsletter/2024/"
      }
    ],
  },
  {
    text: "🏆 Received runner up for best oral presentation at ShowCAIS 2025 for our work: Uncovering Intervention Opportunities for Suicide Prevention with Language Model Assistants. Thank you so much at ShowCAIS!",
    month: "Apr",
    year: 2025,
    tags: ["award"],
    links: [
      {
        text: "ShowCAIS 2025",
        url: "https://sites.google.com/usc.edu/showcais-2025/awards?authuser=1"
      }
    ],
  },
  {
  text: "🏆 We won the Min Family Challenge for our idea: CaseFlo - an agentic AI platform that streamlines the workflow of case managers, enabling effective discovery of resources, reduced case worker burnout, and data-driven interventions for people experiencing homelessness.",
  month: "Apr",
  year: 2025,
  tags: ["award"],
  links: [
    {
      text: "Min Family Challenge",
      url: "https://viterbiinnovation.usc.edu/competitions-and-programs/mfc/"
    }
  ],
  },
  {
    text: "🏆 Grateful to have recieved the WiSE merit award for 2025, thank you so much to the WiSE committee.",
    month: "Apr",
    year: 2025,
    tags: ["award"],
    links: [
      {
        text: "WiSE merit award",
        url: "https://wise.usc.edu/programs/grants-and-awards/postdocs-and-phd/merit-award-for-current-doctoral-students/"
      }
    ],
  },
  {
    text: "📸 Got some USC media coverage for CaseFlo!",
    month: "May",
    year: 2025,
    tags: ["press"],
    links: [
      {
        text: "CaseFlo",
        url: "https://viterbischool.usc.edu/news/2025/05/caseflo-wins-the-2025-min-family-challenge/"
      }
    ],
  },
  {
    text: "🎤 Invited talk at the Homelessness Policy Research Institute at USC",
    month: "May",
    year: 2025,
    tags: ["talk"],
    links: [],
  },
  {
    text: "Excited to be serving as the Secretary of Women in Science and Engineering at USC!",
    month: "Jun",
    year: 2025,
    tags: ["milestone"],
    links: [],
  },
  {
    text: "Our work: Uncovering and Mitigating Covert Dialect Bias in LLMs, led my Claire J. Smerdon, was accepted for a poster presentation at EAAMO'25!",
    month: "Aug",
    year: 2025,
    tags: ["paper"],
    links: [],
  },
  {
    text: "Our work on Uncovering Intervention Opportunities for Suicide Prevention with Language Model Assistants was accepted for a poster presentation at EAAMO'25!",
    month: "Aug",
    year: 2025,
    tags: ["paper"],
    links: [],
  },
  {
    text: "🎤 Invited talk at National Alliance to End Homelessness x Center for Homelessness Impact: Using AI to End Homelessness. Link to talk",
    month: "Oct",
    year: 2025,
    tags: ["talk"],
    links: [
      {
        text: "Link to talk",
        url: "https://www.youtube.com/watch?v=m46-I-5lY8E&t=1s"
      }
    ],
  },
  {
    text: "🎤 Guest Lecture in AI for Sustainable Development CSCI-461 at USC on 'Human-AI Collaboration: LM Applications for Social Good'",
    month: "Oct",
    year: 2025,
    tags: ["talk"],
    links: [],
  },
  {
    text: "Our work on Uncovering Intervention Opportunities for Suicide Prevention with Language Model Assistants was selected for an oral presentation at the GenAI4Health workshop at NeurIPS!",
    month: "Oct",
    year: 2025,
    tags: ["talk"],
    links: [],
  },
  {
    text: "🏆 Voted Judge's Favorite, and receieved Honorable Mention in AI for Social Good Hackathon hosted by LA Tech Week x Lovable. Link to our tool!",
    month: "Nov",
    year: 2025,
    tags: ["award"],
    links: [
      {
        text: "Link to our tool!",
        url: "https://mosaic-ai-spotlight.lovable.app/"
      }
    ],
  },
  {
    text: "Our work on 'Are We Automating the Joy Out of Work? Designing AI to Augment Work, Not Meaning' was accepted to CHI'2026! Link to paper.",
    month: "January",
    year: 2026,
    tags: ["paper"],
    links: [
      {
        text: "Link to paper.",
        url: "https://jr4fs.github.io/assets/2025_AIJobs_Jaspreet-B015Xw8s.pdf"
      }
    ],
  },

];

// sort updates by date
updates.sort((a, b) => {
  if (a.year === b.year) {
    // use months array to sort by month
    return months.indexOf(b.month) - months.indexOf(a.month);
  }
  return b.year - a.year;
});
export const allUpdates = updates;
