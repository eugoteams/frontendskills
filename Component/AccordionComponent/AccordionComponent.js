/** @format */

import { Fragment, useCallback, useState } from "react";
import Accordion from "../UI/Accordion";
import AccordionHeader from "./AccordionHeader/AccordionHeader";
import AccordionBody from "./AccordionBody/AccordionBody";

const AccordionComponent = ({ id, title, description, tags, content }) => {
  const [clicked, setClicked] = useState(false);

  const onClickListener = useCallback(() => {
    setClicked((prevState) => !prevState);
  }, []);

  return (
    <Fragment>
      <Accordion $height={clicked && "48rem"}>
        <AccordionHeader
          id={id}
          title={title}
          tags={tags}
          onClickListener={onClickListener}
          clicked={clicked}
        />
        <AccordionBody content={content} description={description} />
      </Accordion>
    </Fragment>
  );
};

export default AccordionComponent;
