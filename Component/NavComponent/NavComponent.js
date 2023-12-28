/** @format */

import { Fragment, useState, useCallback } from "react";
import SideDrawer from "../SideDrawer/SideDrawer";
import Div from "../UI/Div";
import Anchor from "../UI/Anchor";
import Flex from "../UI/Flex";
import Title from "../UI/Title";
import { Menu, X } from "lucide-react";
import menu from "@/model/menu";

import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "900"],
});

const NavComponent = (props) => {
  const [drawer, setDrawer] = useState();

  const drawerToggle = useCallback(() => {
    setDrawer((prevState) => !prevState);
  }, []);

  return (
    <Fragment>
      <div className={inter.className}>
        <Div $pos={"fixed"} $height="5rem" $zIndex="82">
          <Flex>
            <Div $pd="1rem">
              <Title $center="true" $left="true">
                <Menu onClick={drawerToggle} />
              </Title>
            </Div>
            <Div $pd="1rem" $boxShadow>
              <Title $fw={"900"} $fz={"1.8rem"} $center="true">
                FrontEndDev.
              </Title>
            </Div>
            <Div $pd="1rem" $boxShadow>
              {/* <Title>Logo</Title> */}
            </Div>
          </Flex>
        </Div>

        {drawer && (
          <SideDrawer
            onBackGroundClickListener={drawerToggle}
            onClick={drawerToggle}
          >
            <Div $height={"4rem"} $pd={"1rem"} $pos={"sticky"}>
              <Flex>
                <Title $fz="2rem">menu.</Title>
                <X
                  fontSize={18}
                  absoluteStrokeWidth="true"
                  onClick={drawerToggle}
                />
              </Flex>
            </Div>
            <Div $overflow={"auto"} $height={"100vh"}>
              {menu.map((menuItem, index) => {
                const { label, path } = menuItem;
                return (
                  <Div
                    key={`menuItem_${index + 1}`}
                    $height={"5rem"}
                    $pd={"1rem"}
                    onClick={drawerToggle}
                  >
                    <Anchor href={path}>{label}</Anchor>
                  </Div>
                );
              })}
            </Div>
          </SideDrawer>
        )}
      </div>
    </Fragment>
  );
};

export default NavComponent;
