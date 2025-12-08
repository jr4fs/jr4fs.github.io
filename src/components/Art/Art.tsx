import {
  Button,
  Divider,
  Grid,
  Group,
  RangeSlider,
  Select,
} from "@mantine/core";

import { artCards } from "./art-info";
import { useEffect, useState } from "react";
import ArtCard from "./ArtCard";
import ArtOverlay from "./ArtOverlay";

import { artStore } from "./artStore";

function Art() {
  const { currentPic, setCurrentPic } = artStore();

  const increment = 8;

  const [maxPics, setMaxPics] = useState(increment);

  const minYear = artCards[artCards.length - 1].year;
  const maxYear = artCards[0].year;

  const [yearRange, setYearRange] = useState([minYear, maxYear] as [
    number,
    number
  ]);

  const [medium, setMedium] = useState("all" as string);

  const media = [
    "all",
    "acrylic",
    "digital",
    "mixed media",
    "oil",
    "pencil",
    "watercolor",
  ];

  let allMedia = media.map((item) => {
    return { value: item, label: item };
  });

  const filteredPics = artCards.filter((card) => {
    return (
      card.year >= yearRange[0] &&
      card.year <= yearRange[1] &&
      (medium === "all" || card.medium.toLowerCase().includes(medium))
    );
  });
  const showPics = filteredPics.slice(0, maxPics);

  useEffect(() => {
    setCurrentPic(-1);
  }, []);

  useEffect(() => {
    if (maxPics > filteredPics.length) {
      // find nearest multiple of increment that is >= filteredPics.length
      let newMaxPics = maxPics;
      while (newMaxPics > filteredPics.length + increment) {
        newMaxPics -= increment;
      }
      setMaxPics(newMaxPics);
    }
  }, [filteredPics.length, maxPics]);

  return (
    <section id="art-section" className="smaller-top fade-in">
      <h2>Art</h2>
      <p className="art-desc">
        Click on a piece to expand. For more art, check out{" "}
        <a
          target="_blank"
          href="https://www.instagram.com/catherines_sketchbook/"
          title="@catherines_sketchbook"
          className="icons"
        >
          @catherines_sketchbook
        </a>{" "}
        :)
      </p>
      <Group id="filters" justify="space-between" gap={"xl"}>
        <Group id="slider-contain" gap={"xs"}>
          <b>Filter by year:</b>
          <span>{minYear}</span>
          <RangeSlider
            value={yearRange}
            min={minYear}
            max={maxYear}
            step={1}
            onChange={setYearRange}
            minRange={0}
            id="year-range"
            color="pink.3"
            size="sm"
          />
          <span>{maxYear}</span>
        </Group>
        <Group gap="xs" id="tag-contain">
          <b>or medium:</b>
          <Select
            size="xs"
            placeholder="select medium"
            data={allMedia}
            allowDeselect={false}
            id="tag-select"
            value={medium}
            onChange={(e) => setMedium(e as string)}
          />
        </Group>
      </Group>
      <Grid id="art-grid" gutter="xl">
        {showPics.map((card, index) => (
          <Grid.Col key={index} span={{ base: 12, xs: 6, sm: 4, md: 3, lg: 3 }}>
            <ArtCard card={card} index={index} />
          </Grid.Col>
        ))}
      </Grid>
      <Group gap={"xs"} mt={"md"} justify="center">
        {maxPics < filteredPics.length && (
          <Button
            variant="subtle"
            size="sm"
            onClick={() => setMaxPics(maxPics + increment)}
            className="smooth my-button"
          >
            Show More
          </Button>
        )}
        {maxPics > increment && maxPics < filteredPics.length && (
          <Divider
            orientation="vertical"
            size={3}
            mx={3}
            color={"#eee"}
            style={{ transform: "rotate(20deg)" }}
          />
        )}
        {showPics.length > increment && (
          <Button
            variant="subtle"
            size="sm"
            color="orange"
            onClick={() => setMaxPics(maxPics - increment)}
            className="smooth my-button"
          >
            Show Less
          </Button>
        )}
      </Group>
      <ArtOverlay pic={filteredPics[currentPic]} length={filteredPics.length} />
    </section>
  );
}

export default Art;
