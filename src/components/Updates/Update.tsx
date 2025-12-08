import { Badge } from "@mantine/core";
import { Update as UpdateType } from "./updates";
import {
  FaAward,
  FaFileAlt,
  FaMicrophone,
  FaCameraRetro
} from "react-icons/fa";
import { RiFlag2Fill } from "react-icons/ri";

function Update(props: UpdateType) {
  let newText = props.text;

  props.links?.forEach((link) => {
    newText = newText.replace(
      link.text,
      `<a href="${link.url}" target="_blank" title="${link.text}">${link.text}</a>`
    );
  });

  const getColor = (tag: string) => {
    if (tag === "award") return "orange";
    if (tag === "milestone") return "pink";
    if (tag === "paper") return "purple";
    if (tag === "talk") return "blue";
    if (tag === "press") return "grape";
    return "gray";
  };

  const getIcon = (tag: string) => {
    if (tag === "award") return <FaAward />;
    if (tag === "milestone") return <RiFlag2Fill />;
    if (tag === "paper") return <FaFileAlt />;
    if (tag === "talk") return <FaMicrophone />;
    if (tag === "press") return <FaCameraRetro />;
    return <FaFileAlt />;
  };

  return (
    <div className="update">
      <b className="date">
        {props.month} {props.year}
      </b>

      <div>
        <p dangerouslySetInnerHTML={{ __html: newText }}></p>

        {props.tags.map((tag, index) => (
          <Badge
            className="update-tag"
            key={index}
            color={getColor(tag)}
            variant="light"
            size="xs"
            leftSection={getIcon(tag)}
          >
            {tag}
          </Badge>
        ))}
      </div>
    </div>
  );
}

export default Update;
