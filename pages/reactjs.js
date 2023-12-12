/** @format */

import React, { Fragment } from "react";
import { Head } from "next/document";
import ImageComponent from "@/Component/ImageComponent/ImageComponent";
import reactjs from "../public/assets/img/reactjs.png";
import Title from "@/Component/UI/Title";
import reactuts from "@/model/reacttuts";
import Stack from "@/Component/UI/Stack";
import AccordionComponent from "@/Component/AccordionComponent/AccordionComponent";

const ReactJs = (props) => {
  return (
    <Fragment>
      <ImageComponent src={reactjs} />
      <Title $fz={"2rem"} $fw={"800"} $center>
        Under Work ....!
      </Title>
      <Stack $mg={"4rem"}>
        {reactuts.map((chapter, index) => {
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
            />
          );
        })}
      </Stack>
    </Fragment>
  );
};

export default ReactJs;
