// @flow
import * as React from 'react';

import Dropdown from 'react-dropdown';

type Props = {
  options: Array<Object>
};

const DropDown = (props: Props) => {
  const { options } = props;
  const onSelect = (e) => console.log('select', e);
  const testOptions =[
    {
      value: 'test.net',
      label: 'TestNet 0.1 "TweedleDee"'
    },
    {
      value: 'test.net',
      label: 'TestNet 0.2 "TweedleDee"'
    },
    {
      value: 'test.net',
      label: 'TestNet 0.3 "TweedleDee"'
    },
  ];

  return (
    <Dropdown
      options={testOptions}
      onChange={onSelect}
      value='TestNet 0.1 "TweedleDee"'
      placeholder="Select network"
    />
  );
};

export default DropDown;
