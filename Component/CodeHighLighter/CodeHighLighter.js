/** @format */

import { Fragment, memo } from "react";
import Highlight from "react-highlight";
const CodeHighLighter = ({ snippet }) => {
  return (
    <Fragment>
      <Highlight language="javascript">{snippet}</Highlight>
    </Fragment>
  );
};

export default memo(CodeHighLighter);
