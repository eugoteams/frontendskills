/** @format */

import { Fragment, memo, useEffect, useState } from "react";
import Prism from "prismjs";
import AccordionComponent from "../AccordionComponent/AccordionComponent";
import Stack from "../UI/Stack";

const DocComponent = ({ imageSrc, data }) => {
  const [client, setClient] = useState(false);

  useEffect(() => {
    setClient((prevSate) => true);
    return () => {
      setClient((prevSate) => false);
    };
  }, []);

  useEffect(() => {
    Prism.highlightAll();
  }, [client]);

  return (
    <Fragment>
      <Stack $mg={"4rem"}>
        {client &&
          data.map((chapter, index) => {
            let value = index + 1;
            let num = value / 10 < 1 ? "0" + value : value;
            return (
              <AccordionComponent
                key={`javascript_${index}`}
                id={num}
                title={chapter["title"]}
                description={chapter["description"]}
                tags={chapter["tags"]}
                content={chapter["content"]}
                language={"javascript"}
              />
            );
          })}
      </Stack>
    </Fragment>
  );
};

export default memo(DocComponent);
