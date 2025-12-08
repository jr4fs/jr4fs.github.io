export type ArtInfo = {
  title: string;
  medium: string;
  year: number;
  image: string;
};

export const emptyArtCard: ArtInfo = {
  title: "",
  medium: "",
  year: 0,
  image: "",
};

// canvas
import lilies from "../../images/art/canvas/lily.jpg";
import fall from "../../images/art/canvas/fall.jpg";
import ballet from "../../images/art/canvas/ballet.jpg";
import flowers from "../../images/art/canvas/flowers.jpg";
import chasingcolor from "../../images/art/canvas/chasingcolor.jpg";
import sargent from "../../images/art/canvas/sargent.jpg";
import bridge from "../../images/art/canvas/bridge.jpg";
import poppy from "../../images/art/canvas/poppy.jpg";
import mist from "../../images/art/canvas/mist.jpg";
import totoro from "../../images/art/canvas/totoro.jpg";
import enchant from "../../images/art/canvas/enchant.jpg";
import neverland from "../../images/art/canvas/neverland.jpg";
import starrynight from "../../images/art/canvas/starrynight.jpg";

// misc
import creativity from "../../images/art/misc/creativity.jpg";
import outliers from "../../images/art/misc/outliers.jpg";
import dreamer from "../../images/art/misc/dreamer.jpg";
import wisdom from "../../images/art/misc/wisdom.jpg";
import innovation from "../../images/art/misc/innovation.jpg";
import fallingwater from "../../images/art/misc/fallingwater.jpg";

// sketch
import crash from "../../images/art/sketch/crash.jpg";
import froshquad from "../../images/art/sketch/froshquad.jpg";
import winteraft from "../../images/art/sketch/winteraft.jpg";
import thompson from "../../images/art/sketch/thompson.jpg";
import howls from "../../images/art/sketch/howls.jpg";
import spirited from "../../images/art/sketch/spirited.jpg";
import goodrich from "../../images/art/sketch/goodrich.jpg";
import upupaway from "../../images/art/sketch/upupaway.jpg";
import waves from "../../images/art/sketch/waves.jpg";
import paris from "../../images/art/sketch/paris.jpg";
import cherry from "../../images/art/sketch/cherry.jpg";
import eyes from "../../images/art/sketch/eyes.jpg";
import seattle from "../../images/art/sketch/seattle.jpg";
import multfalls from "../../images/art/sketch/multfalls.jpg";
import boat from "../../images/art/sketch/boat.jpg";
import clouds from "../../images/art/sketch/clouds.jpg";
import itsok from "../../images/art/sketch/itsok.jpg";
import italy from "../../images/art/sketch/italy.jpg";
import lake from "../../images/art/sketch/lake.jpg";
import bird from "../../images/art/sketch/bird.jpeg";
import glow from "../../images/art/sketch/glow.jpg";

