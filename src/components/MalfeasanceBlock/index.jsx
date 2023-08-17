// @flow
import { observer } from 'mobx-react';

import { MALFEASANCE } from '../../config/constants';
import { getColorByPageName } from '../../helper/getColorByPageName';

type Props = {
    title: string;
    color: string,
    desc: string;
    uiStore: string,
};

const MalfeasanceBlock = (props: Props) => {
  const { type, layer } = props;

  const typeTranslation = {
    MALFEASANCE_ATX: 'ATXs',
    MALFEASANCE_BALLOT: 'ballots',
    MALFEASANCE_HARE: 'Hare messages',
  };

  return (
    <div style={{ display: 'grid', 'padding-bottom': '20px' }}>
      <div className="malfeasanceBlock">
        <div className="malfeasanceBlock-wrap">
          <p style={{ color: getColorByPageName(MALFEASANCE).textColor }} className="malfeasanceBlock-title">This smesher identity is disqualified from participating in the protocol due to violation of protocol rules.</p>
          <p className="malfeasanceBlock-desc">
            The key associated with this smesher was used to sign two contradictory
            {' '}
            {typeTranslation[type]}
            {' '}
            in layer
            {' '}
            {layer}
            . This smesher will therefore be excluded from all future protocol decisions and denied any rewards beyond those already received.
          </p>
          <p className="malfeasanceBlock-link">
            <a href="https://spacemesh.io/blog/community-clarification-equivocation/">READ MORE</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default observer(MalfeasanceBlock);
