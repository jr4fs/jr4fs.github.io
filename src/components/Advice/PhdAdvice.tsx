import { Accordion, Button, Divider, Group } from "@mantine/core";
import { advice } from "./advice";
import Tip from "./Tip";
import { useState } from "react";

function PhdAdvice() {
  const [tabsOpened, setTabsOpened] = useState([] as string[]);

  const allSections = advice.map((section) => section.title);
  return (
    <section id="phd-advice" className="smaller-top fade-in">
      <h2>Applying for a Ph.D.</h2>
      <p>
        Some advice and resources for applying to CS Ph.D. programs in the
        United States.
      </p>
      <p>
        <b>Disclaimer:</b> Everything on this page is my personal opinion and
        reflects my own experience applying to Ph.D. programs during the
        2021-2022 application cycle as a college senior, so please take my words
        with a grain of salt.
      </p>

      <Group justify="space-between" gap="xl" align="center" id="top-group">
        <p className="grad2 monospace accent-gray" id="good-luck">
          ✧˖°.✮ Good luck! I'm rooting for you! *:･ﾟ✧
        </p>
        <Group gap={"xs"} justify="center">
          {/* {tabsOpened.length < allSections.length && ( */}
          <Button
            variant="subtle"
            size="sm"
            onClick={() => setTabsOpened(allSections)}
            title="Expand All"
            className={
              "smooth my-button " +
              (tabsOpened.length === allSections.length ? "disabled" : "")
            }
          >
            Expand All
          </Button>
          {/* )} */}
          {/* {tabsOpened.length > 0 && tabsOpened.length < allSections.length && ( */}
          <Divider
            orientation="vertical"
            size={3}
            mx={3}
            color={"#eee"}
            style={{ transform: "rotate(20deg)" }}
          />
          {/* )} */}
          {/* {tabsOpened.length > 0 && ( */}
          <Button
            variant="subtle"
            size="sm"
            color="orange"
            title="Collapse All"
            onClick={() => setTabsOpened([])}
            className={
              "smooth my-button " + (tabsOpened.length === 0 ? "disabled" : "")
            }
          >
            Collapse All
          </Button>
          {/* )} */}
        </Group>
      </Group>
      <Accordion
        multiple
        variant="separated"
        id="advice-accordion"
        value={tabsOpened}
        onChange={setTabsOpened}
      >
        {advice.map((section, index) => (
          <Accordion.Item key={index} value={section.title}>
            <Accordion.Control icon={section.emoji}>
              <b className="tip-title">{section.title}</b>
            </Accordion.Control>
            <Accordion.Panel>
              <>
                {section.tips.map((tip, index) => (
                  <div className={"tip-contain"} key={index}>
                    <Tip {...tip} />
                    {index < section.tips.length - 1 && (
                      <Divider size={"sm"} color={"pink.1"} />
                    )}
                  </div>
                ))}
              </>
            </Accordion.Panel>
          </Accordion.Item>
        ))}
      </Accordion>
    </section>
  );
}

export default PhdAdvice;
