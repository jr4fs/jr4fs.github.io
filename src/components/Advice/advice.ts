import { Link } from "../Updates/updates";

export type Tip = {
  text: string;
  links?: Link[];
  bold?: string[];
};

export type AdviceSection = {
  title: string;
  emoji: string;
  tips: Tip[];
};

export const advice: AdviceSection[] = [
  {
    title: "Is Grad School for Me?",
    emoji: "🤔",
    tips: [
      {
        text: "Probably the number one piece of advice I would give to those considering grad school is to try out research! Many institutions offer research opportunities to undergrads during the school year or summer. You could also consider participating in a REU or checking out industry research internships offered by companies such as Microsoft and Google.",
        links: [
          {
            text: "REU",
            url: "https://www.nsf.gov/crssprgm/reu/list_result.jsp?unitid=5049",
          },
          {
            text: "Microsoft",
            url: "https://www.microsoft.com/en-us/research/academic-program/undergraduate-research-internship-computing/",
          },
          {
            text: "Google",
            url: "https://www.google.com/about/careers/applications/jobs/results/?degree=BACHELORS&distance=50&employment_type=INTERN&jex=ENTRY_LEVEL&q=research%20bs",
          },
        ],
        bold: ["try out research!"],
      },
      {
        text: "Grad school is definitely not for everyone — like everything, there are pros and cons. But if you're excited by research and want to dive deeper into a subfield of CS, maybe give it a shot!",
      },
      {
        text: "If you want something less that's less of a commitment, you could also look into Ph.D. vs. Masters programs. If costs are a concern for getting a master's degree, there are some schools like Princeton that offer fully funded CS masters programs.",
        links: [
          {
            text: "Ph.D. vs. Masters",
            url: "https://www.scribbr.com/graduate-school/masters-vs-phd/#:~:text=The%20two%20most%20common%20types,a%20career%20in%20academic%20research",
          },
          {
            text: "Princeton",
            url: "https://www.cs.princeton.edu/grad/masters-degree",
          },
        ],
      },
    ],
  },
  {
    title: "Preparing to Apply",
    emoji: "🗒️",
    tips: [
      {
        text: "As you prepare to apply for grad school, again I'd say one of the most important things to focus on is simply gaining research experience. Quality is definitely more important than quantity, but if you can, it might be worthwhile to try different kinds of research (e.g., in different subfields or in academia vs. industry).",
      },
      {
        text: "Publications are helpful, but by no means necessary (especially if you're coming directly out of undergrad), so definitely don't worry if you don't have any at the time of applying! After all, the main purpose of undergrad research is gaining experience and testing out your own interest in pursuing academia further.",
      },
      {
        text: "Research experiences can also help you network and introduce you to potential letter writers for grad school. Strong relationships make the best recommendation letters too!",
      },
      {
        text: "When you start making your list of schools, be picky. You don't want to over-apply because applications are pretty costly, and each application is a huge time investment as well (for reference, I applied to 9 programs). Make sure to consider location, especially for Ph.D. programs, because you'll be there for a while, and it's important to only apply to schools that have research you're genuinely excited by. I would also ensure that each school you apply to has at least 2-3 PIs you'd be interested in working with, just in case of lack of funding, incompatible working styles, etc. Some PIs may explicitly state on their websites whether they are recruiting students in the current application cycle.",
        bold: ["9 programs", "2-3 PIs"],
      },
      {
        text: "Make sure to reach out to your letter writers early too (most programs require 3 recommendation letters). They, along with your other professors, mentors, etc. will be a great source of support and advice throughout the application process.",
        bold: ["3 recommendation letters"],
      },
    ],
  },
  {
    title: "Actually Applying",
    emoji: "✏️",
    tips: [
      {
        text: "The application process is definitely long and stressful, but you got this and you're not alone. Personally, I found that venting to friends really helped (especially if they're going through a similar process).",
      },
      {
        text: "Have a system, like a spreadsheet, to keep track of all your different application portals and deadlines (most of mine fell between early to mid December). Unfortunately, there's no common app equivalent for grad school apps.",
        bold: ["early to mid December"],
      },
      {
        text: "While working on your applications, you can consider emailing potential PIs who'd you like to work with. I don't think this is a necessary step, but it might help in some situations to establish that connection first. Some PIs don't like to be contacted too early or at all, so be sure to check their website for specific instructions before you do so. I also wouldn't worry about trying to email all the advisors you're applying to. Start with your top few, and if you have time, you can always reach out to more. Here are some tips for emailing potential PIs. If you do decide to send out emails, don't stress if you don't get a response — remember, all faculty are extremely busy people!",
        links: [
          {
            text: "tips",
            url: "https://lucklab.ucdavis.edu/blog/2018/9/17/emailing-faculty",
          },
        ],
      },
      {
        text: 'The statement of purpose (SOP) is undoubtedly one of the most important parts of your application. This is where you have the opportunity to share your research interests and tell your story as a researcher. One of the most helpful pieces of advice I received while writing my SOP is to have a mission statement, or some sort of unifying message that ties together your research experiences into a cohesive narrative. There\'s no "right" way or standard template for writing SOPs, but it can help to look at some examples when getting started. Here is one example that I found particularly helpful, and definitely reach out to your friends, mentors, and professors too.',
        links: [
          {
            text: "one example",
            url: "https://cs.stanford.edu/~nfliu/files/phd_sop/nfliu_phd_sop.pdf",
          },
        ],
        bold: ["mission statement"],
      },
      {
        text: "Some schools may also have specific instructions for the SOP (e.g., differing word limits, content suggestions, etc.), so be sure to check and adjust your statement accordingly for each institution you apply for.",
      },
      {
        text: "Get lots of feedback on your SOP. It's most likely going to go through several rounds of revision, and that's not a bad thing! Having multiple people read over your SOP is a good idea, but definitely don't overdo it. At the end of the day, make sure your voice still shines through and remember that it's always up to you whether you incorporate the feedback you receive.",
      },
      {
        text: "There are also many free application review programs at different institutions. In most cases, you will be paired with a current Ph.D. student who will help look over your SOP / application and answer any questions you have about applying to grad school. These links will likely be posted on the application/admissions pages when they become available. Signing up early is advised as well.",
      },
      {
        text: "I'm also happy to share my own SOP as an example or provide general feedback on your SOP (depending on my availability). Feel free to email me if you are interested.",
        links: [
          {
            text: "email me",
            url: "mailto:catherineyeh@g.harvard.edu",
          },
        ],
      },
      {
        text: "During the application process, some students also apply for scholarships and fellowships (e.g., NSF GRFP). Again, this is definitely not a necessary step (to my knowledge, most CS Ph.D. programs in the US come with funding), but it can be helpful.",
        links: [
          {
            text: "NSF GRFP",
            url: "https://www.nsfgrfp.org/",
          },
        ],
      },
    ],
  },
  {
    title: "The Interviews",
    emoji: "😬",
    tips: [
      {
        text: "Some, but not all, programs conduct interviews with their top candidates before making a final decision. If you've made it this far, you should be very proud and make sure to give yourself a pat on the back! But also, don't be discouraged if you don't receive an interview request, and remember, programs may interview at different times (for me, interviews fell mostly between mid-January to early February). There may also be multiple rounds of interviews, although this was pretty uncommon in my experience.",
        bold: ["mid-January to early February"],
      },
      {
        text: "The best way to prepare in my opinion is to practice talking about your experiences and interests. Many of my interviews were similar to the behavioral interviews I had encountered in previous internship searches.",
      },
      {
        text: "Some friends and I also compiled a list of sample questions if you'd like somewhere to start. Keep in mind that I applied for mostly HCI and visualization focused labs.",
        links: [
          {
            text: "sample questions",
            url: "https://docs.google.com/document/d/1WzqPHwK4bXCt8L_FARaQCaNzBywu4FvYTG9aYIlGLOU/edit?usp=sharing",
          },
        ],
      },
      {
        text: "Remember, you got this! It's cheesy, but just be yourself, and if it's the right fit, both you and your PI will feel it. The best interviews feel more like a conversation rather than a formal Q + A.",
      },
    ],
  },
  {
    title: "Hearing Back",
    emoji: "🙀",
    tips: [
      {
        text: "Truly, the most important thing to remember when waiting to hear back is just to be patient. Programs give out decisions at different times, but I know how stressful and nerve-wracking waiting is (especially if you know others have already started hearing back).",
      },
      {
        text: "It's always hard getting bad news, but if you do receive any, remember that it's not you! There are so many factors involved that are out of your control and a large part of these decisions is up to luck and chance — just like any job or school application.",
      },
    ],
  },
  {
    title: "I Got In... Now What?",
    emoji: "🎉",
    tips: [
      {
        text: "First of all, huge congrats!!! Make sure to take some time to relax and celebrate! You did it!",
        bold: ["huge congrats!!!"],
      },
      {
        text: "If you're fortunate enough to receive multiple offers, take your time when deciding on a school. It's a big decision and you want to make sure it's the right one for you. Talk to your potential PIs and other grad students in each lab / school to get a better sense of what your Ph.D. experience might look like. Visit in person if you can too — physically being in a place definitely helped me make a decision.",
      },
      {
        text: "It's tempting to weigh factors like ranking more heavily than others, and while they are certainly worth considering, remember that those numbers are not everything. A top institution won't necessarily guarantee a better grad school experience, and every school has its pros and cons.",
      },
      {
        text: "Funding is something to consider too (and definitely worth asking about). Some institutions guarantee funding for your whole Ph.D. while others don't. Your stipend will also likely vary from program to program. This where applying for fellowships can help too.",
      },
      {
        text: "At the end of the day, listen to your gut — it's usually right! And know that things will work out, regardless of where you end up. If you're really stuck, try this coin flip trick.",
        links: [
          {
            text: "coin flip trick",
            url: "https://kevineikenberry.com/personal-professional-development/need-to-make-a-decision-flip-a-coin/",
          },
        ],
      },
      {
        text: "Also, for any offers you turn down, make sure to write a polite email to those PIs and thank them for their time + consideration.",
      },
    ],
  },
];
