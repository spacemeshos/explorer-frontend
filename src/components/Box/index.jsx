// @flow
import * as React from 'react';

type Props = {
  name: string;
}

const Box = (props: Props) => {
  const { name } = props;
  return (
    <div className="box">{`Page name: ${name}`}</div>
  );
};

export default Box;
