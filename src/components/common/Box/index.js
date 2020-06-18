// @flow
import * as React from 'react';

type Props = {
  name: string;
}

const Box = (props: Props) => <div className="box">{`Page name: ${props.name}`}</div>;

export default Box;
