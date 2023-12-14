// @flow
import { observer } from 'mobx-react';
import { mappingStatus } from '../../helper/mappingStatus';

type Props = {
  status: string
};

const TxnsStatus = (props: Props) => {
  const { status } = props;

  const currentStatus = mappingStatus(status);
  const txnsStatusClass = `txnsStatus ${currentStatus}`;

  const getStatusText = (data) => {
    switch (data) {
      case 'approved':
        return 'success';
      case 'pending':
        return 'pending';
      default:
        break;
    }
  };

  return (
    <div className={txnsStatusClass}>
      { getStatusText(currentStatus) }
    </div>
  );
};

export default observer(TxnsStatus);
