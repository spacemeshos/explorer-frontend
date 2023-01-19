// @flow
import { nanoid } from 'nanoid';

const RowPreloader = ({ rowCount }) => {
  const arr = Array.from(Array(rowCount).keys());

  return (
    arr.map(() => (
      <div key={nanoid()} className="tr">
        <div className="td">
          <div className="preloader" />
        </div>
      </div>
    ))
  );
};

export default RowPreloader;
