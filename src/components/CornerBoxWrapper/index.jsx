// @flow
import * as React from 'react';

type Props = {
  children: React.node
};

const CornerBoxWrapper = (props: Props) => {
  const { children } = props;
  return (
    <div className="cornerBox">
      {children}
    </div>
  );
};

export default CornerBoxWrapper;
