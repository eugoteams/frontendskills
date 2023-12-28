/** @format */

import { Fragment, memo, useEffect, useState } from "react";

const CodeHighLighter = ({ snippet, language }) => {
  return (
    <Fragment>
      <pre>
        <code className={`language-${language}`}>{snippet}</code>
      </pre>
    </Fragment>
  );
};

export default memo(CodeHighLighter);
