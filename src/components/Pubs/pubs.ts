// publication types
export type Tag = "vis" | "ai" | "hci" | "misc";

export type Pub = {
  title: string;
  author: string;
  venue: string;
  year: number;
  image: string;
  tags: Tag[];
  summary?: string;
  paper?: string;
  paper2?: string;
  demo?: string;
  code?: string;
  project?: string;
  video?: string;
  poster?: string;
  award?: string;

};

// import images from dir
import automatingJobs from "../../images/pubs/automating_jobs.png";
// import brownianMotion from "../../images/pubs/brownian-motion.gif";
// import expeditionLogo from "../../images/pubs/expedition_logo.png";
import expedition from "../../images/pubs/expedition.png";
// import goddard from "../../images/pubs/goddard.png";
// import mist from "../../images/pubs/mist.png";
// import nasa from "../../images/pubs/nasa.png";
import nvdrs from "../../images/pubs/nvdrs.png";
import oath from "../../images/pubs/oath.png";
import sce2vec from "../../images/pubs/sce2vec.png";
import variationGenderBiases from "../../images/pubs/variation_gender_biases.png";
import vimeo from "../../images/pubs/vimeo.png";
// import automatingPaper from "../../../public/assets/2025_AIJobs_Jaspreet.pdf"
import covertPaper from "../../../public/assets/covert_paper.pdf"
// import agentsPaper from "../../../public/assets/agents_free.pdf"
import covertBiases from "../../images/pubs/Figure1_COV_updated.png";
import agents from "../../images/pubs/agents_free.png";
import wildlife from "../../images/pubs/wildlife.png";
import coda from "../../images/pubs/CoDA.png";

