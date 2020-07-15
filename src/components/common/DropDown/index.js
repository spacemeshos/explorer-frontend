// @flow
import * as React from 'react';

import Dropdown from 'react-dropdown';

// const options = [
//   { value: 'network1', label: 'TestNet 0.1 "TweedleDee"' }, { value: 'network2', label: 'TestNet 0.2 "TweedleDee"' },
// ];

type Props = {
  options: Array<Object>
};

const DropDown = (props: Props) => {
  const { options } = props;
  console.log('options', options);
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
