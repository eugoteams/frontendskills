/** @format */

import AccordionComponent from "@/Component/AccordionComponent/AccordionComponent";
import Stack from "@/Component/UI/Stack";
import content from "@/model/content";
import { Fragment } from "react";
import js from "../public/assets/img/js.png";
import ImageComponent from "@/Component/ImageComponent/ImageComponent";
import Head from "next/head";

export default function Home() {
  return (
    <Fragment>
      <ImageComponent src={js} />
      <Stack $mg={"4rem"}>
        {content.map((chapter, index) => {
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
}
