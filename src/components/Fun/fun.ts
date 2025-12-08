export type FunItem = {
  type: string;
  img: string;
  link: string;
};

// import images
import travel from "../../images/fun/travel.jpeg";
import art from "../../images/fun/art.jpeg";
import food from "../../images/fun/food.png";
import bujo from "../../images/fun/bujo.png";

export const funItems: FunItem[] = [
  {
    type: "Travel",
    img: travel,
    link: "https://catherinesyeh.github.io/old-site/travel",
  },
  {
    type: "Art",
    img: art,
    link: "https://catherinesyeh.github.io/old-site/art",
  },
  {
    type: "Bullet Journal",
    img: bujo,
    link: "https://www.instagram.com/pandacubcake",
  },
  {
    type: "Food",
    img: food,
    link: "https://www.instagram.com/catherines_foodblog",
  },
];

export type Resource = {
  title: string;
  link: string;
  external?: boolean;
};

export const resources: Resource[] = [
  {
    title: "Applying for a Ph.D.",
    link: "/applying-for-a-phd",
  },
];

export type Project = {
  title: string;
  img: string;
  year: number;
  demo?: string;
  code?: string;
  poster?: string;
  presentation?: string;
};

// import images
import bkt from "../../images/projects/bkt-balloon.png";
import fvr from "../../images/projects/find-vote-rate.png";
import mv from "../../images/projects/mv.png";
import digi from "../../images/projects/digiweave.jpeg";

// import files
import bkt_poster from "../../files/projects/bkt-poster.pdf";
import fvr_pres from "../../files/projects/find-vote-rate.pdf";
import mv_pres from "../../files/projects/mv-presentation.pdf";

const projects: Project[] = [
  {
    title: "BKT Balloon Simulator + Parameter Visualization",
    img: bkt,
    year: 2019,
    demo: "https://catherinesyeh.github.io/bkt-balloon/",
    code: "https://github.com/catherinesyeh/bkt-balloon/",
    poster: bkt_poster,
  },
  {
    title: "Find-Vote-Rate: Crowdsourcing Interior Design",
    img: fvr,
    year: 2020,
    presentation: fvr_pres,
  },
  {
    title: "Motion Planning for Monument Valley",
    img: mv,
    year: 2020,
    presentation: mv_pres,
  },
  {
    title: "DigiWeave: Friendship Bracelets 2.0",
    img: digi,
    year: 2020,
    demo: "https://catherinesyeh.github.io/digidemo/",
    code: "https://github.com/catherinesyeh/digiweave/",
  },
];

// sort projects by year in descending order

projects.sort((a, b) => b.year - a.year);

export const my_projects = projects;
