import { Group } from "@mantine/core";
import { useWindowScroll } from "@uidotdev/usehooks";
import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

function Nav(props: any) {
  const [selected, setSelected] = useState("about");
  const isHome = props.home;

  const [{ y }] = useWindowScroll();

  useEffect(() => {
    if (!isHome) {
      setSelected("about");
      return;
    }

    const curY = y as number;

    // find positions of each section
    const research = document.getElementById("research-section")?.offsetTop;
    const news = document.getElementById("news-section")?.offsetTop;
    // const misc = Math.min(
    //   document.getElementById("misc-section")?.offsetTop ||
    //     document.body.scrollHeight,
    //   document.documentElement.offsetHeight -
    //     document.documentElement.clientHeight
    // );

    // if (misc && curY > misc - 150) {
    //   setSelected("misc");
    if (news && curY > news - 150) {
      setSelected("news");
    // } else if (news && curY > news - 150) {
    //   setSelected("news");
    } else if (research && curY > research - 150) {
      setSelected("research");
    } else {
      setSelected("about");
    }
  }, [y, isHome]);

  return (
    <>
      {isHome ? (
        <Group justify="center" id="nav" gap={"xl"}>
          <Link
            className={selected === "about" ? "selected" : ""}
            onClick={() => {
              setSelected("about");
              window.scrollTo(0, 0);
            }}
            to="/"
            title="about"
          >
            About
          </Link>
          <Link
            to="#research-highlights"
            className={selected === "research" ? "selected" : ""}
            onClick={() => setSelected("research")}
            title="research"
          >
            Research
          </Link>
          <Link
            to="#news"
            className={selected === "news" ? "selected" : ""}
            onClick={() => setSelected("news")}
            title="news"
          >
            News
          </Link>
          {/* <Link
            to="#misc"
            className={selected === "misc" ? "selected" : ""}
            onClick={() => setSelected("misc")}
            title="misc"
          >
            Misc
          </Link> */}
        </Group>
      ) : (
        <Group justify="center" id="nav" gap={"xl"}>
          <Link to="/" title="home">
            &larr; Back to Home
          </Link>
        </Group>
      )}
    </>
  );
}
export default Nav;
