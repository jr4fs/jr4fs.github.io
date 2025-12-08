export type TravelInfo = {
  city: string;
  country: string;
  month: string;
  year: number;
  image: string;
  link: string;
  logo?: string;
};

import { months } from "../Updates/updates";

// 2017
import kaanapali from "../../images/travel/kaanapali.jpg";

// 2018
import la from "../../images/travel/la.jpg";
import london from "../../images/travel/london.jpeg";
import vienna from "../../images/travel/vienna.jpeg";
import salzburg from "../../images/travel/salzburg.jpeg";
import hallstatt from "../../images/travel/hallstatt.jpeg";
import munich from "../../images/travel/munich.jpeg";
import schwangau from "../../images/travel/schwangau.jpeg";

// 2019
import amsterdam from "../../images/travel/amsterdam.jpeg";
import brugge from "../../images/travel/brugge.jpeg";
import brussels from "../../images/travel/brussels.jpeg";
import paris from "../../images/travel/paris.jpeg";
import versailles from "../../images/travel/versailles.jpeg";
import vancouver from "../../images/travel/vancouver.jpg";

// 2021
import kaanapali2021 from "../../images/travel/kaanapali-2021.jpeg";

// 2022
import kaanapali2022 from "../../images/travel/kaanapali-2022.jpeg";
import vancouver2022 from "../../images/travel/vancouver-2022.jpeg";

// 2023
import newport from "../../images/travel/newport.jpeg";
import lucerne from "../../images/travel/lucerne.jpeg";
import lauterbrunnen from "../../images/travel/lauterbrunnen.jpeg";
import interlaken from "../../images/travel/interlaken.jpeg";
import lausanne from "../../images/travel/lausanne.jpeg";
import annecy from "../../images/travel/annecy.jpeg";
import geneva from "../../images/travel/geneva.jpeg";
import melbourne from "../../images/travel/melbourne.jpg";
import vis2023 from "../../images/logos/vis2023.svg";
import kaanapali2023 from "../../images/travel/kaanapali-2023.jpg";

// 2024
import sf from "../../images/travel/sf.jpg";

const travelInfo: TravelInfo[] = [
  {
    city: "Kaanapali, HI",
    country: "USA",
    month: "Dec",
    year: 2017,
    link: "https://www.google.com/maps/place/Kaanapali,+HI",
    image: kaanapali,
  },
  {
    city: "Los Angeles, CA",
    country: "USA",
    month: "Feb",
    year: 2018,
    link: "https://www.google.com/maps/place/Los+Angeles,+CA",
    image: la,
  },
  {
    city: "Vienna",
    country: "Austria",
    month: "Jun",
    year: 2018,
    link: "https://www.google.com/maps/place/Vienna,+Austria",
    image: vienna,
  },
  {
    city: "London",
    country: "UK",
    month: "Jun",
    year: 2018,
    link: "https://www.google.com/maps/place/London,+UK",
    image: london,
  },
  {
    city: "Schwangau",
    country: "Germany",
    month: "Jul",
    year: 2018,
    link: "https://www.google.com/maps/place/Schwangau,+Germany",
    image: schwangau,
  },
  {
    city: "Munich",
    country: "Germany",
    month: "Jul",
    year: 2018,
    link: "https://www.google.com/maps/place/Munich,+Germany",
    image: munich,
  },
  {
    city: "Hallstatt",
    country: "Austria",
    month: "Jul",
    year: 2018,
    link: "https://www.google.com/maps/place/Hallstatt,+Austria",
    image: hallstatt,
  },
  {
    city: "Salzburg",
    country: "Austria",
    month: "Jul",
    year: 2018,
    link: "https://www.google.com/maps/place/Salzburg,+Austria",
    image: salzburg,
  },
  {
    city: "Versailles",
    country: "France",
    month: "Aug",
    year: 2019,
    link: "https://www.google.com/maps/place/Versailles,+France",
    image: versailles,
  },
  {
    city: "Paris",
    country: "France",
    month: "Aug",
    year: 2019,
    link: "https://www.google.com/maps/place/Paris,+France",
    image: paris,
  },
  {
    city: "Brussels",
    country: "Belgium",
    month: "Aug",
    year: 2019,
    link: "https://www.google.com/maps/place/Brussels,+Belgium",
    image: brussels,
  },
  {
    city: "Brugge",
    country: "Belgium",
    month: "Aug",
    year: 2019,
    link: "https://www.google.com/maps/place/Brugge,+Belgium",
    image: brugge,
  },
  {
    city: "Amsterdam",
    country: "Netherlands",
    month: "Aug",
    year: 2019,
    link: "https://www.google.com/maps/place/Amsterdam,+Netherlands",
    image: amsterdam,
  },
  {
    city: "Vancouver",
    country: "Canada",
    month: "Dec",
    year: 2019,
    link: "https://www.google.com/maps/place/Vancouver",
    image: vancouver,
  },
  {
    city: "Kaanapali, HI",
    country: "USA",
    month: "Dec",
    year: 2021,
    link: "https://www.google.com/maps/place/Kaanapali,+HI",
    image: kaanapali2021,
  },
  {
    city: "Vancouver",
    country: "Canada",
    month: "Jul",
    year: 2022,
    link: "https://www.google.com/maps/place/Vancouver",
    image: vancouver2022,
  },
  {
    city: "Kaanapali, HI",
    country: "USA",
    month: "Dec",
    year: 2022,
    link: "https://www.google.com/maps/place/Kaanapali,+HI",
    image: kaanapali2022,
  },
  {
    city: "Newport, RI",
    country: "USA",
    month: "May",
    year: 2023,
    link: "https://www.google.com/maps/place/Newport,+RI",
    image: newport,
  },
  {
    city: "Lucerne",
    country: "Switzerland",
    month: "Aug",
    year: 2023,
    link: "https://www.google.com/maps/place/Lucerne,+Switzerland",
    image: lucerne,
  },
  {
    city: "Lauterbrunnen",
    country: "Switzerland",
    month: "Aug",
    year: 2023,
    link: "https://www.google.com/maps/place/Lauterbrunnen,+Switzerland",
    image: lauterbrunnen,
  },
  {
    city: "Interlaken",
    country: "Switzerland",
    month: "Aug",
    year: 2023,
    link: "https://www.google.com/maps/place/Interlaken,+Switzerland",
    image: interlaken,
  },
  {
    city: "Lausanne",
    country: "Switzerland",
    month: "Aug",
    year: 2023,
    link: "https://www.google.com/maps/place/Lausanne,+Switzerland",
    image: lausanne,
  },
  {
    city: "Annecy",
    country: "France",
    month: "Aug",
    year: 2023,
    link: "https://www.google.com/maps/place/Annecy,+France",
    image: annecy,
  },
  {
    city: "Geneva",
    country: "Switzerland",
    month: "Aug",
    year: 2023,
    link: "https://www.google.com/maps/place/Geneva,+Switzerland",
    image: geneva,
  },
  {
    city: "Melbourne",
    country: "Australia",
    month: "Oct",
    year: 2023,
    image: melbourne,
    link: "https://www.google.com/maps/place/Melbourne+VIC,+Australia",
    logo: vis2023,
  },
  {
    city: "Kaanapali, HI",
    country: "USA",
    month: "Dec",
    year: 2023,
    link: "https://www.google.com/maps/place/Kaanapali,+HI",
    image: kaanapali2023,
  },
  {
    city: "San Francisco, CA",
    country: "USA",
    month: "Aug",
    year: 2024,
    link: "https://www.google.com/maps/place/San+Francisco,+CA",
    image: sf,
  },
];

