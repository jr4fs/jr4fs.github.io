// import { Card, Group } from "@mantine/core";
// import { Pub } from "./pubs";

// import {
//   FaRegFileAlt,
//   FaDesktop,
//   FaCode,
//   FaLink,
//   FaYoutube,
//   FaCameraRetro,
// } from "react-icons/fa";
// import MyImage from "../MyImage";

// function Publication(props: Pub) {
//   // put span tags around "Catherine Yeh" in the author field
//   const author = props.author.replace(
//     "Catherine Yeh",
//     "<span class='emphasis grad2 accent'>Catherine Yeh</span>"
//   );

//   return (
//     <Card padding="md" radius="md" withBorder className="pub">
//       <a href={props.paper} target="_blank" title={props.title}>
//         <Card.Section className="top-section">
//           <MyImage
//             insidepub
//             src={props.image}
//             height={160}
//             alt={props.title}
//             fit="contain"
//           />
//         </Card.Section>
//       </a>

//       <div className="pub-inner">
//         <div>
//           <Group
//             justify="space-between"
//             align="center"
//             className="venue-tag-contain"
//           >
//             <p className="venue">
//               {props.venue.includes("Preprint")
//                 ? props.venue
//                 : props.venue + " " + props.year}
//             </p>
//             <Group gap="md" className="tags">
//               {props.tags.map((tag, i) => (
//                 <span
//                   key={i}
//                   className={
//                     `monospace tag ` +
//                     (tag === "ai"
//                       ? "tag1"
//                       : tag === "vis"
//                       ? "tag3"
//                       : tag === "hci"
//                       ? "tag2"
//                       : "tag4")
//                   }
//                 >
//                   {tag}
//                 </span>
//               ))}
//             </Group>
//           </Group>

//           <b className="title">{props.title}</b>
//           <p
//             className="author"
//             dangerouslySetInnerHTML={{ __html: author }}
//           ></p>
//           {props.summary && <p className="summary">{props.summary}</p>}
//         </div>

//         <Group gap={"0.5rem"} className="links">
//           {props.paper && (
//             <a href={props.paper} target="_blank" title={"paper"}>
//               <Group gap={"6"} className="link">
//                 <FaRegFileAlt /> paper
//               </Group>
//             </a>
//           )}
//           {props.paper2 && (
//             <a href={props.paper2} target="_blank" title={"paper v2"}>
//               <Group gap={"6"} className="link">
//                 <FaRegFileAlt />
//                 paper v2
//               </Group>
//             </a>
//           )}
//           {props.project && (
//             <a href={props.project} target="_blank" title="project">
//               <Group gap={"6"} className="link">
//                 <FaLink /> project
//               </Group>
//             </a>
//           )}
//           {props.demo && (
//             <a href={props.demo} target="_blank" title="demo">
//               <Group gap={"6"} className="link">
//                 <FaDesktop /> demo
//               </Group>
//             </a>
//           )}
//           {props.code && (
//             <a href={props.code} target="_blank" title="code">
//               <Group gap={"6"} className="link">
//                 <FaCode /> code
//               </Group>
//             </a>
//           )}
//           {props.poster && (
//             <a href={props.poster} target="_blank" title="poster">
//               <Group gap={"6"} className="link">
//                 <FaCameraRetro /> poster
//               </Group>
//             </a>
//           )}
//           {props.video && (
//             <a href={props.video} target="_blank" title="video">
//               <Group gap={"6"} className="link">
//                 <FaYoutube /> video
//               </Group>
//             </a>
//           )}
//         </Group>
//       </div>
//     </Card>
//   );
// }

// export default Publication;
import { Card, Group } from "@mantine/core";
import { Pub } from "./pubs";

import {
  FaRegFileAlt,
  FaDesktop,
  FaCode,
  FaLink,
  FaYoutube,
  FaCameraRetro,
  FaAward,
} from "react-icons/fa";
import MyImage from "../MyImage";

function Publication(props: Pub) {
  // highlight Jaspreet Ranjit in author list
  const author = props.author.replace(
    "Jaspreet Ranjit",
    "<span class='emphasis grad2 accent'>Jaspreet Ranjit</span>"
  );

  return (
    <Card padding="md" radius="md" withBorder className="pub">
      <a href={props.paper} target="_blank" title={props.title}>
        <Card.Section className="top-section">
          <MyImage
            insidepub
            src={props.image}
            height={160}
            alt={props.title}
            fit="contain"
          />
        </Card.Section>
      </a>

      <div className="pub-inner">
        <div>
          <Group
            justify="space-between"
            align="center"
            className="venue-tag-contain"
          >
            <p className="venue">
              {props.venue.includes("Preprint")
                ? props.venue
                : props.venue + " " + props.year}
            </p>

            <Group gap="md" className="tags">
              {props.tags.map((tag, i) => (
                <span
                  key={i}
                  className={
                    `monospace tag ` +
                    (tag === "ai"
                      ? "tag1"
                      : tag === "vis"
                      ? "tag3"
                      : tag === "hci"
                      ? "tag2"
                      : "tag4")
                  }
                >
                  {tag}
                </span>
              ))}
            </Group>
          </Group>

          <b className="title">{props.title}</b>
          <p
            className="author"
            dangerouslySetInnerHTML={{ __html: author }}
          ></p>

          {/* ⭐ NEW: Award Section */}
          {props.award && (
            <p className="award">
              <FaAward style={{ marginRight: "6px" }} />
              {props.award}
            </p>
          )}

          {props.summary && <p className="summary">{props.summary}</p>}
        </div>

        <Group gap={"0.5rem"} className="links">
          {props.paper && (
            <a href={props.paper} target="_blank" title={"paper"}>
              <Group gap={"6"} className="link">
                <FaRegFileAlt /> paper
              </Group>
            </a>
          )}
          {props.paper2 && (
            <a href={props.paper2} target="_blank" title={"paper v2"}>
              <Group gap={"6"} className="link">
                <FaRegFileAlt /> paper v2
              </Group>
            </a>
          )}
          {props.project && (
            <a href={props.project} target="_blank" title="project">
              <Group gap={"6"} className="link">
                <FaLink /> project
              </Group>
            </a>
          )}
          {props.demo && (
            <a href={props.demo} target="_blank" title="demo">
              <Group gap={"6"} className="link">
                <FaDesktop /> demo
              </Group>
            </a>
          )}
          {props.code && (
            <a href={props.code} target="_blank" title="code">
              <Group gap={"6"} className="link">
                <FaCode /> code
              </Group>
            </a>
          )}
          {props.poster && (
            <a href={props.poster} target="_blank" title="poster">
              <Group gap={"6"} className="link">
                <FaCameraRetro /> poster
              </Group>
            </a>
          )}
          {props.video && (
            <a href={props.video} target="_blank" title="video">
              <Group gap={"6"} className="link">
                <FaYoutube /> video
              </Group>
            </a>
          )}
        </Group>
      </div>
    </Card>
  );
}

export default Publication;
