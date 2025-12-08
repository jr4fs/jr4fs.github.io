import { Card, CardSection, Group, Image } from "@mantine/core";
import { TravelInfo } from "./travel-info";
import MyImage from "../MyImage";

function TravelCard(props: TravelInfo) {
  return (
    <Card className="travel-card" shadow="md" radius={"md"}>
      <CardSection className="travel-top">
        <a href={props.link} target="_blank" title={props.city}>
          <MyImage className="travel-img" src={props.image} alt={props.city} />
        </a>
        {props.logo && (
          <Image src={props.logo} alt="conference logo" className="logo" />
        )}
      </CardSection>

      <Group
        justify="space-between"
        pt={"sm"}
        gap={6}
        className="travel-details"
      >
        <b>
          {props.month} {props.year}
        </b>
        <p>
          📍 {props.city}, {props.country}
        </p>
      </Group>
    </Card>
  );
}

export default TravelCard;
