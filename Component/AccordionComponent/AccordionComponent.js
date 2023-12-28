/** @format */

import { Fragment, useCallback, useState } from "react";
import style from "./AccordionComponent.module.css";
import Accordion from "../UI/Accordion";
import AccordionHeader from "./AccordionHeader/AccordionHeader";
import AccordionBody from "./AccordionBody/AccordionBody";
import { Check } from "lucide-react";

const AccordionComponent = ({
  id,
  title,
  description,
  tags,
  content,
  language,
  level,
}) => {
  const [clicked, setClicked] = useState(false);

  const onClickListener = useCallback(() => {
    setClicked((prevState) => !prevState);
  }, []);

  return (
    <Fragment>
      <div className={`${style.wrapper}`}>
        <Accordion $height={clicked && "48rem"}>
          <AccordionHeader
            id={id}
            title={title}
            tags={tags}
            onClickListener={onClickListener}
            clicked={clicked}
          />
          <AccordionBody
            content={content}
            description={description}
            language={language}
          />
        </Accordion>
        {level && (
          <div className={`${style.icon_required}`}>
            <Check size={13} color="white" absoluteStrokeWidth />
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default AccordionComponent;
