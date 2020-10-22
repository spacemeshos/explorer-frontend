// @flow
import * as React from 'react';

import Dropdown from 'react-dropdown';

type Props = {
  options: Array<Object>
};

const DropDown = (props: Props) => {
  const { options } = props;
  const onSelect = (e) => console.log('select', e);
  const testOptions = [
    {
      value: 'dev.net',
      label: 'Dev-Net',
    },
    {
      value: 'test.net',
      label: 'TestNet 0.1 "TweedleDee"',
    },
  ];

  return (
    <Dropdown
      options={testOptions}
      onChange={onSelect}
      value="Dev-Net"
      placeholder="Select network"
    />
  );
};

export default DropDown;
