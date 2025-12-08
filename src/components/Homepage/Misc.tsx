import { Card, Grid, Group, Stack } from "@mantine/core";

import { funItems, resources, my_projects } from "../Fun/fun";
import FunCardInner from "../Fun/FunCardInner";
import { Link } from "react-router-dom";
import MyImage from "../MyImage";
import { Fragment } from "react/jsx-runtime";

function Misc() {
  return (
    <section id="misc-section">
      <div className="anchor" id="misc"></div>
      <h2>Misc</h2>
      <p>Some things I enjoy outside of research 💫</p>

      <Grid id="fun-cards" gutter={"xl"}>
        {funItems.map((item, index) => (
          <Grid.Col key={index} span={{ base: 12, xs: 6, sm: 4, md: 3, lg: 3 }}>
            <Card className="fun-card" radius={"lg"}>
              {item.type === "Travel" || item.type === "Art" ? (
                <Link to={`/${item.type.toLowerCase()}`} title={`${item.type}`}>
                  <FunCardInner {...item} />
                </Link>
              ) : (
                <a href={item.link} title={item.type} target={"_blank"}>
                  <FunCardInner {...item} />
                </a>
              )}
            </Card>
          </Grid.Col>
        ))}
      </Grid>

      <Grid id="resource-proj-grid" gutter={{ base: 40, md: 50, lg: 50 }}>
        <Grid.Col span={{ base: 12, xs: 12, sm: 12, md: 8, lg: 9 }}>
          <Stack id="projects" className="subsection" gap={8}>
            <b>Old Projects</b>
            <Grid gutter="md" id="project-grid">
              {my_projects.map((project, index) => (
                <Grid.Col
                  key={index}
                  span={{ base: 12, xs: 12, sm: 6, md: 6, lg: 6 }}
                  className="project-card"
                >
                  <Group className="project-inner">
                    <a
                      href={
                        project.demo
                          ? project.demo
                          : project.code
                          ? project.code
                          : project.poster
                          ? project.poster
                          : project.presentation
                      }
                      target="_blank"
                      title={project.title}
                    >
                      <MyImage
                        smallloader
                        src={project.img}
                        radius={"100%"}
                        alt={project.title}
                      />
                    </a>
                    <Stack gap={0}>
                      <p className="emphasis">{project.title}</p>
                      <div className="icons">
                        {project.demo && (
                          <a href={project.demo} target="_blank" title="demo">
                            demo
                          </a>
                        )}
                        {project.code && (
                          <a href={project.code} target="_blank" title="code">
                            code
                          </a>
                        )}
                        {project.poster && (
                          <a
                            href={project.poster}
                            target="_blank"
                            title="poster"
                          >
                            poster
                          </a>
                        )}
                        {project.presentation && (
                          <a
                            href={project.presentation}
                            target="_blank"
                            title="presentation"
                          >
                            presentation
                          </a>
                        )}
                      </div>
                    </Stack>
                  </Group>
                </Grid.Col>
              ))}
            </Grid>
          </Stack>
        </Grid.Col>

        <Grid.Col span={{ base: 12, xs: 12, sm: 12, md: 4, lg: 3 }}>
          <Stack id="resources" className="subsection" gap={4}>
            <b>Resources</b>
            {resources.map((resource, index) => (
              <Fragment key={index}>
                {resource.external ? (
                  <a
                    href={resource.link}
                    target="_blank"
                    title={resource.title}
                  >
                    {resource.title}
                  </a>
                ) : (
                  <Link to={resource.link} title={resource.title}>
                    {resource.title}
                  </Link>
                )}
              </Fragment>
            ))}
          </Stack>
        </Grid.Col>
      </Grid>
    </section>
  );
}

export default Misc;
