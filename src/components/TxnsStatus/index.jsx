// @flow
import { observer } from 'mobx-react';
import { mapTxResult } from '../../helper/tx';

type Props = {
  status: string
};

const TxnsStatus = (props: Props) => {
  const { state, result, message } = props;

  const status = mapTxResult(state, result);
  const txnsStatusClass = `txnsStatus ${status}`;

  const getStatusText = (data) => {
    switch (data) {
      case 'approved':
      case 'success':
        return 'success';
      case 'failure':
        return 'failure';
      case 'invalid':
        return 'invalid';
      case 'pending':
        return 'pending';
      default:
        break;
    }
  };

  return (
    <div className={txnsStatusClass}>
      { getStatusText(status) }
      { status === 'failure' && ` - ${message}`}
    </div>
  );
};

export default observer(TxnsStatus);
