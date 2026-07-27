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

            Hello! I'm a 4th Year PhD Candidate at the University of Southern California advised by <a href="https://swabhs.com/">Prof. Swabha Swayamdipta</a> in the NLP department at the <a href="https://dill-lab.github.io/">DILL Lab</a>, a student leader for the <a href="https://cais.usc.edu/news/life-after-cais-microsoft-scientist-shahrzad-gholamis-journey-in-harnessing-ai-for-social-good/">Center for AI in Society
            </a> and also Secretary for the Women in Science and Engineering at USC. 
            
            My research advances approaches for collaborating with, and evaluating AI systems in societally important, high-stakes domains, particularly in social services, public health, and mental health care, including examining the safety risks of deploying language models in these settings. 
            Recently, I've also been interested in how AI agents will impact the future of work, and how we can center worker wellbeing, meaning, and experience in human-AI collaboration. 
            
          </p>
          <p>
            Previously, I interned with the Social and Responsible AI Team at <a href="https://social-dynamics.net/newsletter/2024/">Bell Labs</a>, and I was a Research Assistant in the <a href="https://www.vislang.ai/">Vision, Language and Learning Lab,</a>
            working with <a href="https://www.vicenteordonez.com/">Prof. Vicente Ord&oacute;&ntilde;ez - Rice Univ.</a> and <a href="https://tianlu-wang.github.io/">Tianlu Wang - Meta Research </a>  on exploring gender biases in Visual Recognition Models. 

            I graduated with my Master's in Computer Science from the <a href="https://engineering.virginia.edu/">University of Virginia</a>. I received my Bachelor of Science at the University of Virginia in Computer Science as a Rodman Scholar. 

            You can find more information in my{" "}
            <a target="_blank" href={"/assets/Resume_2026.pdf"} title="CV">
              CV.
            </a>
          
          If you want to chat about research or academia, please reach out to me at jranjit[@]usc[.]edu, especially if you are a woman/minority student considering grad school!

          {/* Special interest in interdisicplinary collaborations and working directly with stakeholders and community partners to build deployable tools that support socially impactful outcomes. 
          Developing tool that assists practitioners in extracting insights from large scale, unstructured text data for decision augmentaiton. 
          If you're a part of a community organizaztion interested in a demo, reach out here - , link to homepage for codebook dev demo. 
          Outside of research, involved in LA community as an active volunteer at School on Wheels.  */}

          </p>

          
        </Grid.Col>
      </Grid>
    </div>
  );
}

export default Masthead;
