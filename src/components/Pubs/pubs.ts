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
// import automatingJobs from "../../images/pubs/automating_jobs.png";
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

const pubs: Pub[] = [
{
  title: "Uncovering Intervention Opportunities for Suicide Prevention with Language Model Assistants",
  author:
    "Jaspreet Ranjit, Hyundong J. Cho, Claire J. Smerdon, Yoonsoo Nam, Myles Phung, Jonathan May, John R. Blosnich, Swabha Swayamdipta",
  venue: "GenAI4Health NeurIPS, EAAMO, ShowCAIS",
  image: nvdrs,
  summary:
    "We show that language models can help researchers label death narratives by matching expert annotations 85% of the time and pointing out cases that contain discrepancies. We also introduce a human-in-the-loop method that accelerates the creation of new annotation guidelines without losing quality.",
  paper: "https://arxiv.org/abs/2508.18541",
  code: "https://github.com/dill-lab/interventions_lm_assistants",
  award: "Runner up for best doctoral oral presentation at ShowCAIS 2025",
  year: 2025,
  tags:[]
},

{
  title:
    "OATH-Frames: Characterizing Online Attitudes Towards Homelessness via LLM Assistants",
  author:
    "Jaspreet Ranjit, Brihi Joshi, Rebecca Dorn, Laura Petry, Olga Koumoundouros, Jayne Bottarini, Peichen Liu, Eric Rice, Swabha Swayamdipta",
  venue: "Proceedings of EMNLP",
  image: oath,
  summary:
    "We create OATH-Frames, a structured way to label attitudes toward homelessness, and show that GPT-4 can help experts annotate these frames much faster with minimal loss in accuracy. Using these labels, we analyze 2.4M social media posts and uncover regional and group-specific differences in how people talk about homelessness.",
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
    "We present a framework that measures how visual recognition biases change before and after fine-tuning by testing models on carefully designed image sets. Our analysis shows that supervised models retain more pretraining bias, large finetuning datasets introduce new biases, and bias transfer depends strongly on the finetuning setup.",
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
    "A discussion of how algorithmic biases manifest in search and recommendation pipelines at scale, and methods for detecting and mitigating bias in production systems.",
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
    "A technical deep dive into designing anchorless object detection methods for 3D point cloud data during a machine learning internship at Expedition Technology.",
  paper:
    "https://www.exptechinc.com/my-summer-at-expedition-technology-as-a-machine-learning-intern/",
  year: 2019,
  tags:[]
},

];

// sort publications by year
pubs.sort((a, b) => b.year - a.year);

export const publications = pubs;
