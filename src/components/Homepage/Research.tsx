import {
  Button,
  Divider,
  Grid,
  Group,
  RangeSlider,
  Select,
} from "@mantine/core";

import { Tag, publications } from "../Pubs/pubs";
import Publication from "../Pubs/Publication";
import { useEffect, useState } from "react";

function Research() {
  const increment = 3;

  const minYear = publications[publications.length - 1].year;
  const maxYear = publications[0].year;

  const [yearRange, setYearRange] = useState([minYear, maxYear] as [
    number,
    number
  ]);

  const [field, setField] = useState("all" as string);

  const fieldData = [
    { value: "all", label: "all" },
    { value: "vis", label: "visualization" },
    { value: "ai", label: "artificial intelligence" },
    { value: "hci", label: "human-computer interaction" },
    { value: "misc", label: "misc" },
  ];

  const [maxPubs, setMaxPubs] = useState(increment);

  const filteredPubs = publications.filter((pub) => {
    return (
      pub.year >= yearRange[0] &&
      pub.year <= yearRange[1] &&
      (field === "all" || pub.tags.includes(field as Tag))
    );
  });
  const showPubs = filteredPubs.slice(0, maxPubs);

  useEffect(() => {
    if (maxPubs > filteredPubs.length) {
      // find nearest multiple of increment that is >= filteredPubs.length
      let newMaxPubs = maxPubs;
      while (newMaxPubs > filteredPubs.length + increment) {
        newMaxPubs -= increment;
      }
      setMaxPubs(newMaxPubs);
    }
  }, [filteredPubs.length, maxPubs]);

  return (
    <section id="research-section">
      <div className="anchor" id="research-highlights"></div>
      <h2>Research Highlights ✨</h2>
      {/* <p>
        My research explores how{" "}
        <span className="accent emphasis">artificial intelligence (AI)</span>{" "}
        and <span className="accent3 emphasis">visualization</span> can augment
        each other. Currently, I'm interested in <b>(1)</b> designing
        interactive visualization tools and methods to support model
        interpretability{" "}
        <span className="monospace smaller grad1">[VIS for AI]</span> and{" "}
        <b>(2)</b> leveraging the capabilities of generative AI models to
        enhance visualization workflows{" "}
        <span className="monospace smaller grad2">[AI for VIS]</span>.
      </p> */}
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
          <b>or tag:</b>
          <Select
            size="xs"
            placeholder="select tag"
            data={fieldData}
            allowDeselect={false}
            id="tag-select"
            value={field}
            onChange={(e) => setField(e as string)}
          />
        </Group>
      </Group>
      <Grid gutter={{ base: 20, sm: 30, md: 30, xl: 30 }} id="pubs">
        {showPubs.map((pub, i) => (
          <Grid.Col
            key={i}
            span={{ base: 12, xs: 6, sm: 6, md: 4, lg: 4 }}
            className="pub-contain"
          >
            <Publication {...pub} />
          </Grid.Col>
        ))}
      </Grid>
      <Group gap={"xs"} mt={"md"} justify="center">
        {maxPubs < filteredPubs.length && (
          <Button
            variant="subtle"
            size="sm"
            onClick={() => setMaxPubs(maxPubs + increment)}
            className="smooth my-button"
          >
            Show More
          </Button>
        )}
        {maxPubs > increment && maxPubs < filteredPubs.length && (
          <Divider
            orientation="vertical"
            size={3}
            mx={3}
            color={"#eee"}
            style={{ transform: "rotate(20deg)" }}
          />
        )}
        {showPubs.length > increment && (
          <Button
            variant="subtle"
            size="sm"
            color="orange"
            onClick={() => setMaxPubs(maxPubs - increment)}
            className="smooth my-button"
          >
            Show Less
          </Button>
        )}
      </Group>
    </section>
  );
}

export default Research;
