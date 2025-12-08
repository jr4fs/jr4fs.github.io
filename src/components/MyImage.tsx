import { Image } from "@mantine/core";
import { useEffect, useState } from "react";

function MyImage(props: any) {
  const [isLoaded, setIsLoaded] = useState(false);
  const loaded = () => {
    // console.log("loaded");
    setIsLoaded(true);
  };

  useEffect(() => {
    // console.log("changed src: ", props.src);
    setIsLoaded(false);
  }, [props.src]);

  const extraClasses = props.className ? props.className : "";

  const { overlaywrap, smallloader, insidepub, ...rest } = props;

  return (
    <div
      className={
        "loader-contain " +
        (insidepub ? "top-section " : "") +
        (overlaywrap ? "image-wrapper" : "")
      }
    >
      <Image
        onLoad={loaded}
        {...rest}
        className={
          "my-image " + (!isLoaded ? "loading" : "") + " " + extraClasses
        }
      />
      <div
        className={
          "loader " +
          (isLoaded ? "hidden " : "") +
          (smallloader ? "smaller" : "")
        }
      />
    </div>
  );
}
export default MyImage;
