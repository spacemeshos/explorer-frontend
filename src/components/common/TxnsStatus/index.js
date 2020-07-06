// @flow
import * as React from 'react';

type Props = {
  status: string
};

const TxnsStatus = (props: Props) => {
  const { status } = props;

  const txnsStatusClass = `txnsStatus ${status}`;

  const getStatusText = (status) => {
    switch(status) {
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
      { getStatusText(status) }
    </div>
  );
};

export default TxnsStatus;
