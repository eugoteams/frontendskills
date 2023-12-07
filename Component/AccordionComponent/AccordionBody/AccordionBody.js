/** @format */

import { Fragment, memo } from "react";
import WrapperDiv from "@/Component/UI/WrapperDiv";
import Text from "@/Component/UI/Text";
import Title from "@/Component/UI/Title";
import Stack from "@/Component/UI/Stack";
import CodeHighLighter from "@/Component/CodeHighLighter/CodeHighLighter";
import Div from "@/Component/UI/Div";

const AccordionBody = ({ description, content }) => {
  return (
    <Fragment>
      <Div $overflow="auto" $height={"100%"}>
        <WrapperDiv>
          <Stack>
            <Text
              dangerouslySetInnerHTML={{ __html: description }}
              $fz="1.3rem"
              $fw="500"
              $color="#495057"
            ></Text>
            <ul>
              {content.map((cnt, index) => {
                return (
                  <li key={`ch_content_${index}`}>
                    <Stack>
                      <Title $fz="1.45rem" $fw={"700"} $color="#212529">
                        {cnt["subTitle"]}
                      </Title>
                      <Text
                        $fz="1.3rem"
                        $fw="500"
                        $color="#495057"
                        dangerouslySetInnerHTML={{
                          __html: cnt["subDescription"],
                        }}
                      ></Text>
                      {cnt["snippet"] && (
                        <CodeHighLighter
                          snippet={cnt["snippet"]}
                        ></CodeHighLighter>
                      )}
                    </Stack>
                  </li>
                );
              })}
            </ul>
          </Stack>
        </WrapperDiv>
      </Div>
    </Fragment>
  );
};

export default memo(AccordionBody);