const artInfo: ArtInfo[] = [
  {
    title: "Golden Aura",
    medium: "Acrylic on Canvas",
    year: 2015,
    image: fall,
  },
  {
    title: "Water Lilies - A Monet Study",
    medium: "Acrylic on Canvas",
    year: 2015,
    image: lilies,
  },
  {
    title: "A Day at the Ballet",
    medium: "Acrylic on Canvas",
    year: 2016,
    image: ballet,
  },
  {
    title: "Under the Rose Arch",
    medium: "Acrylic on Canvas",
    year: 2017,
    image: flowers,
  },
  {
    title: "Chasing Color",
    medium: "Acrylic on Canvas",
    year: 2017,
    image: chasingcolor,
  },
  {
    title: "Forest Daydream - A Sargent Study",
    medium: "Oil on Canvas",
    year: 2018,
    image: sargent,
  },
  {
    title: "German Fairytale - Rakotzbrücke Bridge",
    medium: "Acrylic on Canvas",
    year: 2018,
    image: bridge,
  },
  {
    title: "Poppy Fields - Monet Inspired Graduation Cap",
    medium: "Acrylic on Fabric",
    year: 2018,
    image: poppy,
  },
  {
    title: "Lost in the Fog",
    medium: "Oil on Canvas",
    year: 2019,
    image: mist,
  },
  {
    title: "Totoro & the Lily Pond - Studio Ghibli x Monet",
    medium: "Oil on Canvas",
    year: 2019,
    image: totoro,
  },
  {
    title: "Enchanted Forest",
    medium: "Oil on Canvas",
    year: 2019,
    image: enchant,
  },
  {
    title: "Finding Neverland",
    medium: "Acrylic on Canvas",
    year: 2020,
    image: neverland,
  },
  {
    title: "Starry Night - Van Gogh Inspired Graduation Cap",
    medium: "Acrylic on Fabric",
    year: 2022,
    image: starrynight,
  },
  {
    title: "Creativity",
    medium: "Digital",
    year: 2017,
    image: creativity,
  },
  {
    title: "Outliers Book Cover",
    medium: "Digital",
    year: 2017,
    image: outliers,
  },
  {
    title: "The Dreamer",
    medium: "Digital",
    year: 2017,
    image: dreamer,
  },
  {
    title: "Wisdom",
    medium: "Pencil on Paper",
    year: 2017,
    image: wisdom,
  },
  {
    title: "Innovation",
    medium: "Digital",
    year: 2018,
    image: innovation,
  },
  {
    title: "Model of Falling Water",
    medium: "Mixed Media",
    year: 2020,
    image: fallingwater,
  },
  {
    title: "Crash",
    medium: "Watercolor on Paper",
    year: 2018,
    image: crash,
  },
  {
    title: "Frosh Quad - Williams College",
    medium: "Watercolor on Paper",
    year: 2018,
    image: froshquad,
  },
  {
    title: "Winter Afternoon - Williams College",
    medium: "Watercolor on Paper",
    year: 2019,
    image: winteraft,
  },
  {
    title: "Thompson Chapel - Williams College",
    medium: "Watercolor on Paper",
    year: 2019,
    image: thompson,
  },
  {
    title: "Howl's Moving Castle",
    medium: "Watercolor on Paper",
    year: 2019,
    image: howls,
  },
  {
    title: "Spirited Away",
    medium: "Watercolor on Paper",
    year: 2019,
    image: spirited,
  },
  {
    title: "Goodrich Hall - Williams College",
    medium: "Watercolor on Paper",
    year: 2019,
    image: goodrich,
  },
  {
    title: "Up, Up, and Away",
    medium: "Watercolor on Paper",
    year: 2019,
    image: upupaway,
  },
  {
    title: "Summer Rush",
    medium: "Watercolor on Paper",
    year: 2019,
    image: waves,
  },
  {
    title: "Paris",
    medium: "Watercolor on Paper",
    year: 2019,
    image: paris,
  },
  {
    title: "Studio Ghibli Cherry Blossoms",
    medium: "Watercolor on Paper",
    year: 2020,
    image: cherry,
  },
  {
    title: "The Eyes - Williams College",
    medium: "Watercolor on Paper",
    year: 2020,
    image: eyes,
  },
  {
    title: "Seattle Sunrise",
    medium: "Watercolor on Paper",
    year: 2020,
    image: seattle,
  },
  {
    title: "Multnomah Falls - Portland",
    medium: "Watercolor on Paper",
    year: 2020,
    image: multfalls,
  },
  {
    title: "Brugge Boat Ride",
    medium: "Watercolor on Paper",
    year: 2020,
    image: boat,
  },
  {
    title: "Cloudy Skies",
    medium: "Watercolor on Paper",
    year: 2020,
    image: clouds,
  },
  {
    title: "It's Okay to Not Be Okay",
    medium: "Watercolor on Paper",
    year: 2020,
    image: itsok,
  },
  {
    title: "Venice Streets",
    medium: "Watercolor on Paper",
    year: 2020,
    image: italy,
  },
  {
    title: "Cherry Blossoms by the Lake",
    medium: "Watercolor on Paper",
    year: 2021,
    image: lake,
  },
  {
    title: "Yellow Bird",
    medium: "Watercolor on Paper",
    year: 2021,
    image: bird,
  },
  {
    title: "Morning Light",
    medium: "Watercolor on Paper",
    year: 2021,
    image: glow,
  },
];

// sort by year
artInfo.sort((a, b) => {
  if (a.year === b.year) {
    return -1;
  }
  return b.year - a.year;
});

export const artCards = artInfo;
