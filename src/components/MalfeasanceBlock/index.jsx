// @flow
import { observer } from 'mobx-react';

import { Spacemeshv2alpha1MalfeasanceProof } from 'api';
import { MALFEASANCE } from '../../config/constants';
import { getColorByPageName } from '../../helper/getColorByPageName';

type Props = {
  proof: Spacemeshv2alpha1MalfeasanceProof,
};

const MalfeasanceBlock = (props: Props) => {
  const { proof } = props;

  const message = () => {
    switch (proof.type) {
      case 1:
        return `The key associated with this smesher was used to sign two contradictory ATXs in epoch ${proof.properties.publish_epoch}.`;
      case 2:
        return `The key associated with this smesher was used to sign two contradictory ballots in layer ${proof.properties.layer}.`;
      case 3:
        return `The key associated with this smesher was used to sign two contradictory Hare messages in layer ${proof.properties.layer} round ${proof.properties.round}.`;
      case 4:
        return `Smesher published ATX ${proof.properties.atx} with invalid PoST index ${proof.properties.index}.`;
      case 5:
        return `Smesher published ATX ${proof.properties.atx1} and ${proof.properties.atx2} with the same previous ATX ${proof.properties.prev_atx}.`;
      default:
        return (
          <div
            style={{
              display: "grid",
              position: "relative",
              zIndex: 1,
            }}
          >
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                marginTop: "15px",
              }}
            >
              <tbody>
                {Object.entries(proof.properties).map(([key, value]) => (
                  <tr key={key} style={{ borderBottom: "1px solid #ddd" }}>
                    <td
                      style={{
                        padding: "12px 16px",
                        fontWeight: "bold",
                        width: "30%",
                        verticalAlign: "top",
                      }}
                    >
                      {key}:
                    </td>
                    <td
                      style={{
                        padding: "12px 16px",
                        wordBreak: "break-all",
                      }}
                    >
                      {value.toString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
    }
  };

  return (
    <div
      style={{
        display: "grid",
        paddingBottom: "20px",
        marginBottom: "0px",
        position: "relative",
        zIndex: 1,
      }}
    >
      <div className="malfeasanceBlock">
        <div className="malfeasanceBlock-wrap">
          <p
            style={{ color: getColorByPageName(MALFEASANCE).textColor }}
            className="malfeasanceBlock-title"
          >
            This smesher identity is disqualified from participating in the
            protocol due to violation of protocol rules.
          </p>
          <p className="malfeasanceBlock-desc">
            {message()}
            <br />
            This smesher will therefore be excluded from all future protocol
            decisions and denied any rewards beyond those already received.
          </p>

          <p className="malfeasanceBlock-link">
            <a href="https://spacemesh.io/blog/community-clarification-equivocation/">
              READ MORE
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default observer(MalfeasanceBlock);
