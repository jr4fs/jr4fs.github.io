import { Button, Divider, Group } from "@mantine/core";
import Update from "../Updates/Update";
import { allUpdates } from "../Updates/updates";
import { useState } from "react";

function News() {
  const [maxUpdates, setMaxUpdates] = useState(5);

  const showUpdates = allUpdates.slice(0, maxUpdates);

  return (
    <section id="news-section">
      <div className="anchor" id="news"></div>
      <h2>News + Updates</h2>
      <div id="update-contain">
        {showUpdates.map((update, index) => (
          <div key={index}>
            <Update {...update} />
            {index < showUpdates.length - 1 && (
              <Divider size={"sm"} color={"gray.0"} />
            )}
          </div>
        ))}
      </div>
      <Group gap={"xs"} mt={"md"} justify="center">
        {maxUpdates < allUpdates.length && (
          <Button
            variant="subtle"
            size="sm"
            onClick={() => setMaxUpdates(maxUpdates + 5)}
            className="smooth my-button"
          >
            Show More
          </Button>
        )}
        {maxUpdates > 5 && maxUpdates < allUpdates.length && (
          <Divider
            orientation="vertical"
            size={3}
            mx={3}
            color={"#eee"}
            style={{ transform: "rotate(20deg)" }}
          />
        )}
        {showUpdates.length > 5 && (
          <Button
            variant="subtle"
            size="sm"
            color="orange"
            onClick={() => setMaxUpdates(maxUpdates - 5)}
            className="smooth my-button"
          >
            Show Less
          </Button>
        )}
      </Group>
    </section>
  );
}

export default News;
