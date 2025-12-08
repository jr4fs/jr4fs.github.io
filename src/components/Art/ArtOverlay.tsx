import { Grid, Group, Stack } from "@mantine/core";
import { ArtInfo, emptyArtCard } from "./art-info";
import { artStore } from "./artStore";
import { useEffect } from "react";
import MyImage from "../MyImage";

function ArtOverlay(props: any) {
  const { setCurrentPic, currentPic } = artStore();
  const pic = currentPic === -1 ? emptyArtCard : (props.pic as ArtInfo);

  // attach event listeners to this "art-overlay" div
  // esc key to close overlay
  // left/right arrow keys to navigate

  const handleKeyDown = (e: KeyboardEvent) => {
    const { currentPic: myCurPic } = artStore.getState();
    if (myCurPic === -1) {
      return;
    }
    e.preventDefault();
    e.stopPropagation();
    if (myCurPic !== -1) {
      if (e.key === "Escape") {
        // console.log("esc key");
        setCurrentPic(-1);
      } else if (e.key === "ArrowLeft" && myCurPic > 0) {
        // console.log("left arrow key");
        setCurrentPic(myCurPic - 1);
      } else if (e.key === "ArrowRight" && myCurPic < props.length - 1) {
        // console.log("right arrow key");
        setCurrentPic(myCurPic + 1);
      }
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  });

  return (
    <div id="art-overlay" className={currentPic === -1 ? "hidden" : ""}>
      <Grid gutter={{ base: "xl", sm: 40, md: 45, lg: 50 }} id="overlay-grid">
        <Grid.Col
          span={{ base: 12, xs: 7, sm: 8, md: 9, lg: 9 }}
          className="image"
        >
          <div className="image-wrapper">
            <MyImage
              src={pic.image}
              alt={pic.title}
              title={pic.title}
              overlaywrap
            />
          </div>
        </Grid.Col>
        {currentPic !== -1 && (
          <Grid.Col
            span={{ base: 12, xs: 5, sm: 4, md: 3, lg: 3 }}
            className={"caption"}
          >
            <Stack gap="xl" className="caption-stack">
              <Group className="arrows smaller monospace">
                <span onClick={() => setCurrentPic(-1)} title="close">
                  [x] close
                </span>
              </Group>
              <Stack gap={2}>
                <b>{pic.title}</b>
                <p className="smaller">
                  {pic.medium}, {pic.year}
                </p>
              </Stack>
              <Group className="arrows smaller monospace">
                <span
                  onClick={() => setCurrentPic(currentPic - 1)}
                  className={currentPic < 1 ? "disabled" : ""}
                  title="previous"
                >
                  &larr; prev
                </span>
                <span
                  onClick={() => setCurrentPic(currentPic + 1)}
                  className={currentPic > props.length - 2 ? "disabled" : ""}
                  title="next"
                >
                  next &rarr;
                </span>
              </Group>
            </Stack>
          </Grid.Col>
        )}
      </Grid>
    </div>
  );
}

export default ArtOverlay;
