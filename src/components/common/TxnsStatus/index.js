// @flow
import * as React from 'react';
import {observer} from 'mobx-react';

type Props = {
  status: string
};

const TxnsStatus = (props: Props) => {
  const { status } = props;

  const mapStatus = (status) => {
    switch (status) {
      case 0:
        return 'unspecified';
      case 1:
        return 'rejected';
      case 2:
        return 'insufficientFunds';
      case 3:
        return 'conflicting';
      case 4:
        return 'pending';
      case 5:
        return 'processing';
      case 6:
        return 'approved';
      default:
        break;
    }
  };

  const currentStatus = mapStatus(status);
  const txnsStatusClass = `txnsStatus ${mapStatus(status)}`;

  const getStatusText = (data) => {
    switch (data) {
      case 'approved':
        return 'success';
      case 'confirmed':
        return 'success';
      case 'insufficientFunds':
        return 'Error - insufficient funds';
      case 'conflicting':
        return 'conflicting';
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
