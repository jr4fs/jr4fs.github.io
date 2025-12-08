import { Card, CardSection, Stack } from "@mantine/core";

import { artStore } from "./artStore";
import MyImage from "../MyImage";

function ArtCard(props: any) {
  const { setCurrentPic } = artStore();
  return (
    <Card
      className="art-card"
      radius={"md"}
      shadow="md"
      title={props.card.title + " (" + props.card.year + ")"}
      onClick={() => setCurrentPic(props.index)}
    >
      <CardSection>
        <MyImage src={props.card.image} alt={props.card.title} />
        <Stack gap={"xs"} className={"overlay " + `acc${props.index % 16}`}>
          <p>+</p>
        </Stack>
      </CardSection>
    </Card>
  );
}

export default ArtCard;
