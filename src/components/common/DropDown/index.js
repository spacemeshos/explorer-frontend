// @flow
import * as React from 'react';

import Dropdown from 'react-dropdown';

const DropDown = () => {
  const onSelect = (e) => console.log('select', e);
  const testOptions = [
    {
      value: 'test.net',
      label: 'TestNet',
    },
  ];

  return (
    <Dropdown
      options={testOptions}
      onChange={onSelect}
      value="TestNet"
      placeholder="Select network"
    />
  );
};

export default DropDown;