// sort by year, then month
travelInfo.sort((a, b) => {
  if (a.year === b.year) {
    // use months array to sort by month
    return months.indexOf(b.month) - months.indexOf(a.month);
  }
  return b.year - a.year;
});

export const travelCards = travelInfo;

// places I've lived
export type Rec = {
  rec: string;
  link: string;
};

export type LivedInfo = {
  city: string;
  state: string;
  image: string;
  link: string;
  recs: Rec[];
};

import seattle from "../../images/lived/seattle.jpeg";
import williamstown from "../../images/lived/williamstown.jpg";
import boston from "../../images/lived/boston.png";

export const livedInfo: LivedInfo[] = [
  {
    city: "Seattle",
    state: "WA",
    image: seattle,
    link: "https://www.google.com/maps/place/Seattle,+WA",
    recs: [
      {
        rec: "Chihuly Garden + Glass",
        link: "https://www.chihulygardenandglass.com/",
      },
      {
        rec: "UW Cherry Blossoms",
        link: "https://www.washington.edu/cherryblossoms/",
      },
      {
        rec: "Japanese Garden",
        link: "https://www.seattlejapanesegarden.org/",
      },
      {
        rec: "San Juan Islands",
        link: "https://www.visitsanjuans.com/",
      },
    ],
  },
  {
    city: "Williamstown",
    state: "MA",
    image: williamstown,
    link: "https://www.google.com/maps/place/Williamstown,+MA",
    recs: [
      {
        rec: "The Clark",
        link: "https://www.clarkart.edu/",
      },
      {
        rec: "Mass MoCA",
        link: "https://massmoca.org/",
      },
    ],
  },
  {
    city: "Boston",
    state: "MA",
    image: boston,
    link: "https://www.google.com/maps/place/Boston,+MA",
    recs: [
      {
        rec: "MFA",
        link: "https://www.mfa.org/",
      },
      {
        rec: "Isabella Stewart Gardner Museum",
        link: "https://www.gardnermuseum.org/",
      },
      {
        rec: "Public Garden",
        link: "https://www.boston.gov/parks/public-garden",
      },
      {
        rec: "Public Library",
        link: "https://www.bpl.org/art-architecture/",
      },
    ],
  },
];
