import { Group, Grid, Card } from "@mantine/core";

import Picture from "../../images/jaspreet.png";

import { FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa";
import { FaGoogleScholar } from "react-icons/fa6";
import MyImage from "../MyImage";

function Masthead() {
  return (
    <div id="masthead">
      <Grid
        grow
        gutter={{ base: 20, xs: 25, sm: 40, md: 45, xl: 50 }}
        align="center"
      >
        <Grid.Col span={{ base: 12, sm: 5, md: 4, lg: 3 }}>
          <Card radius={"lg"} id="prof-pic-contain">
            <Card.Section>
              <MyImage
                src={Picture}
                id="prof-pic"
                title="Jaspreet Ranjit"
                alt="Picture of Jaspreet Ranjit"
              />
            </Card.Section>
          </Card>
        </Grid.Col>
        <Grid.Col span={{ base: 12, sm: 7, md: 8, lg: 9 }}>
          <Group justify="space-between" align="center" id="header-contain">
            <h1>Jaspreet Ranjit</h1>
            <Group gap={"sm"} className="icons" justify="end">
              <a
                target="_blank"
                href="mailto:jranjit@usc.edu"
                title="Email"
              >
                <FaEnvelope />
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/jaspreetranjit/"
                title="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
              <a
                target="_blank"
                href="https://scholar.google.com/citations?user=v0cFoUEAAAAJ&hl=en"
                title="Google Scholar"
              >
                <FaGoogleScholar />
              </a>
              <a
                target="_blank"
                href="https://github.com/jr4fs"
                title="Github"
              >
                <FaGithub />
              </a>
            </Group>
          </Group>

          <p className="monospace accent tagline grad2">
            CS Ph.D. Candidate @ University of Southern California
          </p>

          <p>

            I am a 4th Year PhD Candidate at the University of Southern California advised by <a href="https://swabhs.com/">Prof. Swabha Swayamdipta</a> in the NLP department at the <a href="https://dill-lab.github.io/">DILL Lab</a>, a student leader for the <a href="https://cais.usc.edu/news/life-after-cais-microsoft-scientist-shahrzad-gholamis-journey-in-harnessing-ai-for-social-good/">Center for AI in Society
            </a> and also Secretary for the Women in Science and Engineering at USC. 

            My research interests lie in investigating to what extent language models can help us understand societal issues (i.e. homelessness, suicide interventions) by exploring collaborative settings between domain experts and generative models. 
            I study how AI systems and domain experts can act as effective partners in knowledge extraction to ensure that model outputs reflect the values of the people they serve. 

            Previously, I was a Research Assistant in the <a href="https://www.vislang.ai/">Vision, Language and Learning Lab,</a>
            working with <a href="https://www.vicenteordonez.com/">Prof. Vicente Ord&oacute;&ntilde;ez - Rice Univ.</a> and <a href="https://tianlu-wang.github.io/">Tianlu Wang - Meta Research </a>  on exploring gender biases in Visual Recognition Models. 

            I graduated with my Master's in Computer Science from the <a href="https://engineering.virginia.edu/">University of Virginia</a>. I received my Bachelor of Science at the University of Virginia in Computer Science as a Rodman Scholar. 

            You can find more information in my{" "}
            <a target="_blank" href={"/src/files/Resume_2025.pdf"} title="CV">
              CV
            </a>
            .
          </p>
        </Grid.Col>
      </Grid>
    </div>
  );
}

export default Masthead;
