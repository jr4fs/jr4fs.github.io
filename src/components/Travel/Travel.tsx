import {
  Button,
  Divider,
  Grid,
  Group,
  RangeSlider,
  Select,
  Stack,
} from "@mantine/core";

import { livedInfo, travelCards } from "./travel-info";
import TravelCard from "./TravelCard";
import { useEffect, useState } from "react";

import { FaHeart } from "react-icons/fa";
import MyImage from "../MyImage";

function Travel() {
  const increment = 6;

  const minYear = travelCards[travelCards.length - 1].year;
  const maxYear = travelCards[0].year;

  const [yearRange, setYearRange] = useState([minYear, maxYear] as [
    number,
    number
  ]);

  const [country, setCountry] = useState("all" as string);

  const uniqueCountries = Array.from(
    new Set(travelCards.map((item) => item.country))
  ).sort();

  let countryData = uniqueCountries.map((item) => {
    return { value: item, label: item.toLowerCase() };
  });

  // prepend "all" option to countryData
  countryData.unshift({ value: "all", label: "all" });

  const [maxCards, setMaxCards] = useState(increment);

  const filteredCards = travelCards.filter((card) => {
    return (
      card.year >= yearRange[0] &&
      card.year <= yearRange[1] &&
      (country === "all" || card.country === country)
    );
  });
  const showCards = filteredCards.slice(0, maxCards);

  useEffect(() => {
    if (maxCards > filteredCards.length) {
      // find nearest multiple of increment that is >= filteredCards.length
      let newMaxCards = maxCards;
      while (newMaxCards > filteredCards.length + increment) {
        newMaxCards -= increment;
      }
      setMaxCards(newMaxCards);
    }
  }, [filteredCards.length, maxCards]);

  return (
    <section id="travel-section" className="smaller-top fade-in">
      <h2>Travel</h2>
      <p>Places I've been fortunate to visit...</p>
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
          <b>or country:</b>
          <Select
            size="xs"
            placeholder="select country"
            data={countryData}
            allowDeselect={false}
            id="tag-select"
            value={country}
            onChange={(e) => setCountry(e as string)}
          />
        </Group>
      </Group>
      <Grid id="travel-grid" gutter={"xl"}>
        {showCards.map((item, index) => (
          <Grid.Col
            span={{ base: 12, xs: 12, sm: 6, md: 4, lg: 4 }}
            key={index}
          >
            <TravelCard {...item} />
          </Grid.Col>
        ))}
      </Grid>
      <Group gap={"xs"} mt={"md"} justify="center">
        {maxCards < filteredCards.length && (
          <Button
            variant="subtle"
            size="sm"
            onClick={() => setMaxCards(maxCards + increment)}
            className="smooth my-button"
          >
            Show More
          </Button>
        )}
        {maxCards > increment && maxCards < filteredCards.length && (
          <Divider
            orientation="vertical"
            size={3}
            mx={3}
            color={"#eee"}
            style={{ transform: "rotate(20deg)" }}
          />
        )}
        {showCards.length > increment && (
          <Button
            variant="subtle"
            size="sm"
            color="orange"
            onClick={() => setMaxCards(maxCards - increment)}
            className="smooth my-button"
          >
            Show Less
          </Button>
        )}
      </Group>
      <p className="extra-margin-top">...and call home 🏠</p>
      <Grid id="lived-grid" gutter={"xl"}>
        {livedInfo.map((item, index) => (
          <Grid.Col
            span={{ base: 12, xs: 12, sm: 6, md: 6, lg: 4 }}
            key={index}
          >
            <Group gap={"md"} className="lived-contain">
              <a
                href={item.link}
                target="_blank"
                title={item.city}
                className="lived-link"
              >
                <MyImage
                  smallloader
                  className={
                    "lived-img " + (item.city !== "Williamstown" ? "left " : "")
                  }
                  src={item.image}
                  alt={item.city}
                  radius={"md"}
                />
              </a>
              <Stack gap={2}>
                <p className="emphasis lived-label">
                  {item.city}, {item.state}
                </p>
                <div className="icons">
                  <FaHeart />
                  {item.recs.map((rec, index) => (
                    <Group key={index} display={"inline"}>
                      <a href={rec.link} title={rec.rec} target="_blank">
                        {rec.rec}
                      </a>
                      {index < item.recs.length - 1 && <span> / </span>}
                    </Group>
                  ))}
                </div>
              </Stack>
            </Group>
          </Grid.Col>
        ))}
      </Grid>
    </section>
  );
}

export default Travel;
