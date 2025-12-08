import { Stack } from "@mantine/core";
import Masthead from "./Homepage/Masthead";
import Research from "./Homepage/Research";
import News from "./Homepage/News";
// import Misc from "./Homepage/Misc";

function Home() {
  return (
    <Stack id="home" className="fade-in">
      <Masthead />
      <Research />
      <News />
      {/* <Misc /> */}
    </Stack>
  );
}

export default Home;
