/** @format */

import { Fragment } from "react";
import Div from "../UI/Div";
import OverLay from "../UI/Overlay";

const SideDrawer = ({ children, onBackGroundClickListener }) => {
  return (
    <Fragment>
      <Div $pos="absolute" $zIndex={"85"} $bgColor={"inherit"}>
        <OverLay onClick={onBackGroundClickListener} />
        <Div
          $pos="fixed"
          $width="35rem"
          $mdWidth="100%"
          $bgColor="#fffffe"
          $zIndex={"95"}
        >
          {children}
        </Div>
      </Div>
    </Fragment>
  );
};

export default SideDrawer;
