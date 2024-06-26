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
  const { kind, layer, debugInfo } = props;

  const kindTranslation = {
    MALFEASANCE_ATX: 'ATXs',
    MALFEASANCE_BALLOT: 'ballots',
    MALFEASANCE_HARE: 'Hare messages',
  };

  return (
    <div style={{ display: 'grid', paddingBottom: '20px' }}>
      <div className="malfeasanceBlock">
        <div className="malfeasanceBlock-wrap">
          <p style={{ color: getColorByPageName(MALFEASANCE).textColor }} className="malfeasanceBlock-title">
            This smesher
            identity is disqualified from participating in the protocol due to violation of protocol rules.
          </p>
          {kind === '5' ? (
            <p className="malfeasanceBlock-desc">
              {debugInfo.split('cause: ')[1]}
              <br />
              This smesher will therefore be excluded from all future protocol decisions and denied any rewards beyond
              those already received.
            </p>
          ) : (
            <p className="malfeasanceBlock-desc">
              The key associated with this smesher was used to sign two contradictory
              {' '}
              {kindTranslation[kind]}
              {' '}
              in layer
              {' '}
              {layer}
              . This smesher will therefore be excluded from all future protocol decisions and denied any rewards beyond
              those already received.
            </p>
          )}

          <p className="malfeasanceBlock-link">
            <a href="https://spacemesh.io/blog/community-clarification-equivocation/">READ MORE</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default observer(MalfeasanceBlock);
