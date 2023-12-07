/** @format */

import React, { Fragment, memo, useCallback } from "react";
import Div from "@/Component/UI/Div";
import Flex from "@/Component/UI/Flex";
import Text from "@/Component/UI/Text";
import Container from "@/Component/UI/Container";
import Title from "@/Component/UI/Title";
import Stack from "@/Component/UI/Stack";
import { ChevronUp, ChevronDown } from "lucide-react";
import NumberComponent from "../NumberComponent/NumberComponent";

const AccordionHeader = ({ id, title, tags, onClickListener, clicked }) => {
  const iconSize = 20;

  const onClick = useCallback(() => {
    onClickListener();
  }, []);

  return (
    <Fragment>
      <Div onClick={onClick} $height={"9rem"} $zIndex={"32"} $pd={"1rem"}>
        <Flex>
          <Container>
            <Flex>
              <NumberComponent id={id} />
            </Flex>
          </Container>
          <Container $width={"100%"}>
            <Stack>
              <Title $fz="1.8rem" $fw={"750"}>
                {title}
              </Title>
              <Text
                dangerouslySetInnerHTML={{ __html: tags }}
                $fz="1.3rem"
                $fw="500"
              ></Text>
            </Stack>
          </Container>
          <Container>
            <Flex>
              {clicked ? (
                <ChevronUp size={iconSize} />
              ) : (
                <ChevronDown size={iconSize} />
              )}
            </Flex>
          </Container>
        </Flex>
      </Div>
    </Fragment>
  );
};

export default memo(AccordionHeader);
