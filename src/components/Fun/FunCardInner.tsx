import { CardSection, Divider, Stack } from "@mantine/core";
import { FunItem } from "./fun";
import MyImage from "../MyImage";

function FunCardInner(item: FunItem) {
  return (
    <CardSection>
      <MyImage className="fun-img" src={item.img} alt={item.type} />
      <div
        className={
          "overlay " +
          (item.type === "Food"
            ? "blue"
            : item.type === "Travel"
            ? "orange"
            : item.type === "Bullet Journal"
            ? "purple"
            : "")
        }
      >
        <Stack id="fun-text" gap={"xs"}>
          <p className="monospace">{item.type}</p>
          <Divider
            color="rgb(255,255,255,0.5)"
            size={"sm"}
            w={120}
            className="divider"
          />
          <p className="smaller">click for more</p>
        </Stack>
      </div>
    </CardSection>
  );
}

export default FunCardInner;
