// @flow
import Dropdown from 'react-dropdown';

type Props = {
  options: Array<Object>,
  selectedItem: Object,
  onSelect: void
}

const DropDown = (props: Props) => {
  const { options, selectedItem, onSelect } = props;
  const handleChange = (e) => onSelect(e);

  return (
    <Dropdown
      options={options}
      onChange={handleChange}
      value={selectedItem.label}
      placeholder="Select network"
    />
  );
};

export default DropDown;