const pubs: Pub[] = [
{
  title: "CoDA: A Human-LM Collaborative Codebook Development Assistant for Domain-Specific Text Annotation",
  author:
    "Jaspreet Ranjit, Swaminathan Chellappa, Augusto Rivas Costante, Chandan Manjunath, Laura Onasch-Vera, Hailey Winetrobe Nadel, Eric Rice, and Swabha Swayamdipta",
  venue: "EMNLP System Demo",
  image: coda,
  summary:
    "We present CoDA, an open-source human-LM collaborative codebook development assistant that enables scalable annotation of new variables in unstructured text. CoDA collaborates with domain experts to iteratively develop codebooks through targeted review of incorrect language model predictions and incorporation of expert feedback into the evolving codebook. CoDA produces codebooks that achieve performance comparable to expert codebooks while reducing development time from several weeks to approximately two hours and using 5× fewer manually annotated examples.",
  // paper: "https://ajph.aphapublications.org/doi/10.2105/AJPH.2026.308618",
  year: 2026,
  tags:[]
},
{
  title: "Mortality Research With Artificial Intelligence Tools: Applying Language Models to the National Violent Death Reporting System Suicide Narratives, 2003–2023  ",
  author:
    "John R. Blosnich, Jaspreet Ranjit, and Swabha Swayamdipta",
  venue: "American Journal of Public Health",
  image: nvdrs,
  summary:
    "Suicide deaths in the United States have increased for decades, highlighting the need for new approaches to prevention research. We apply language models to hundreds of thousands of suicide death narratives collected by the National Violent Death Reporting System between 2003 and 2023. Our approach makes it possible to analyze detailed circumstances surrounding these deaths at a scale that manual review cannot achieve, helping researchers uncover patterns and insights that structured data alone may miss.",
  paper: "https://ajph.aphapublications.org/doi/10.2105/AJPH.2026.308618",
  year: 2026,
  tags:[]
},

{
  title: "Expert-in-the-Loop LLM Pipeline for Detecting the Illegal Wildlife Trade of Pangolins Online",
  author:
    "Hannah Murray, Jaspreet Ranjit, Trent Kobielusz, Jeena Mahajan, Swaminathan Chellappa, Augusto Rivas Costante and Bistra Dilkina",
  venue: "AI Systems for the Environment (AISE)",
  image: wildlife,
  summary:
    "Illegal wildlife traffickers use coded language, species nicknames, and emojis to evade online detection. We introduce a human-in-the-loop pipeline combining expert annotation with LLM-assisted codebook generation to identify covert trafficking posts. In a case study of roughly 240,000 pangolin-related posts across social media platforms, our approach increased recall from 3.2% with a standard toolkit to 78.4%, demonstrating the promise of structured human–LLM collaboration for detecting illegal wildlife trade.",
  paper: "https://www.dropbox.com/scl/fi/lqrzu7xdgmqslsiygx4mv/1_Expert-in-the-Loop-LLM-Pipeline-for-Detecting-the-Illegal-Wildlife-Trade-of-Pangolins-Online.pdf?rlkey=1c3fijg7b8g8m7n4vf726uffd&st=grw2o9hz&e=1&dl=0",
  year: 2026,
  tags:[]
},
{
  title: "Will AI Agents Free Us From Meaningless Work? A Human-Centered Analysis",
  author:
    "Davide Ghia, Jaspreet Ranjit, Tania Cerquitelli, Daniele Quercia",
  venue: "CHIWORK",
  image: agents,
  summary:
    "Workers may prefer AI to automate specific tasks rather than entire jobs, especially those they perceive as meaningless or “bullshit.” Using ratings from 202 workers across 171 workplace tasks, the study validates a measure of perceived bullshitness and finds that tasks rated as more bullshit are much more likely to be seen as suitable for AI delegation. These tasks are also viewed as requiring less human oversight, suggesting that worker preferences for automation align with perceptions of where AI can be most effectively applied.",
  paper: "https://arxiv.org/abs/2606.12430",
  year: 2026,
  tags:[]
},


{
  title: "Side-by-side Comparison Amplifies Dialect Bias in Language Models",
  author:
    "Kritee Kondapally, Claire J. Smerdon, Pooja Chetan Patel, Ogheneyoma Akoni, Jevon Torres, Jaspreet Ranjit, Matthew Finlayson, Swabha Swayamdipta ",
  venue: "In Proceedings @FAccT",
  image: covertBiases,
  summary:
    "Language models can exhibit covert dialect bias, systematically associating negative stereotypes with certain dialects. We measure this bias by evaluating how models assign stereotypical traits to intent-equivalent tweets in Standard American English (SAE) and African American Vernacular English (AAVE). We find that bias is amplified when tweets are compared side-by-side and further worsens when dialect labels are made explicit. We introduce counterfactual fairness fine-tuning to mitigate this bias for some traits.",
  paper: covertPaper,
  code: "https://dill-lab.github.io/dialect_bias_llms/",
  award: "Best Responsible AI Impact Award at SoCal AI Responsibility Summit'25",
  year: 2026,
  tags:[]
},

{
  title: "Are We Automating the Joy Out of Work? Designing AI to Augment Work, Not Meaning",
  author:
    "Jaspreet Ranjit, Ke Zhou, Swabha Swayamdipta, Daniele Quercia",
  venue: "In Proceedings @CHI",
  image: automatingJobs,
  summary:
    "Prior work has mapped which workplace tasks are exposed to AI, but less is known about whether workers perceive these tasks as meaningful or as busywork. We surveyed workers and developers on a representative sample of 171 tasks and use language models to scale ratings to 10,131 tasks across all U.S. computer-assisted tasks. Worryingly, we find that tasks that workers associate with a sense of agency or happiness may be disproportionately exposed to AI. We also document HCI design gaps between workers and developers and propose a  five-part research agenda explicitly centering AI design on meaningful work and worker needs.",
  paper: "https://arxiv.org/abs/2603.14963",
  code: "https://social-dynamics.net/ai-impact/automating-joy/",
  year: 2026,
  tags:[]
},

{
  title: "Uncovering Intervention Opportunities for Suicide Prevention with Language Model Assistants",
  author:
    "Jaspreet Ranjit, Hyundong J. Cho, Claire J. Smerdon, Yoonsoo Nam, Myles Phung, Jonathan May, John R. Blosnich, Swabha Swayamdipta",
  venue: "In Proceedings at @ACL'26, GenAI4Health @NeurIPS'25, EAAMO'25, ShowCAIS'25",
  image: nvdrs,
  summary:
    "We use language models to help suicide-prevention experts extract data-driven insights and develop new interventions using death narratives. We find that LMs can serve as effective assistants in validating expert annotations (85% agreement), and when they disagree, expert review finds our LM assistant surfaces annotation errors in 38% of cases. We also introduce a human-in-the-loop method that helps experts build and refine new annotation guidelines accelerating the process from weeks to hours in a real world case study. ",
  paper: "https://arxiv.org/abs/2508.18541",
  code: "https://github.com/dill-lab/interventions_lm_assistants",
  award: "Runner up for best doctoral oral presentation at ShowCAIS 2025",
  year: 2026,
  tags:[]
},

{
  title:
    "OATH-Frames: Characterizing Online Attitudes Towards Homelessness via LLM Assistants",
  author:
    "Jaspreet Ranjit, Brihi Joshi, Rebecca Dorn, Laura Petry, Olga Koumoundouros, Jayne Bottarini, Peichen Liu, Eric Rice, Swabha Swayamdipta",
  venue: "In Proceedings of EMNLP",
  image: oath,
  summary:
    "Public attitudes towards key societal issues (e.g., homelessness), are of immense value in policy and reform efforts, yet challenging to understand at scale. We introduce a framing typology: Online Attitudes Towards Homelessness (OATH) Frames: nine hierarchical frames capturing critiques, responses and perceptions. We release annotations with varying degrees of assistance from language models, with immense benefits in scaling: 6.5x speedup in annotation time while only incurring a 3 point F1 reduction in performance with respect to the domain experts.",
  paper: "https://arxiv.org/abs/2406.14883",
  code: "https://github.com/dill-lab/oath-frames",
  project: "https://dill-lab.github.io/oath-frames/",
  award:
    "Outstanding Paper Award @ EMNLP 2024; Best Poster Award @ ShowCAIS 2024",
  year: 2024,
  tags:[]
},

{
  title:
    "Scenario2Vector: Scenario Description Language Based Embeddings for Traffic Situations",
  author: "Aron Harder, Jaspreet Ranjit, Madhur Behl",
  venue: "ACM/IEEE International Conference on Cyber-Physical Systems (ICCPS '21)",
  image: sce2vec,
  summary:
    'We introduce Scenario2Vector, a representation that breaks down traffic situations into key components so autonomous vehicles can be compared using meaningful similarity scores. Using our new human-ranked dataset, Scenario2Vector outperforms caption-based baselines and enables more reliable evaluation across driving scenarios.',
  paper: "https://doi.org/10.1145/3450267.3450544",
  year: 2021,
  tags:[]
},

{
  title:
    "Variation of Gender Biases in Visual Recognition Models Before and After Finetuning",
  author:
    "Jaspreet Ranjit, Tianlu Wang, Baishakhi Ray, Vicente Ordonez",
  venue:
    "Workshop on Algorithmic Fairness through the Lens of Time at NeurIPS",
  image: variationGenderBiases,
  summary:
    "We present a framework that measures how gender biases change before and after fine-tuning visual recognition models. Our analysis shows that supervised models retain more pretraining bias, whereas models finetuned on larger datasets introduce more biases, and bias transfer depends strongly on the finetuning setup.",
  paper: "https://arxiv.org/abs/2303.07615",
  year: 2023,
  tags:[]
},

{
  title: "Uncovering Bias in Search and Recommendations",
  author: "Jaspreet Ranjit",
  venue: "Vimeo Engineering Blog",
  image: vimeo,
  summary:
    "We study how algorithmic biases manifest in search and recommendation pipelines at scale, and propose methods for detecting and mitigating bias in Learning to Rank systems.",
  paper:
    "https://medium.com/vimeo-engineering-blog/uncovering-bias-in-search-and-recommendations-751b01d1c874",
  year: 2021,
  tags:[]
},

{
  title: "Anchorless Object Detection for 3D Point Cloud Object Detection",
  author: "Jaspreet Ranjit, Andrew Draganov",
  venue: "Expedition Technology Blog",
  image: expedition,
  summary:
    "We design anchorless object detection methods for 3D point cloud data using CenterNet and VoxelNet Architectures.",
  paper:
    "https://www.exptechinc.com/my-summer-at-expedition-technology-as-a-machine-learning-intern/",
  year: 2019,
  tags:[]
},

];

// sort publications by year
pubs.sort((a, b) => b.year - a.year);

export const publications = pubs;
