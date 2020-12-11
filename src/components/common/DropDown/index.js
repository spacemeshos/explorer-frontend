// @flow
import * as React from 'react';

import Dropdown from 'react-dropdown';

const DropDown = () => {
  const onSelect = (e) => console.log('select', e);
  const testOptions = [
    {
      value: 'TweedleDee Open Testnet 122',
      label: 'TweedleDee Open Testnet 122',
    },
  ];

  return (
    <Dropdown
      options={testOptions}
      onChange={onSelect}
      value="TweedleDee Open Testnet 122"
      placeholder="Select network"
    />
  );
};

export default DropDown;
