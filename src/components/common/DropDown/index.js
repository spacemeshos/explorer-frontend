// @flow
import * as React from 'react';

import Dropdown from 'react-dropdown';

type Props = {
  options: Array<Object>
};

const DropDown = (props: Props) => {
  const { options } = props;
  const onSelect = (e) => console.log('select', e);

  return (
    <Dropdown
      options={options}
      onChange={onSelect}
      value='TestNet 0.1 "TweedleDee"'
      placeholder="Select network"
    />
  );
};

export default DropDown;
