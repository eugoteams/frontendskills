/** @format */

import AccordionComponent from "@/Component/AccordionComponent/AccordionComponent";
import Container from "@/Component/UI/Container";
import Stack from "@/Component/UI/Stack";
import Title from "@/Component/UI/Title";
import content from "@/model/content";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <Stack>
        <Container $width={"100%"}>
          <Title $fz="2rem" $fw={"900"} $center>
            javascript
          </Title>
        </Container>

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
